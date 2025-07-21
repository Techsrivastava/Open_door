'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { useToast } from '@/hooks/use-toast';
import apiService from '@/lib/services/api-service';
import { useAuth } from '@/contexts/auth-context';

interface Favorite {
  _id: string;
  packageId: string;
  package: {
    _id: string;
    name: string;
    location: string;
    duration: string;
    price: number;
    image?: string;
  };
}

interface FavoritesListProps {
  userId?: string;
}

export default function FavoritesList({ userId }: FavoritesListProps) {
  const { toast } = useToast();
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentUserId = userId || user?._id;

  useEffect(() => {
    if (!currentUserId) {
      setIsLoading(false);
      return;
    }

    const fetchFavorites = async () => {
      try {
        const response = await apiService.getUserFavorites(currentUserId);
        setFavorites(response.data || []);
      } catch (err) {
        console.error('Failed to fetch favorites:', err);
        setError('Failed to load your favorites. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, [currentUserId]);

  const handleRemoveFavorite = async (favoriteId: string) => {
    if (!currentUserId) return;

    try {
      await apiService.removeFromFavorites(currentUserId, favoriteId);
      setFavorites(favorites.filter(fav => fav._id !== favoriteId));
      toast({
        title: 'Removed from favorites',
        description: 'The package has been removed from your favorites.',
      });
    } catch (err) {
      console.error('Failed to remove favorite:', err);
      toast({
        title: 'Failed to remove',
        description: 'Could not remove the package from your favorites. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (!currentUserId) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>My Favorites</CardTitle>
          <CardDescription>Your saved packages and destinations</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="flex flex-col items-center space-y-4">
            <Icons.user className="h-8 w-8 text-muted-foreground" />
            <p>Please log in to view your favorites</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>My Favorites</CardTitle>
          <CardDescription>Your saved packages and destinations</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="flex flex-col items-center space-y-4">
            <Icons.spinner className="h-8 w-8 animate-spin text-primary" />
            <p>Loading your favorites...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>My Favorites</CardTitle>
          <CardDescription>Your saved packages and destinations</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="flex flex-col items-center space-y-4">
            <Icons.warning className="h-8 w-8 text-destructive" />
            <p>{error}</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (favorites.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>My Favorites</CardTitle>
          <CardDescription>Your saved packages and destinations</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="flex flex-col items-center space-y-4">
            <Icons.heart className="h-16 w-16 text-muted-foreground opacity-20" />
            <h3 className="text-xl font-medium">No Favorites Yet</h3>
            <p className="text-center text-muted-foreground">
              You haven't added any packages to your favorites yet. Explore our packages and save your favorites!
            </p>
            <Button asChild>
              <Link href="/packages">Explore Packages</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Favorites</CardTitle>
        <CardDescription>Your saved packages and destinations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((favorite) => (
            <div key={favorite._id} className="border rounded-lg overflow-hidden group">
              <div className="relative h-48 w-full">
                {favorite.package.image ? (
                  <Image
                    src={favorite.package.image}
                    alt={favorite.package.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-muted flex items-center justify-center">
                    <Icons.image className="h-12 w-12 text-muted-foreground opacity-50" />
                  </div>
                )}
                <button
                  onClick={() => handleRemoveFavorite(favorite._id)}
                  className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full text-red-500 hover:bg-white transition-colors"
                  aria-label="Remove from favorites"
                >
                  <Icons.heart className="h-5 w-5 fill-current" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium truncate">{favorite.package.name}</h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                  <Icons.location className="h-4 w-4" />
                  <span>{favorite.package.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                  <Icons.clock className="h-4 w-4" />
                  <span>{favorite.package.duration}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-medium">₹{favorite.package.price.toLocaleString()}</span>
                  <Button size="sm" asChild>
                    <Link href={`/packages/${favorite.package._id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
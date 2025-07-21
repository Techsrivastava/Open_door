'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth-context';
import apiService from '@/lib/services/api-service';
import BookingForm from '@/components/booking-form';
import { MapPin, Calendar, Star, Users, Mountain } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Package {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  location: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  difficulty?: string;
  maxGroupSize?: number;
}

export default function BookingPage() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const { user, isAuthenticated } = useAuth();
  
  const [packageData, setPackageData] = useState<Package | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingComplete, setIsBookingComplete] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);

  const packageId = searchParams.get('packageId');

  useEffect(() => {
    if (packageId) {
      fetchPackageDetails();
    } else {
      setIsLoading(false);
    }
  }, [packageId]);

  const fetchPackageDetails = async () => {
    try {
      setIsLoading(true);
      const response = await apiService.getPackageById(packageId!);
      setPackageData(response.data);
    } catch (error) {
      console.error('Failed to fetch package details:', error);
      toast({
        title: 'Error',
        description: 'Failed to load package details. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookingComplete = (bookingId: string) => {
    setBookingId(bookingId);
    setIsBookingComplete(true);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'moderate': return 'bg-yellow-100 text-yellow-800';
      case 'challenging': return 'bg-orange-100 text-orange-800';
      case 'extreme': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="container py-10">
        <div className="flex justify-center items-center py-20">
          <div className="flex flex-col items-center space-y-4">
            <Icons.spinner className="h-8 w-8 animate-spin text-primary" />
            <p>Loading booking details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!packageId) {
    return (
      <div className="container py-10">
        <div className="flex flex-col items-center justify-center py-20">
          <Icons.package className="h-16 w-16 text-muted-foreground opacity-20 mb-4" />
          <h3 className="text-xl font-medium mb-2">No Package Selected</h3>
          <p className="text-center text-muted-foreground mb-4">
            Please select a package to book from our packages page.
          </p>
          <Button asChild>
            <Link href="/packages">Browse Packages</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="container py-10">
        <div className="flex flex-col items-center justify-center py-20">
          <Icons.package className="h-16 w-16 text-muted-foreground opacity-20 mb-4" />
          <h3 className="text-xl font-medium mb-2">Package not found</h3>
          <p className="text-center text-muted-foreground mb-4">
            The package you're trying to book doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/packages">Browse All Packages</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (isBookingComplete) {
    return (
      <div className="container py-10">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Icons.check className="h-10 w-10" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Booking Confirmed!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for booking your adventure! We've sent a confirmation email with all the details.
                  A member of our team will contact you shortly to discuss the next steps.
                </p>
                
                <div className="bg-muted p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div className="font-medium">Package:</div>
                    <div>{packageData.name}</div>
                    <div className="font-medium">Location:</div>
                    <div>{packageData.location}</div>
                    <div className="font-medium">Duration:</div>
                    <div>{packageData.duration} days</div>
                    <div className="font-medium">Price:</div>
                    <div>₹{packageData.price.toLocaleString()} per person</div>
                    <div className="font-medium">Booking ID:</div>
                    <div className="font-mono text-sm">{bookingId}</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/profile">View My Bookings</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/packages">Browse More Packages</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Book Your Adventure</h1>
        <p className="text-muted-foreground">
          Secure your spot for an amazing adventure experience
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Package Details */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Package Details</CardTitle>
              <CardDescription>Review your selected package before booking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <div className="relative w-32 h-24 overflow-hidden rounded-lg">
                  <Image
                    src={packageData.images?.[0] || '/placeholder-package.jpg'}
                    alt={packageData.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{packageData.name}</h3>
                  <p className="text-muted-foreground mb-3 line-clamp-2">{packageData.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{packageData.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{packageData.duration} days</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm">{packageData.rating} ({packageData.reviews})</span>
                    </div>
                    {packageData.difficulty && (
                      <div className="flex items-center space-x-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{packageData.difficulty}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Booking Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Complete Booking</CardTitle>
              <CardDescription>Fill in your details to secure your booking</CardDescription>
            </CardHeader>
            <CardContent>
              <BookingForm
                packageId={packageId}
                packageDetails={{
                  name: packageData.name,
                  price: packageData.price,
                  duration: packageData.duration,
                  location: packageData.location,
                  description: packageData.description,
                }}
                onBookingComplete={handleBookingComplete}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

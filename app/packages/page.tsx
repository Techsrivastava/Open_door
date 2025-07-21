'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/icons';
import { useToast } from '@/hooks/use-toast';
import apiService from '@/lib/services/api-service';
import { MapPin, Calendar, Star, Users, Search, Filter, Grid, List } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
  slug?: string;
  difficulty?: string;
  maxGroupSize?: number;
}

interface Category {
  _id: string;
  name: string;
  description: string;
  image: string;
}

export default function PackagesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();
  
  const [packages, setPackages] = useState<Package[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Filters
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState(searchParams.get('price_range') || '');
  const [duration, setDuration] = useState(searchParams.get('duration') || '');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'featured');
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchPackages();
  }, [currentPage, searchQuery, selectedCategory, priceRange, duration, sortBy]);

  const fetchCategories = async () => {
    try {
      const response = await apiService.getCategories();
      setCategories(response.data || []);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const fetchPackages = async () => {
    try {
      setIsLoading(true);
      
      const params: any = {
        page: currentPage,
        limit: itemsPerPage,
        sort: sortBy,
      };

      if (searchQuery) params.search = searchQuery;
      if (selectedCategory) params.category = selectedCategory;
      if (priceRange) {
        const [min, max] = priceRange.split('-');
        if (min) params.price_min = min;
        if (max) params.price_max = max;
      }
      if (duration) params.duration = duration;

      const response = await apiService.getPackages(params);
      
      setPackages(response.data || []);
      setTotalPages(response.pagination?.totalPages || 1);
      setTotalItems(response.pagination?.totalItems || 0);

      // Update URL with current filters
      const newSearchParams = new URLSearchParams();
      if (searchQuery) newSearchParams.set('search', searchQuery);
      if (selectedCategory) newSearchParams.set('category', selectedCategory);
      if (priceRange) newSearchParams.set('price_range', priceRange);
      if (duration) newSearchParams.set('duration', duration);
      if (sortBy) newSearchParams.set('sort', sortBy);
      
      router.replace(`/packages?${newSearchParams.toString()}`);

    } catch (error) {
      console.error('Failed to fetch packages:', error);
      toast({
        title: 'Error',
        description: 'Failed to load packages. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setPriceRange('');
    setDuration('');
    setSortBy('featured');
    setCurrentPage(1);
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

  const PackageCard = ({ pkg }: { pkg: Package }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={pkg.images?.[0] || '/placeholder-package.jpg'}
          alt={pkg.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Badge className={getDifficultyColor(pkg.difficulty || 'moderate')}>
            {pkg.difficulty || 'Moderate'}
          </Badge>
        </div>
        <div className="absolute bottom-2 left-2">
          <div className="flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs">{pkg.rating}</span>
            <span className="text-xs">({pkg.reviews})</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2 line-clamp-1">{pkg.name}</CardTitle>
        <CardDescription className="line-clamp-2 mb-3">{pkg.description}</CardDescription>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{pkg.location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{pkg.duration} days</span>
          </div>
          {pkg.maxGroupSize && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-1" />
              <span>Max {pkg.maxGroupSize} people</span>
            </div>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground"> per person</span>
          </div>
          <Button asChild size="sm">
            <Link href={`/packages/${pkg._id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const PackageListItem = ({ pkg }: { pkg: Package }) => (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="flex">
        <div className="relative w-48 h-32 overflow-hidden">
          <Image
            src={pkg.images?.[0] || '/placeholder-package.jpg'}
            alt={pkg.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2">
            <Badge className={getDifficultyColor(pkg.difficulty || 'moderate')}>
              {pkg.difficulty || 'Moderate'}
            </Badge>
          </div>
        </div>
        
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <CardTitle className="text-lg">{pkg.name}</CardTitle>
              <CardDescription className="line-clamp-2">{pkg.description}</CardDescription>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">{pkg.rating}</span>
              <span className="text-sm text-muted-foreground">({pkg.reviews})</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{pkg.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{pkg.duration} days</span>
            </div>
            {pkg.maxGroupSize && (
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>Max {pkg.maxGroupSize} people</span>
              </div>
            )}
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xl font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground"> per person</span>
            </div>
            <Button asChild>
              <Link href={`/packages/${pkg._id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="container py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Travel Packages</h1>
        <p className="text-muted-foreground">
          Discover amazing adventures and experiences across India
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="search">Search Packages</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Search by name, location, or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button type="submit" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Search
                </Button>
                <Button type="button" variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category._id} value={category._id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="price">Price Range</Label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any Price</SelectItem>
                    <SelectItem value="0-10000">Under ₹10,000</SelectItem>
                    <SelectItem value="10000-25000">₹10,000 - ₹25,000</SelectItem>
                    <SelectItem value="25000-50000">₹25,000 - ₹50,000</SelectItem>
                    <SelectItem value="50000-100000">₹50,000 - ₹1,00,000</SelectItem>
                    <SelectItem value="100000-999999">Above ₹1,00,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="duration">Duration</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any Duration</SelectItem>
                    <SelectItem value="1-3">1-3 days</SelectItem>
                    <SelectItem value="4-7">4-7 days</SelectItem>
                    <SelectItem value="8-14">8-14 days</SelectItem>
                    <SelectItem value="15-30">15+ days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="sort">Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price_low">Price: Low to High</SelectItem>
                    <SelectItem value="price_high">Price: High to Low</SelectItem>
                    <SelectItem value="duration">Duration</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* View Mode Toggle */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            Showing {packages.length} of {totalItems} packages
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Packages Grid/List */}
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="flex flex-col items-center space-y-4">
            <Icons.spinner className="h-8 w-8 animate-spin text-primary" />
            <p>Loading packages...</p>
          </div>
        </div>
      ) : packages.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-20">
            <Icons.package className="h-16 w-16 text-muted-foreground opacity-20 mb-4" />
            <h3 className="text-xl font-medium mb-2">No packages found</h3>
            <p className="text-center text-muted-foreground mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button onClick={clearFilters}>Clear All Filters</Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-4'
          }>
            {packages.map((pkg) => (
              viewMode === 'grid' 
                ? <PackageCard key={pkg._id} pkg={pkg} />
                : <PackageListItem key={pkg._id} pkg={pkg} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
} 
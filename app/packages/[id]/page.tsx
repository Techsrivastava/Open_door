'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Icons } from '@/components/icons';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth-context';
import apiService from '@/lib/services/api-service';
import BookingForm from '@/components/booking-form';
import InquiryForm from '@/components/inquiry-form';
import { MapPin, Calendar, Star, Users, Mountain, Clock, CheckCircle, Heart } from 'lucide-react';
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
  slug?: string;
  difficulty?: string;
  maxGroupSize?: number;
  itinerary?: Array<{
    day: number;
    description: string;
    activities: string[];
  }>;
  inclusions?: string[];
  exclusions?: string[];
  highlights?: string[];
  requirements?: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

interface RelatedPackage {
  _id: string;
  name: string;
  price: number;
  duration: number;
  location: string;
  images: string[];
  rating: number;
}

export default function PackageDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const { user, isAuthenticated } = useAuth();
  
  const [packageData, setPackageData] = useState<Package | null>(null);
  const [relatedPackages, setRelatedPackages] = useState<RelatedPackage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const packageId = params.id as string;

  useEffect(() => {
    if (packageId) {
      fetchPackageDetails();
      fetchRelatedPackages();
    }
  }, [packageId]);

  useEffect(() => {
    if (user && packageData) {
      checkFavoriteStatus();
    }
  }, [user, packageData]);

  const fetchPackageDetails = async () => {
    try {
      setIsLoading(true);
      const response = await apiService.getPackageById(packageId);
      setPackageData(response.data);
    } catch (error) {
      console.error('Failed to fetch package details:', error);
      toast({
        title: 'Error',
        description: 'Failed to load package details. Please try again.',
        variant: 'destructive',
      });
      router.push('/packages');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRelatedPackages = async () => {
    try {
      const response = await apiService.getPackages({
        category: packageData?.category,
        limit: 4,
        exclude: packageId,
      });
      setRelatedPackages(response.data || []);
    } catch (error) {
      console.error('Failed to fetch related packages:', error);
    }
  };

  const checkFavoriteStatus = async () => {
    if (!user || !packageData) return;
    
    try {
      const favorites = await apiService.getUserFavorites(user._id);
      const isFav = favorites.data?.some((fav: any) => fav.packageId === packageId);
      setIsFavorite(isFav);
    } catch (error) {
      console.error('Failed to check favorite status:', error);
    }
  };

  const toggleFavorite = async () => {
    if (!isAuthenticated) {
      toast({
        title: 'Please login',
        description: 'You need to be logged in to add favorites.',
        variant: 'destructive',
      });
      return;
    }

    try {
      if (isFavorite) {
        // Remove from favorites
        const favorites = await apiService.getUserFavorites(user!._id);
        const favorite = favorites.data?.find((fav: any) => fav.packageId === packageId);
        if (favorite) {
          await apiService.removeFromFavorites(user!._id, favorite._id);
          setIsFavorite(false);
          toast({
            title: 'Removed from favorites',
            description: 'Package removed from your favorites.',
          });
        }
      } else {
        // Add to favorites
        await apiService.addToFavorites(user!._id, packageId);
        setIsFavorite(true);
        toast({
          title: 'Added to favorites',
          description: 'Package added to your favorites.',
        });
      }
    } catch (error) {
      console.error('Failed to toggle favorite:', error);
      toast({
        title: 'Error',
        description: 'Failed to update favorites. Please try again.',
        variant: 'destructive',
      });
    }
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
            <p>Loading package details...</p>
          </div>
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
            The package you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/packages">Browse All Packages</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link href="/packages" className="hover:text-foreground">Packages</Link>
        <span>/</span>
        <span className="text-foreground">{packageData.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Package Images */}
          <Card>
            <CardContent className="p-0">
              <div className="relative h-96 overflow-hidden rounded-t-lg">
                <Image
                  src={packageData.images?.[activeImage] || '/placeholder-package.jpg'}
                  alt={packageData.name}
                  fill
                  className="object-cover"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                  onClick={toggleFavorite}
                >
                  <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
              </div>
              
              {/* Image Thumbnails */}
              {packageData.images && packageData.images.length > 1 && (
                <div className="p-4 flex space-x-2 overflow-x-auto">
                  {packageData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative w-16 h-16 rounded overflow-hidden flex-shrink-0 ${
                        activeImage === index ? 'ring-2 ring-primary' : ''
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${packageData.name} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Package Info */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl mb-2">{packageData.name}</CardTitle>
                  <CardDescription className="text-lg">{packageData.description}</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">₹{packageData.price.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">per person</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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
                  <span className="text-sm">{packageData.rating} ({packageData.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mountain className="h-4 w-4 text-muted-foreground" />
                  <Badge className={getDifficultyColor(packageData.difficulty || 'moderate')}>
                    {packageData.difficulty || 'Moderate'}
                  </Badge>
                </div>
              </div>

              {/* Highlights */}
              {packageData.highlights && packageData.highlights.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {packageData.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Package Details Tabs */}
          <Card>
            <CardContent className="p-0">
              <Tabs defaultValue="itinerary" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                  <TabsTrigger value="requirements">Requirements</TabsTrigger>
                  <TabsTrigger value="faqs">FAQs</TabsTrigger>
                </TabsList>

                <TabsContent value="itinerary" className="p-6">
                  {packageData.itinerary && packageData.itinerary.length > 0 ? (
                    <div className="space-y-4">
                      {packageData.itinerary.map((day, index) => (
                        <div key={index} className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold">Day {day.day}</h4>
                          <p className="text-muted-foreground mb-2">{day.description}</p>
                          {day.activities && (
                            <ul className="space-y-1">
                              {day.activities.map((activity, actIndex) => (
                                <li key={actIndex} className="flex items-center space-x-2 text-sm">
                                  <Clock className="h-3 w-3 text-muted-foreground" />
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Itinerary details will be provided after booking.</p>
                  )}
                </TabsContent>

                <TabsContent value="inclusions" className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-600">What's Included</h4>
                      {packageData.inclusions && packageData.inclusions.length > 0 ? (
                        <ul className="space-y-2">
                          {packageData.inclusions.map((item, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground">Inclusion details will be provided after booking.</p>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-red-600">What's Not Included</h4>
                      {packageData.exclusions && packageData.exclusions.length > 0 ? (
                        <ul className="space-y-2">
                          {packageData.exclusions.map((item, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <Icons.x className="h-4 w-4 text-red-500" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground">Exclusion details will be provided after booking.</p>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="requirements" className="p-6">
                  {packageData.requirements && packageData.requirements.length > 0 ? (
                    <ul className="space-y-2">
                      {packageData.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icons.info className="h-4 w-4 text-blue-500 mt-0.5" />
                          <span className="text-sm">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">Requirements will be provided after booking.</p>
                  )}
                </TabsContent>

                <TabsContent value="faqs" className="p-6">
                  {packageData.faqs && packageData.faqs.length > 0 ? (
                    <div className="space-y-4">
                      {packageData.faqs.map((faq, index) => (
                        <div key={index} className="border-b pb-4 last:border-b-0">
                          <h4 className="font-semibold mb-2">{faq.question}</h4>
                          <p className="text-sm text-muted-foreground">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">FAQs will be available soon.</p>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle>Book This Package</CardTitle>
              <CardDescription>Secure your spot for this amazing adventure</CardDescription>
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
              />
            </CardContent>
          </Card>

          {/* Inquiry Form */}
          <Card>
            <CardHeader>
              <CardTitle>Have Questions?</CardTitle>
              <CardDescription>Get in touch with our travel experts</CardDescription>
            </CardHeader>
            <CardContent>
              <InquiryForm 
                packageId={packageId}
                packageName={packageData.name}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Packages */}
      {relatedPackages.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Similar Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPackages.map((pkg) => (
              <Card key={pkg._id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pkg.images?.[0] || '/placeholder-package.jpg'}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2">
                    <div className="flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">{pkg.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-1">{pkg.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-3 w-3" />
                    <span>{pkg.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3" />
                    <span>{pkg.duration} days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
                    <Button asChild size="sm">
                      <Link href={`/packages/${pkg._id}`}>View</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
} 
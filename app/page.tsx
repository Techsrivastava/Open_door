'use client';

import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Mountain, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import TestimonialCarousel from "@/components/testimonial-carousel"
import FeaturedDestinations from "@/components/featured-destinations"
import AdventureCategories from "@/components/adventure-categories"
import NewsletterSignup from "@/components/newsletter-signup"
import WhatsAppButton from "@/components/whatsapp-button"
import HeroSection from "@/components/hero-carousel"
import PackagesCarousel from "@/components/packages-carousel"
import ModernStatsSection from "@/components/ui/modern-stats-section"
import CharDhamSection from "@/components/modern-char-dham-carousel"
import TrekSection from "@/components/modern-popular-treks-carousel"
import apiService from "@/lib/services/api-service"
import { useToast } from "@/hooks/use-toast"

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
}

export default function Home() {
  const { toast } = useToast();
  const [featuredPackages, setFeaturedPackages] = useState<Package[]>([]);
  const [trendingPackages, setTrendingPackages] = useState<Package[]>([]);
  const [newPackages, setNewPackages] = useState<Package[]>([]);
  const [topRatedPackages, setTopRatedPackages] = useState<Package[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      setIsLoading(true);
      // Fetch different types of packages in parallel
      const [featured, trending, newPkgs, topRated] = await Promise.all([
        apiService.getFeaturedPackages(),
        apiService.getTrendingPackages(),
        apiService.getNewPackages(),
        apiService.getTopRatedPackages(),
      ]);
      setFeaturedPackages(featured.data || []);
      setTrendingPackages(trending.data || []);
      setNewPackages(newPkgs.data || []);
      setTopRatedPackages(topRated.data || []);
    } catch (error) {
      console.error('Failed to fetch packages:', error);
      setFeaturedPackages([]);
      setTrendingPackages([]);
      setNewPackages([]);
      setTopRatedPackages([]);
      toast({
        title: 'Error',
        description: 'Failed to load packages. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // No fallbackCharDhamPackages or any other static data here

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Swiper Carousel */}
      <HeroSection />
      <ModernStatsSection />
      {/* Char Dham Section - Only real API data */}
      <CharDhamSection />
      {/* Trek Section - Only real API data */}
      <TrekSection />
      {/* Featured Destinations */}
      {/* <section className="bg-light py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-base font-medium text-primary">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Top Destinations</span>
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-neutral">Explore Our Destinations</h2>
              <p className="max-w-2xl mx-auto text-neutral/60 md:text-xl">Discover the beauty of India's most stunning trekking regions</p>
            </div>
          </div>
          <div className="rounded-2xl bg-white shadow-lg p-8">
            <FeaturedDestinations />
          </div>
        </div>
      </section> */}
      {/* Adventure Categories */}
      {/* <section className="bg-white py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-base font-medium text-primary">
                <Mountain className="mr-2 h-4 w-4" />
                <span>Adventure Types</span>
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-neutral">Choose Your Adventure</h2>
              <p className="max-w-2xl mx-auto text-neutral/60 md:text-xl">From easy treks to challenging expeditions, we have something for everyone</p>
            </div>
          </div>
          <div className="rounded-2xl bg-light shadow-lg p-8">
            <AdventureCategories />
          </div>
        </div>
      </section> */}
      {/* Featured Packages Section */}
      {!isLoading && featuredPackages.length > 0 && (
        <section className="bg-light py-20">
          <div className="container px-4 md:px-6">
            <div className="rounded-2xl bg-white shadow-lg p-8">
              <PackagesCarousel 
                packages={featuredPackages} 
                title="Popular Packages"
                subtitle="Handpicked adventures for the ultimate experience"
              />
            </div>
          </div>
        </section>
      )}
      {/* Trending Packages Section */}
      {!isLoading && trendingPackages.length > 0 && (
        <section className="bg-white py-20">
          <div className="container px-4 md:px-6">
            <div className="rounded-2xl bg-light shadow-lg p-8">
              <PackagesCarousel 
                packages={trendingPackages} 
                title="Trending Now"
                subtitle="Most popular packages this season"
              />
            </div>
          </div>
        </section>
      )}
      {/* New Packages Section */}
      {!isLoading && newPackages.length > 0 && (
        <section className="bg-light py-20">
          <div className="container px-4 md:px-6">
            <div className="rounded-2xl bg-white shadow-lg p-8">
              <PackagesCarousel 
                packages={newPackages} 
                title="New Arrivals"
                subtitle="Fresh adventures waiting for you"
              />
            </div>
          </div>
        </section>
      )}
      {/* Testimonials */}
      <TestimonialCarousel />
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}



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

export default function Home() {
 

  const charDhamPackages = [
    {
      slug: "standard-char-dham",
      title: "Standard Char Dham Package",
      subtitle: "Complete pilgrimage by road",
      image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "12 Days",
      location: "Uttarakhand",
      price: "₹45,999",
      highlights: [
        "Visit all four Dhams: Yamunotri, Gangotri, Kedarnath, and Badrinath",
        "Comfortable accommodation throughout the journey",
        "Experienced guides and assistance",
        "All meals and transportation included",
      ],
    },
    {
      slug: "helicopter-char-dham",
      title: "Helicopter Char Dham Package",
      subtitle: "Premium aerial pilgrimage",
      image: "https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "7 Days",
      location: "Uttarakhand",
      price: "₹1,85,000",
      highlights: [
        "Helicopter rides to all four Dhams",
        "Luxury accommodation in the best available hotels",
        "VIP darshan arrangements at all temples",
        "Personal guide and assistance throughout",
      ],
    },
    {
      slug: "senior-citizen-char-dham",
      title: "Senior Citizen Char Dham Package",
      subtitle: "Comfortable journey for elders",
      image: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "14 Days",
      location: "Uttarakhand",
      price: "₹55,999",
      highlights: [
        "Slower-paced itinerary with more rest days",
        "Medical assistance throughout the journey",
        "Comfortable accommodation with accessibility features",
        "Special assistance for temple visits",
      ],
    },
    {
      slug: "do-dham-yatra",
      title: "Do Dham Yatra Package",
      subtitle: "Kedarnath & Badrinath",
      image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "8 Days",
      location: "Uttarakhand",
      price: "₹32,999",
      highlights: [
        "Visit to Kedarnath and Badrinath temples",
        "Comfortable accommodation throughout",
        "All meals and transportation included",
        "Experienced guides and assistance",
      ],
    },
    {
      slug: "custom-char-dham",
      title: "Custom Char Dham Package",
      subtitle: "Tailored to your preferences",
      image: "https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "Flexible",
      location: "Uttarakhand",
      price: "₹60,000+",
      highlights: [
        "Customized itinerary based on your preferences",
        "Choice of accommodation and transportation",
        "Flexible departure dates",
        "Additional sightseeing options available",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Swiper Carousel */}
      <HeroSection  />

     <ModernStatsSection/>

     <CharDhamSection/>

     <TrekSection/>

      {/* Featured Destinations */}
      <section className="bg-light py-20">
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
      </section>

      {/* Adventure Categories */}
      <section className="bg-white py-20">
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
      </section>

      {/* Testimonials */}
     
            <TestimonialCarousel />
         
     

    

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}



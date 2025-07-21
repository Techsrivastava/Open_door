"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  ArrowRight,
  Star,
  MapPin,
  Calendar,
  Users,
  Clock,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Camera,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import apiService from "@/lib/services/api-service";

// Custom Button Component
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "lg" | "sm"
  [key: string]: any
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50"

  const variants = {
    default: "bg-orange-500 hover:bg-orange-600 text-white shadow-sm hover:shadow-md focus:ring-orange-500 rounded-lg",
    outline:
      "border border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent focus:ring-orange-500 rounded-lg",
    ghost: "text-gray-600 hover:text-orange-500 hover:bg-orange-50 focus:ring-orange-500 rounded-lg",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Sample data for Char Dham packages
const charDhamPackages = [
  {
    id: 1,
    title: "Complete Char Dham Yatra",
    location: "Kedarnath • Badrinath • Gangotri • Yamunotri",
    duration: "12 Days",
    groupSize: "8-12 People",
    price: 45000,
    originalPrice: 55000,
    rating: 4.8,
    reviews: 156,
    image: "/placeholder.svg?height=240&width=400",
    highlights: ["Helicopter Service", "Luxury Hotels", "Expert Guide"],
    difficulty: "Moderate",
    bestTime: "May - Oct",
    discount: 18,
    isPopular: true,
    photos: 24,
  },
  {
    id: 2,
    title: "Kedarnath Special Package",
    location: "Sacred Journey to Lord Shiva's Abode",
    duration: "5 Days",
    groupSize: "6-10 People",
    price: 18000,
    originalPrice: 22000,
    rating: 4.9,
    reviews: 89,
    image: "/placeholder.svg?height=240&width=400",
    highlights: ["Helicopter Option", "Premium Stay", "Pony Service"],
    difficulty: "Challenging",
    bestTime: "May - Sep",
    discount: 18,
    isPopular: false,
    photos: 18,
  },
  {
    id: 3,
    title: "Badrinath Darshan",
    location: "Visit the Sacred Vishnu Temple",
    duration: "4 Days",
    groupSize: "10-15 People",
    price: 15000,
    originalPrice: 18000,
    rating: 4.7,
    reviews: 124,
    image: "/placeholder.svg?height=240&width=400",
    highlights: ["Comfortable Hotels", "Local Guide", "Aarti Participation"],
    difficulty: "Easy",
    bestTime: "Apr - Nov",
    discount: 17,
    isPopular: false,
    photos: 32,
  },
  {
    id: 4,
    title: "Gangotri Yamunotri Combo",
    location: "Source of Sacred Rivers Ganga & Yamuna",
    duration: "6 Days",
    groupSize: "8-12 People",
    price: 22000,
    originalPrice: 26000,
    rating: 4.6,
    reviews: 78,
    image: "/placeholder.svg?height=240&width=400",
    highlights: ["River Rafting", "Nature Walks", "Hot Springs"],
    difficulty: "Moderate",
    bestTime: "May - Oct",
    discount: 15,
    isPopular: true,
    photos: 28,
  },
]

// Utility function for discount calculation
function getPercentOff(originalPrice: any, offerPrice: any) {
  const original = Number(originalPrice?.toString().replace(/,/g, '')) || 0;
  const offer = Number(offerPrice?.toString().replace(/,/g, '')) || 0;
  return original && offer ? Math.round(((original - offer) / original) * 100) : 0;
}

// JustTravel Style Package Card
const JustTravelCard = ({ pkg, index }: { pkg: any; index: number }) => {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={pkg.image || pkg.images?.cardImage || "/placeholder.svg"}
          alt={pkg.name || pkg.title || "Package image"}
          width={400}
          height={240}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {pkg.isPopular && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-semibold">Popular</span>
          )}
          {getPercentOff(pkg.originalPrice, pkg.offerPrice) > 0 && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
              {getPercentOff(pkg.originalPrice, pkg.offerPrice)}% OFF
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="bg-white/90 backdrop-blur rounded-full p-2 hover:bg-white transition-colors"
          >
            <Heart className={`w-4 h-4 ${isLiked ? "text-red-500 fill-current" : "text-gray-600"}`} />
          </button>
          <button className="bg-white/90 backdrop-blur rounded-full p-2 hover:bg-white transition-colors">
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Photos Count */}
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur rounded-md px-2 py-1 flex items-center gap-1">
          <Camera className="w-3 h-3 text-white" />
          <span className="text-xs text-white font-medium">{pkg.photos}</span>
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur rounded-lg px-2 py-1 flex items-center gap-1">
          <Star className="w-3 h-3 text-orange-500 fill-current" />
          <span className="text-xs font-semibold text-gray-900">{pkg.rating}</span>
          <span className="text-xs text-gray-500">({pkg.reviews})</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        {/* Title and Location */}
        <div>
          <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1 group-hover:text-orange-600 transition-colors">
            {pkg.title}
          </h3>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {pkg.location}
          </p>
        </div>

        {/* Package Info */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{parseInt(pkg.maxParticipants) || pkg.groupSize || 'N/A'} People</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-3 h-3" />
            <span>{
              (pkg.trekInfo && Array.isArray(pkg.trekInfo) &&
                (pkg.trekInfo.find((info: any) =>
                  typeof info.title === 'string' && info.title.trim().toLowerCase() === 'grade')?.value))
              || pkg.difficulty
              || 'N/A'
            }</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1">
          {(pkg.highlights || []).slice(0, 3).map((highlight: string, idx: number) => (
            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
              {highlight}
            </span>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-gray-900">₹{(Number(pkg.offerPrice?.toString().replace(/,/g, '')) || 0).toLocaleString()}</span>
            <span className="text-sm text-gray-500 line-through">₹{(Number(pkg.originalPrice?.toString().replace(/,/g, '')) || 0).toLocaleString()}</span>
          </div>
          <Button size="sm" className="px-4">
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

// Alternative Card Style - More Compact
const CompactTravelCard = ({ pkg, index }: { pkg: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="flex">
        {/* Image Section - Smaller */}
        <div className="relative w-32 h-32 flex-shrink-0">
          <Image
            src={pkg.image || pkg.images?.cardImage || "/placeholder.svg"}
            alt={pkg.name || pkg.title || "Package image"}
            width={128}
            height={128}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {pkg.isPopular && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white px-1.5 py-0.5 rounded text-xs font-semibold">
              Popular
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-gray-900 text-base mb-1 group-hover:text-orange-600 transition-colors">
              {pkg.title}
            </h3>
            <p className="text-xs text-gray-600 mb-2">{pkg.location}</p>

            <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {pkg.duration}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 text-orange-500 fill-current" />
                {pkg.rating}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-gray-900">₹{(Number(pkg.offerPrice?.toString().replace(/,/g, '')) || 0).toLocaleString()}</span>
              <span className="text-xs text-gray-500 line-through">₹{(Number(pkg.originalPrice?.toString().replace(/,/g, '')) || 0).toLocaleString()}</span>
            </div>
            <Button size="sm" variant="outline" className="text-xs px-3 py-1 bg-transparent">
              View Details
            </Button>
          </div>
        </div>
      </div>

      {/* Inclusions List (bulleted, max 3) */}
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 px-4 pb-2">
        {(pkg.inclusions || []).slice(0, 3).map((inc: string, idx: number) => (
          <li key={idx}>{inc}</li>
        ))}
      </ul>
    </motion.div>
  )
}

// Premium Card Style
const PremiumTravelCard = ({ pkg, index }: { pkg: any; index: number }) => {
  const percentOff = getPercentOff(pkg.originalPrice, pkg.offerPrice);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={pkg.image || pkg.images?.cardImage || "/placeholder.svg"}
          alt={pkg.name || pkg.title || "Package image"}
          width={400}
          height={224}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Floating Price Card */}
        <div className="absolute top-4 right-4 bg-white rounded-2xl p-3 shadow-lg">
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Starting from</div>
            <div className="text-lg font-bold text-gray-900">₹{(Number(pkg.offerPrice?.toString().replace(/,/g, '')) || 0).toLocaleString()}</div>
            {percentOff > 0 && (
              <div className="text-xs text-green-600 font-semibold">{percentOff}% OFF</div>
            )}
          </div>
        </div>

        {/* Bottom Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs font-semibold">{pkg.rating}</span>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1">
                <Camera className="w-3 h-3" />
                <span className="text-xs font-semibold">{pkg.photos}</span>
              </div>
            </div>
            {pkg.isPopular && (
              <div className="bg-orange-500 rounded-full px-3 py-1">
                <span className="text-xs font-semibold">Popular Choice</span>
              </div>
            )}
          </div>

          <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
          <p className="text-sm opacity-90">{pkg.location}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Package Details */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <Clock className="w-4 h-4 text-orange-500 mx-auto" />
            <div className="text-xs text-gray-600">Duration</div>
            <div className="text-sm font-semibold text-gray-900">{pkg.duration}</div>
          </div>
          <div className="space-y-1">
            <Users className="w-4 h-4 text-orange-500 mx-auto" />
            <div className="text-xs text-gray-600">Group Size</div>
            <div className="text-sm font-semibold text-gray-900">{pkg.groupSize}</div>
          </div>
          <div className="space-y-1">
            <Award className="w-4 h-4 text-orange-500 mx-auto" />
            <div className="text-xs text-gray-600">Difficulty</div>
            <div className="text-sm font-semibold text-gray-900">{
              (pkg.trekInfo && Array.isArray(pkg.trekInfo) &&
                (pkg.trekInfo.find((info: any) =>
                  typeof info.title === 'string' && info.title.trim().toLowerCase() === 'grade')?.value))
              || pkg.difficulty
              || 'N/A'
            }</div>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-2">
          <div className="text-sm font-semibold text-gray-900">What's Included:</div>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {(pkg.inclusions || []).slice(0, 3).map((inc: string, idx: number) => (
              <li key={idx}>{inc}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl">
          Book This Package
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  )
}

// Modern Carousel Component
const ModernCarousel = ({
  packages,
  title,
  subtitle,
  cardStyle = "default",
}: {
  packages: any[]
  title: string
  subtitle: string
  cardStyle?: "default" | "compact" | "premium"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (cardStyle === "compact") {
        if (window.innerWidth < 768) {
          setItemsPerView(1)
        } else {
          setItemsPerView(2)
        }
      } else {
        if (window.innerWidth < 768) {
          setItemsPerView(1)
        } else if (window.innerWidth < 1024) {
          setItemsPerView(2)
        } else {
          setItemsPerView(3)
        }
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [cardStyle])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, packages.length - itemsPerView + 1))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, packages.length - itemsPerView + 1)) % Math.max(1, packages.length - itemsPerView + 1),
    )
  }

  const CardComponent =
    cardStyle === "compact" ? CompactTravelCard : cardStyle === "premium" ? PremiumTravelCard : JustTravelCard

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* Carousel Track */}
        <div className="overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {packages.map((pkg, index) => (
              <div key={pkg._id || `${index}-${pkg.name}`} className="flex-shrink-0 px-3" style={{ width: `${100 / itemsPerView}%` }}>
                <CardComponent pkg={pkg} index={index} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.max(1, packages.length - itemsPerView + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-orange-500 w-8" : "bg-gray-300 hover:bg-gray-400 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CharDhamSection() {
  const [charDhamPackages, setCharDhamPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    apiService
      .getPackages({ category: "Char Dham" })
      .then((res: any) => setCharDhamPackages(res.data || []))
      .catch(() => setError("Failed to load Char Dham packages."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="animate-spin h-8 w-8 border-4 border-orange-500 border-t-transparent rounded-full inline-block" />
      </div>
    );
  }
  if (error) {
    return <div className="text-center text-red-600 py-20">{error}</div>;
  }
  if (!charDhamPackages.length) {
    return <div className="text-center text-gray-500 py-20">No Char Dham packages available.</div>;
  }

  return (
    <div className="bg-gray-50 py-20 space-y-20">
      <div className="container mx-auto px-4 md:px-6">
        <ModernCarousel
          packages={charDhamPackages}
          title="Char Dham Yatra Packages"
          subtitle="Embark on a spiritual journey to the four sacred shrines of Uttarakhand"
          cardStyle="default"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <ModernCarousel
          packages={charDhamPackages}
          title="Quick Browse Packages"
          subtitle="Browse through our curated selection of spiritual journeys"
          cardStyle="compact"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <ModernCarousel
          packages={charDhamPackages}
          title="Premium Yatra Experiences"
          subtitle="Luxury spiritual journeys with premium amenities and services"
          cardStyle="premium"
        />
      </div>
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Link href="/char-dham-yatra/packages">
          <Button
            variant="default"
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Packages
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}

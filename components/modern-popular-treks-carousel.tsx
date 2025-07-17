"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Heart,
  Share2,
  Camera,
  Thermometer,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

// Custom Button TrekSection
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

// Sample popular treks data
const popularTreks = [
  {
    id: 1,
    title: "Kedarnath Trek",
    location: "Uttarakhand",
    duration: "5 Days",
    difficulty: "Moderate",
    price: "₹12,000",
    originalPrice: "₹15,000",
    rating: 4.8,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=400",
    slug: "kedarnath-trek",
    altitude: "3,583m",
    bestTime: "May-Oct",
    photos: 45,
    isPopular: true,
    highlights: ["Sacred Temple", "Scenic Views", "Spiritual Journey"],
    temperature: "5°C to 15°C",
  },
  {
    id: 2,
    title: "Valley of Flowers",
    location: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Easy",
    price: "₹8,500",
    originalPrice: "₹10,000",
    rating: 4.9,
    reviews: 189,
    image: "/placeholder.svg?height=300&width=400",
    slug: "valley-of-flowers",
    altitude: "3,658m",
    bestTime: "Jul-Sep",
    photos: 67,
    isPopular: true,
    highlights: ["Rare Flowers", "UNESCO Site", "Photography"],
    temperature: "10°C to 20°C",
  },
  {
    id: 3,
    title: "Roopkund Trek",
    location: "Uttarakhand",
    duration: "8 Days",
    difficulty: "Challenging",
    price: "₹18,000",
    originalPrice: "₹22,000",
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=400",
    slug: "roopkund-trek",
    altitude: "5,029m",
    bestTime: "May-Jun, Sep-Oct",
    photos: 52,
    isPopular: true,
    highlights: ["Mystery Lake", "High Altitude", "Adventure"],
    temperature: "-5°C to 10°C",
  },
  {
    id: 4,
    title: "Har Ki Dun Trek",
    location: "Uttarakhand",
    duration: "7 Days",
    difficulty: "Easy",
    price: "₹9,500",
    originalPrice: "₹12,000",
    rating: 4.6,
    reviews: 198,
    image: "/placeholder.svg?height=300&width=400",
    slug: "har-ki-dun-trek",
    altitude: "3,566m",
    bestTime: "Apr-Jun, Sep-Nov",
    photos: 38,
    isPopular: false,
    highlights: ["Cradle Valley", "Ancient Villages", "Swargarohini"],
    temperature: "0°C to 15°C",
  },
  {
    id: 5,
    title: "Chopta Tungnath",
    location: "Uttarakhand",
    duration: "3 Days",
    difficulty: "Easy",
    price: "₹6,000",
    originalPrice: "₹7,500",
    rating: 4.5,
    reviews: 267,
    image: "/placeholder.svg?height=300&width=400",
    slug: "chopta-tungnath",
    altitude: "3,680m",
    bestTime: "Mar-Jun, Sep-Nov",
    photos: 41,
    isPopular: true,
    highlights: ["Highest Shiva Temple", "Mini Switzerland", "Chandrashila"],
    temperature: "5°C to 18°C",
  },
  {
    id: 6,
    title: "Brahmatal Trek",
    location: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Moderate",
    price: "₹11,000",
    originalPrice: "₹13,500",
    rating: 4.8,
    reviews: 143,
    image: "/placeholder.svg?height=300&width=400",
    slug: "brahmatal-trek",
    altitude: "3,734m",
    bestTime: "Dec-Mar",
    photos: 56,
    isPopular: false,
    highlights: ["Winter Trek", "Frozen Lake", "Snow Views"],
    temperature: "-10°C to 5°C",
  },
]

// Modern Trek Card TrekSection
const ModernTrekCard = ({ trek, index }: { trek: any; index: number }) => {
  const [isLiked, setIsLiked] = useState(false)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-green-100 text-green-700 border-green-200"
      case "moderate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "challenging":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200 hover:-translate-y-2"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={trek.image || "/placeholder.svg"}
          alt={trek.title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {trek.isPopular && (
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">POPULAR</span>
          )}
          <span className="bg-white/90 backdrop-blur text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            {trek.altitude}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="bg-white/90 backdrop-blur rounded-full p-2.5 hover:bg-white transition-colors shadow-lg"
          >
            <Heart className={`w-4 h-4 ${isLiked ? "text-red-500 fill-current" : "text-gray-600"}`} />
          </button>
          <button className="bg-white/90 backdrop-blur rounded-full p-2.5 hover:bg-white transition-colors shadow-lg">
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Photos Count */}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur rounded-lg px-3 py-1.5 flex items-center gap-1.5">
          <Camera className="w-4 h-4 text-white" />
          <span className="text-sm text-white font-medium">{trek.photos}</span>
        </div>

        {/* Bottom Info Overlay */}
        <div className="absolute bottom-4 left-4 right-20">
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{trek.title}</h3>
          <div className="flex items-center gap-2 text-white/90 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{trek.location}</span>
          </div>
          <div className="flex items-center gap-1 bg-white/20 backdrop-blur rounded-full px-2 py-1 w-fit">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-xs font-semibold text-white">{trek.rating}</span>
            <span className="text-xs text-white/80">({trek.reviews})</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Trek Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-orange-500" />
            <span>{trek.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4 text-orange-500" />
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(trek.difficulty)}`}
            >
              {trek.difficulty}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-orange-500" />
            <span>{trek.bestTime}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Thermometer className="w-4 h-4 text-orange-500" />
            <span>{trek.temperature}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900">Trek Highlights:</h4>
          <div className="flex flex-wrap gap-2">
            {trek.highlights.map((highlight: string, idx: number) => (
              <span
                key={idx}
                className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-medium border border-orange-200"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="space-y-1">
            <div className="text-xs text-gray-500">Starting from</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">{trek.price}</span>
              <span className="text-sm text-gray-500 line-through">{trek.originalPrice}</span>
            </div>
          </div>
          <Link href={`/treks/${trek.slug}`}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

// Trek Carousel TrekSection
const TrekCarousel = ({ treks, title, subtitle }: { treks: any[]; title: string; subtitle: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, treks.length - itemsPerView + 1))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, treks.length - itemsPerView + 1)) % Math.max(1, treks.length - itemsPerView + 1),
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
          <TrendingUp className="w-4 h-4" />
          <span>Most Popular</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-red-800 bg-clip-text text-transparent">
          {title}
        </h2>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 backdrop-blur rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white group border border-gray-200"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-orange-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 backdrop-blur rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white group border border-gray-200"
        >
          <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-orange-600" />
        </button>

        {/* Carousel Track */}
        <div className="overflow-hidden rounded-2xl">
          <motion.div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {treks.map((trek, index) => (
              <div key={trek.id} className="flex-shrink-0 px-3" style={{ width: `${100 / itemsPerView}%` }}>
                <ModernTrekCard trek={trek} index={index} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.max(1, treks.length - itemsPerView + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-orange-500 w-8" : "bg-gray-300 hover:bg-gray-400 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function TrekSection() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 md:px-6">
        <TrekCarousel
          treks={popularTreks}
          title="Discover Our Popular Treks"
          subtitle="Explore the most sought-after trekking destinations in India with expert guides and premium services"
        />

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link href="/treks">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
            >
              View All Treks
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

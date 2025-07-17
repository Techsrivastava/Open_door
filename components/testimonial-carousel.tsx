"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote, Calendar, CheckCircle, ThumbsUp, MoreHorizontal } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Custom Button Component
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  disabled = false,
  ...props
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "lg" | "sm" | "icon"
  disabled?: boolean
  [key: string]: any
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    default: "bg-orange-500 hover:bg-orange-600 text-white shadow-sm hover:shadow-md focus:ring-orange-500 rounded-lg",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 bg-white focus:ring-gray-500 rounded-lg hover:border-gray-400",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500 rounded-lg",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    icon: "h-10 w-10",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

// Star Rating Component
const StarRating = ({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClasses[size]} ${
            star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
          } transition-colors duration-200`}
        />
      ))}
    </div>
  )
}

// Review Platform Badge
const PlatformBadge = ({ platform }: { platform: string }) => {
  const platformConfig = {
    Google: { color: "bg-blue-500", icon: "G" },
    TripAdvisor: { color: "bg-green-500", icon: "T" },
    Facebook: { color: "bg-blue-600", icon: "f" },
    Trustpilot: { color: "bg-green-600", icon: "★" },
  }

  const config = platformConfig[platform as keyof typeof platformConfig] || platformConfig.Google

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${config.color} text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold`}
      >
        {config.icon}
      </div>
      <span className="text-sm text-gray-600">{platform}</span>
    </div>
  )
}

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      location: "Delhi, India",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      date: "2 weeks ago",
      platform: "Google",
      verified: true,
      helpful: 12,
      review:
        "Outstanding experience with Open Door Expedition! The Kedarkantha trek was perfectly organized. Our guide Suresh was incredibly knowledgeable about the local flora and fauna. The accommodation was clean and the food was delicious. Safety was their top priority throughout the journey. Highly recommend for anyone looking for an authentic Himalayan experience!",
      trip: "Kedarkantha Trek",
      photos: 3,
    },
    {
      id: 2,
      name: "Priya Patel",
      location: "Mumbai, India",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      date: "1 month ago",
      platform: "TripAdvisor",
      verified: true,
      helpful: 8,
      review:
        "Dream come true! The Brahmatal trek exceeded all expectations. The team's attention to detail was remarkable - from pre-trek briefings to post-trek follow-ups. The sunrise view from Brahmatal lake was absolutely magical. The guides shared fascinating stories about local culture and traditions. Professional, safe, and unforgettable!",
      trip: "Brahmatal Trek",
      photos: 5,
    },
    {
      id: 3,
      name: "Amit Verma",
      location: "Bangalore, India",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      date: "3 weeks ago",
      platform: "Google",
      verified: true,
      helpful: 15,
      review:
        "Kashmir Great Lakes trek was the adventure of a lifetime! Despite being challenging, the team's constant encouragement and expertise made it achievable. The camping arrangements were excellent, and the meals were surprisingly good for high altitude. The camaraderie built during this journey created lifelong friendships. Worth every penny!",
      trip: "Kashmir Great Lakes Trek",
      photos: 7,
    },
    {
      id: 4,
      name: "Sneha Gupta",
      location: "Pune, India",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      date: "1 week ago",
      platform: "Facebook",
      verified: true,
      helpful: 6,
      review:
        "Absolutely phenomenal service! The Valley of Flowers trek was a photographer's paradise. The team was patient with our frequent photo stops and even helped us capture the best shots. The biodiversity was incredible, and our naturalist guide explained everything beautifully. Clean camps, great food, and wonderful memories!",
      trip: "Valley of Flowers Trek",
      photos: 12,
    },
    {
      id: 5,
      name: "Vikash Kumar",
      location: "Kolkata, India",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      date: "2 months ago",
      platform: "Trustpilot",
      verified: true,
      helpful: 20,
      review:
        "First-time trekker and couldn't have asked for a better experience! The Har Ki Dun trek was perfectly paced for beginners. The team ensured everyone was comfortable and safe. The ancient villages we passed through were fascinating. Equipment provided was top-notch. Already planning my next trek with them!",
      trip: "Har Ki Dun Trek",
      photos: 4,
    },
  ]

  const overallStats = {
    averageRating: 4.9,
    totalReviews: 1247,
    ratingDistribution: {
      5: 89,
      4: 8,
      3: 2,
      2: 1,
      1: 0,
    },
  }

  const next = () => {
    setCurrent((current + 1) % reviews.length)
  }

  const previous = () => {
    setCurrent((current - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      next()
    }, 6000)

    return () => clearInterval(interval)
  }, [current, isAutoPlaying])

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span>Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Trekkers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from real adventurers who've explored the Himalayas with us
          </p>
        </motion.div>

        {/* Overall Rating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gray-50 rounded-2xl p-8 mb-12 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Overall Rating */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <div className="text-5xl font-bold text-gray-900">{overallStats.averageRating}</div>
                <div>
                  <StarRating rating={5} size="lg" />
                  <p className="text-gray-600 mt-1">{overallStats.totalReviews.toLocaleString()} reviews</p>
                </div>
              </div>
              <p className="text-gray-600">Excellent rating based on customer feedback</p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {Object.entries(overallStats.ratingDistribution)
                .reverse()
                .map(([stars, percentage]) => (
                  <div key={stars} className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 w-6">{stars}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-8">{percentage}%</span>
                  </div>
                ))}
            </div>
          </div>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg hover:shadow-xl border-gray-200 hover:border-gray-300"
            onClick={previous}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous review</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg hover:shadow-xl border-gray-200 hover:border-gray-300"
            onClick={next}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next review</span>
          </Button>

          {/* Reviews Container */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Reviewer Info */}
                  <div className="lg:col-span-1">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-gray-100">
                          <Image
                            src={reviews[current].image || "/placeholder.svg"}
                            alt={reviews[current].name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {reviews[current].verified && (
                          <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      <h3 className="font-semibold text-gray-900 text-lg">{reviews[current].name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{reviews[current].location}</p>

                      <div className="flex items-center gap-2 mb-3">
                        <StarRating rating={reviews[current].rating} size="md" />
                        <span className="text-sm text-gray-600">({reviews[current].rating}.0)</span>
                      </div>

                      <PlatformBadge platform={reviews[current].platform} />

                      <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{reviews[current].date}</span>
                        </div>
                        {reviews[current].photos > 0 && (
                          <div className="flex items-center gap-1">
                            <span>📸</span>
                            <span>{reviews[current].photos} photos</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="lg:col-span-2">
                    <div className="relative">
                      <Quote className="absolute -left-2 -top-2 h-8 w-8 text-gray-200" />
                      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 pl-6">
                        {reviews[current].review}
                      </blockquote>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                        {reviews[current].trip}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <button className="flex items-center gap-1 hover:text-gray-700 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span>Helpful ({reviews[current].helpful})</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-gray-700 transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-orange-500 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrent(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <span className="sr-only">Review {index + 1}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Ready to create your own adventure story?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold">
              Book Your Trek
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold bg-white"
            >
              View All Reviews
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

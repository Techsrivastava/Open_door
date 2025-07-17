"use client"

import type React from "react"
import { Mountain, Users, MapPin, Award, Star, TrendingUp, Shield, Clock, Heart, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

// Custom Button ModernStatsSection
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline"
  size?: "default" | "lg"
  [key: string]: any
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    default:
      "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg focus:ring-blue-500",
    outline: "border-2 border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent focus:ring-blue-500",
  }

  const sizes = {
    default: "px-4 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default function ModernStatsSection() {
  const stats = [
    {
      icon: Mountain,
      number: "2,000+",
      label: "Expeditions",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      number: "7,000+",
      label: "Adventurers",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: MapPin,
      number: "25+",
      label: "Destinations",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      number: "98%",
      label: "Success Rate",
      color: "from-orange-500 to-red-500",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Certified guides and comprehensive safety protocols",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance during your journey",
    },
    {
      icon: Heart,
      title: "Local Impact",
      description: "Supporting local communities and sustainable tourism",
    },
  ]

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30" />

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Compact Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative group max-w-md mx-auto lg:mx-0">
              {/* Simplified decorative elements */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-lg" />

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-white/50">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Trekking in the Himalayas"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Compact rating badge */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur rounded-full px-3 py-1.5 shadow-md">
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                  <span className="text-xs font-semibold text-gray-800">4.9/5</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Header Content */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium">
                <TrendingUp className="w-3.5 h-3.5" />
                Trusted Leader
              </div>

              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent leading-tight">
                Why Choose Open Door Expedition?
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Experience the Himalayas with India's most trusted expedition company. We combine decades of expertise
                with modern safety standards to deliver unforgettable adventures.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/70 backdrop-blur rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <feature.icon className="w-5 h-5 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Compact Stats */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <stat.icon
                    className={`w-5 h-5 mx-auto mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  />
                  <p className="text-xl font-bold text-gray-900">{stat.number}</p>
                  <p className="text-xs text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Additional Content */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                What Makes Us Different
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                  <span>Expert local guides with 10+ years experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                  <span>Small group sizes (max 12 people)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                  <span>Comprehensive travel insurance included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                  <span>Eco-friendly and sustainable practices</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/about" className="flex-1">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/expeditions" className="flex-1">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-blue-200 text-blue-700 hover:bg-blue-50 font-semibold rounded-xl transition-all duration-300 bg-transparent"
                >
                  View Expeditions
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-between pt-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border border-white"
                    />
                  ))}
                </div>
                <span>Join 7,000+ happy trekkers</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Fully Licensed & Insured</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

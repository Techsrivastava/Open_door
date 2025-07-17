"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  PhoneIcon as WhatsApp,
  Send,
  ArrowRight,
  Mountain,
  Award,
  Users,
  Shield,
  ExternalLink,
  Heart,
  Star,
  CheckCircle,
} from "lucide-react"
import { motion } from "framer-motion"

// Custom Button Footer
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
  size?: "default" | "lg" | "sm"
  disabled?: boolean
  [key: string]: any
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    default: "bg-orange-500 hover:bg-orange-600 text-white shadow-sm hover:shadow-md focus:ring-orange-500 rounded-lg",
    outline:
      "border border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent focus:ring-orange-500 rounded-lg",
    ghost: "text-gray-400 hover:text-white hover:bg-gray-800 focus:ring-orange-500 rounded-lg",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Destinations", href: "/destinations" },
    { name: "Treks", href: "/treks" },
    { name: "Expeditions", href: "/expeditions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ]

  const popularTreks = [
    { name: "Kedarkantha Trek", href: "/treks/kedarkantha-trek", difficulty: "Easy", rating: 4.8 },
    { name: "Brahmatal Trek", href: "/treks/brahmatal-trek", difficulty: "Moderate", rating: 4.7 },
    { name: "Har Ki Dun Trek", href: "/treks/har-ki-dun-trek", difficulty: "Easy", rating: 4.6 },
    { name: "Valley of Flowers", href: "/treks/valley-of-flowers", difficulty: "Easy", rating: 4.9 },
    { name: "Roopkund Trek", href: "/treks/roopkund-trek", difficulty: "Challenging", rating: 4.7 },
    { name: "Kashmir Great Lakes", href: "/treks/kashmir-great-lakes", difficulty: "Moderate", rating: 4.8 },
  ]

  const services = [
    { name: "Trekking Expeditions", icon: <Mountain className="w-4 h-4" /> },
    { name: "Adventure Tours", icon: <Award className="w-4 h-4" /> },
    { name: "Group Bookings", icon: <Users className="w-4 h-4" /> },
    { name: "Safety Equipment", icon: <Shield className="w-4 h-4" /> },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/opendoorexpedition",
      icon: <Facebook className="h-5 w-5" />,
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/opendoorexpedition",
      icon: <Instagram className="h-5 w-5" />,
      color: "hover:text-pink-500",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/opendoorexpedition",
      icon: <Twitter className="h-5 w-5" />,
      color: "hover:text-blue-400",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/opendoorexpedition",
      icon: <Youtube className="h-5 w-5" />,
      color: "hover:text-red-500",
    },
  ]

  const stats = [
    { number: "2000+", label: "Happy Trekkers" },
    { number: "50+", label: "Destinations" },
    { number: "5+", label: "Years Experience" },
    { number: "98%", label: "Success Rate" },
  ]

  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500 to-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500 to-purple-600 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6 py-16">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-8 bg-gray-800/50 backdrop-blur rounded-2xl border border-gray-700"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center mb-6 group">
              <Image
                src="/images/logo.png"
                alt="Open Door Expeditions Logo"
                width={180}
                height={60}
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Open Door Expedition is a premier trekking and adventure company offering unforgettable experiences in the
              most beautiful destinations across India.
            </p>

            {/* Services */}
            <div className="space-y-3 mb-6">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Our Services</h4>
              <div className="grid grid-cols-1 gap-2">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <div className="text-orange-500">{service.icon}</div>
                    <span>{service.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-gray-800 rounded-lg text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-gray-700 ${social.color}`}
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-orange-500" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-orange-500 transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Treks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
              <Mountain className="w-4 h-4 text-orange-500" />
              Popular Treks
            </h3>
            <ul className="space-y-4">
              {popularTreks.map((trek) => (
                <li key={trek.name}>
                  <Link
                    href={trek.href}
                    className="block p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 group border border-gray-700 hover:border-orange-500/30"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-300 group-hover:text-orange-500 transition-colors font-medium text-sm">
                        {trek.name}
                      </span>
                      <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-orange-500 transition-colors" />
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          trek.difficulty === "Easy"
                            ? "bg-green-900/50 text-green-400"
                            : trek.difficulty === "Moderate"
                              ? "bg-yellow-900/50 text-yellow-400"
                              : "bg-red-900/50 text-red-400"
                        }`}
                      >
                        {trek.difficulty}
                      </span>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span>{trek.rating}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-500" />
              Get In Touch
            </h3>

            {/* Contact Info */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  123 Adventure Way, Dehradun, Uttarakhand, India
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-orange-500 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <WhatsApp className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a
                  href="mailto:info@opendoorexpedition.com"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  info@opendoorexpedition.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Send className="w-4 h-4 text-orange-500" />
                Newsletter
              </h4>
              <p className="text-gray-400 text-sm mb-4">Get updates on new treks and special offers!</p>

              {isSubscribed ? (
                <div className="flex items-center gap-2 text-green-400 bg-green-900/20 p-3 rounded-lg">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Successfully subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Subscribing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Subscribe</span>
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} Open Door Expedition. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
              <Link href="/terms" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/refund" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500">
              Designed and Developed by{" "}
              <a
                href="https://digitalpracharak.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-1 group"
              >
                Digital Pracharak
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>{" "}
              with <Heart className="w-4 h-4 text-red-500 inline mx-1 animate-pulse" /> and passion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function InquiryModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Show modal after 5 seconds of page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your API
    setIsSubmitted(true)

    // Close modal after 3 seconds of successful submission
    setTimeout(() => {
      setIsOpen(false)
      // Reset form state after closing
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
        })
      }, 500)
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 relative overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-auto">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left side - Image */}
        <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-red-800/80 z-10"></div>
          <Image src="/images/inquiry-background.png" alt="Mountain trekking adventure" fill className="object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6 text-white">
            <div className="w-32 h-32 relative mb-4">
              <Image src="/images/dreamgo-logo-circle.png" alt="Dream Go India" fill className="object-contain" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">Adventure Awaits</h2>
            <p className="text-center text-sm md:text-base">
              Let us help you plan your perfect trekking experience in the breathtaking landscapes of India
            </p>
            <div className="mt-4 text-center">
              <p className="font-semibold">Contact Us</p>
              <p className="text-sm">+91 9876543210</p>
              <p className="text-sm">info@dreamgoindia.com</p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="md:w-1/2 p-6">
          {isSubmitted ? (
            <div className="text-center py-8 h-full flex flex-col items-center justify-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-500">Your inquiry has been received. We'll get back to you shortly.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">Plan Your Dream Adventure</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Fill out this form and our team will contact you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium">
                      I'm Interested In *
                    </label>
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger id="interest">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trekking">Trekking Adventures</SelectItem>
                        <SelectItem value="char-dham">Char Dham Yatra</SelectItem>
                        <SelectItem value="weekend">Weekend Getaways</SelectItem>
                        <SelectItem value="custom">Custom Adventure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your adventure plans..."
                    className="min-h-[80px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Submit Inquiry
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

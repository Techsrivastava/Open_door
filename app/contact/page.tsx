"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

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
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <Image
          src="/placeholder.svg?height=800&width=1600&query=mountain landscape with office desk"
          alt="Contact DreamGo Adventures"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="text-xl text-white/90">
              Have questions about our adventures? We're here to help you plan your next journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="mt-2 text-gray-500">
                  We'd love to hear from you. Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="rounded-lg bg-emerald-50 p-6 text-emerald-700">
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>Your message has been received. A member of our team will contact you shortly.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="interest"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I'm Interested In
                      </label>
                      <Select onValueChange={handleSelectChange} value={formState.interest}>
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="trekking">Trekking Adventures</SelectItem>
                          <SelectItem value="climbing">Mountain Climbing</SelectItem>
                          <SelectItem value="wildlife">Wildlife Safaris</SelectItem>
                          <SelectItem value="cultural">Cultural Tours</SelectItem>
                          <SelectItem value="custom">Custom Adventure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your adventure plans or questions..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                <p className="mt-2 text-gray-500">Reach out to us directly or visit our office.</p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Our Office</h3>
                    <p className="text-gray-500">123 Adventure Way, Trekville</p>
                    <p className="text-gray-500">Mountain Country, 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email Us</h3>
                    <p className="text-gray-500">info@dreamgoadventure.com</p>
                    <p className="text-gray-500">bookings@dreamgoadventure.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Call Us</h3>
                    <p className="text-gray-500">+1 (555) 123-4567</p>
                    <p className="text-gray-500">+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620796484186!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="DreamGo Office Location"
                ></iframe>
              </div>

              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Monday - Friday</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div>Saturday</div>
                  <div>10:00 AM - 4:00 PM</div>
                  <div>Sunday</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our adventures.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-8 grid gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg border bg-white p-6">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 text-gray-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const faqs = [
  {
    question: "How far in advance should I book my adventure?",
    answer:
      "We recommend booking at least 3-6 months in advance for most treks, and 6-12 months for popular routes during peak season. This ensures availability and gives you time to prepare.",
  },
  {
    question: "What fitness level is required for your treks?",
    answer:
      "Our adventures range from easy to challenging. Each trip is rated on a difficulty scale to help you choose the right adventure for your fitness level. We recommend regular cardio and strength training before any trek.",
  },
  {
    question: "What is included in the trip cost?",
    answer:
      "Most trips include accommodations, meals as specified in the itinerary, expert guides, permits, and ground transportation. International flights, travel insurance, and personal expenses are typically not included.",
  },
  {
    question: "Do you offer custom or private trips?",
    answer:
      "Yes! We specialize in creating custom adventures tailored to your preferences, timeline, and group size. Contact us to start planning your personalized journey.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our standard policy offers a full refund (minus deposit) for cancellations made 90+ days before departure. Cancellations 60-89 days before receive a 50% refund, and less than 60 days are non-refundable. We recommend travel insurance for unexpected circumstances.",
  },
]

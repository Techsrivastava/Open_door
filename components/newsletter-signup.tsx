"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your API
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
            <Mail className="mr-1 h-3.5 w-3.5" />
            <span>Stay Updated</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Trekking Community</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Subscribe to our newsletter for exclusive trekking tips, upcoming adventures, and special offers.
          </p>
        </div>
        <div className="w-full max-w-md space-y-2">
          {isSubmitted ? (
            <div className="rounded-lg bg-secondary/10 p-4 text-secondary">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm">We've sent a confirmation email to your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="bg-secondary-600 hover:bg-secondary-700">
                Subscribe
              </Button>
            </form>
          )}
          <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </div>
  )
}

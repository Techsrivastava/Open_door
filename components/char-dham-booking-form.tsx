"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface CharDhamBookingFormProps {
  destination?: string
  packageName?: string
}

export function CharDhamBookingForm({ destination, packageName }: CharDhamBookingFormProps) {
  const [date, setDate] = useState<Date>()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    participants: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your API
    setIsSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isSubmitted ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Booking request submitted!</p>
        </div>
      ) : (
        <>
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
            <label htmlFor="date" className="text-sm font-medium">
              Preferred Date *
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <label htmlFor="participants" className="text-sm font-medium">
              Number of Participants *
            </label>
            <Input
              id="participants"
              name="participants"
              type="number"
              min="1"
              value={formState.participants}
              onChange={handleChange}
              placeholder="Enter number of participants"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Special Requirements
            </label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Any special requirements or questions?"
              className="min-h-[80px]"
            />
          </div>

          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
            Book Now
          </Button>
        </>
      )}
    </form>
  )
}

export default CharDhamBookingForm

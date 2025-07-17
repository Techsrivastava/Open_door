"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Check, CreditCard, Info, Users } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function BookingPage() {
  const [date, setDate] = useState<Date>()
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    participants: "1",
    destination: "",
    specialRequirements: "",
    agreeTerms: false,
    paymentMethod: "credit-card",
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormState((prev) => ({ ...prev, agreeTerms: checked }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, paymentMethod: value }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your API
    setIsSubmitted(true)
    window.scrollTo(0, 0)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <Image
          src="/placeholder.svg?height=800&width=1600&query=adventure booking desk with maps and compass"
          alt="Book Your Adventure"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Book Your Adventure
            </h1>
            <p className="text-xl text-white/90">
              Start your journey with DreamGo. Fill out the form below to reserve your spot.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          {isSubmitted ? (
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-10 w-10" />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Booking Confirmed!</h2>
              <p className="text-gray-500 md:text-lg mb-6">
                Thank you for booking your adventure with DreamGo. We've sent a confirmation email with all the details
                to {formState.email}. A member of our team will contact you shortly to discuss the next steps.
              </p>
              <div className="p-6 bg-gray-50 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div className="font-medium">Destination:</div>
                  <div>{formState.destination}</div>
                  <div className="font-medium">Travel Date:</div>
                  <div>{date ? format(date, "PPP") : "Not selected"}</div>
                  <div className="font-medium">Number of Participants:</div>
                  <div>{formState.participants}</div>
                  <div className="font-medium">Contact Email:</div>
                  <div>{formState.email}</div>
                </div>
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => (window.location.href = "/")}>
                Return to Homepage
              </Button>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <div className="flex justify-between items-center">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex flex-col items-center">
                      <div
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold",
                          currentStep === step
                            ? "border-emerald-600 bg-emerald-600 text-white"
                            : currentStep > step
                              ? "border-emerald-600 bg-white text-emerald-600"
                              : "border-gray-300 bg-white text-gray-300",
                        )}
                      >
                        {step}
                      </div>
                      <span
                        className={cn(
                          "mt-2 text-sm font-medium",
                          currentStep >= step ? "text-emerald-600" : "text-gray-500",
                        )}
                      >
                        {step === 1 ? "Personal Details" : step === 2 ? "Trip Details" : "Payment"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative mt-4">
                  <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200"></div>
                  <div
                    className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-emerald-600 transition-all duration-300"
                    style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight">Personal Information</h2>
                      <p className="text-gray-500 mt-1">Please provide your contact details.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium leading-none">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formState.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium leading-none">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formState.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none">
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
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium leading-none">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button type="button" onClick={nextStep} className="bg-emerald-600 hover:bg-emerald-700">
                        Next Step
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight">Trip Details</h2>
                      <p className="text-gray-500 mt-1">Tell us about your adventure preferences.</p>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="destination" className="text-sm font-medium leading-none">
                        Destination
                      </label>
                      <Select
                        onValueChange={(value) => handleSelectChange("destination", value)}
                        value={formState.destination}
                      >
                        <SelectTrigger id="destination">
                          <SelectValue placeholder="Select a destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="everest-base-camp">Everest Base Camp, Nepal</SelectItem>
                          <SelectItem value="inca-trail">Inca Trail to Machu Picchu, Peru</SelectItem>
                          <SelectItem value="kilimanjaro">Mount Kilimanjaro, Tanzania</SelectItem>
                          <SelectItem value="annapurna">Annapurna Circuit, Nepal</SelectItem>
                          <SelectItem value="torres-del-paine">Torres del Paine, Patagonia</SelectItem>
                          <SelectItem value="milford-track">Milford Track, New Zealand</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none">Preferred Travel Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="participants" className="text-sm font-medium leading-none">
                        Number of Participants
                      </label>
                      <Select
                        onValueChange={(value) => handleSelectChange("participants", value)}
                        value={formState.participants}
                      >
                        <SelectTrigger id="participants">
                          <SelectValue placeholder="Select number of participants" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Person</SelectItem>
                          <SelectItem value="2">2 People</SelectItem>
                          <SelectItem value="3">3 People</SelectItem>
                          <SelectItem value="4">4 People</SelectItem>
                          <SelectItem value="5">5 People</SelectItem>
                          <SelectItem value="6+">6+ People</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="specialRequirements" className="text-sm font-medium leading-none">
                        Special Requirements or Questions
                      </label>
                      <Textarea
                        id="specialRequirements"
                        name="specialRequirements"
                        value={formState.specialRequirements}
                        onChange={handleChange}
                        placeholder="Any dietary restrictions, medical conditions, or specific questions..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Previous Step
                      </Button>
                      <Button type="button" onClick={nextStep} className="bg-emerald-600 hover:bg-emerald-700">
                        Next Step
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight">Payment Information</h2>
                      <p className="text-gray-500 mt-1">Secure your booking with a deposit.</p>
                    </div>

                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
                      <Info className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="text-sm text-amber-800">
                          A 20% deposit is required to secure your booking. The remaining balance is due 60 days before
                          your trip.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm font-medium leading-none">Payment Method</label>
                      <RadioGroup
                        value={formState.paymentMethod}
                        onValueChange={handleRadioChange}
                        className="grid gap-4 sm:grid-cols-3"
                      >
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="credit-card" id="credit-card" />
                          <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer">
                            <CreditCard className="h-5 w-5" />
                            <span>Credit Card</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="cursor-pointer">
                            PayPal
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                          <Label htmlFor="bank-transfer" className="cursor-pointer">
                            Bank Transfer
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Credit Card Form - would be replaced with a proper payment processor in production */}
                    {formState.paymentMethod === "credit-card" && (
                      <div className="space-y-4 p-4 border rounded-lg">
                        <div className="space-y-2">
                          <label htmlFor="cardName" className="text-sm font-medium leading-none">
                            Name on Card
                          </label>
                          <Input id="cardName" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="cardNumber" className="text-sm font-medium leading-none">
                            Card Number
                          </label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label htmlFor="expiry" className="text-sm font-medium leading-none">
                              Expiry Date
                            </label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="cvc" className="text-sm font-medium leading-none">
                              CVC
                            </label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formState.agreeTerms}
                        onCheckedChange={handleCheckboxChange}
                        required
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the terms and conditions
                        </label>
                        <p className="text-sm text-gray-500">
                          By checking this box, you agree to our{" "}
                          <a href="/terms" className="text-emerald-600 hover:underline">
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a href="/privacy" className="text-emerald-600 hover:underline">
                            Privacy Policy
                          </a>
                          .
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Previous Step
                      </Button>
                      <Button
                        type="submit"
                        className="bg-emerald-600 hover:bg-emerald-700"
                        disabled={!formState.agreeTerms}
                      >
                        Complete Booking
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Book With DreamGo</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're committed to providing exceptional adventure experiences.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
              <p className="text-gray-500">
                Our guides are certified professionals with extensive local knowledge and safety training.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Booking</h3>
              <p className="text-gray-500">
                Our booking system uses industry-standard security to protect your personal and payment information.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
              <p className="text-gray-500">
                We tailor each adventure to your preferences and provide dedicated support before, during, and after
                your trip.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Z" />
                  <path d="m3 3 18 18" />
                  <path d="M10.5 13.5 3 21" />
                  <path d="m21 3-7.5 7.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Booking</h3>
              <p className="text-gray-500">
                Plans change. Our flexible booking policy allows for modifications and provides peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about booking with DreamGo.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-8 grid gap-4">
            {bookingFaqs.map((faq, index) => (
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

const bookingFaqs = [
  {
    question: "What is the booking process?",
    answer:
      "Our booking process is simple: fill out the booking form, pay a 20% deposit to secure your spot, and receive a confirmation email with details. The remaining balance is due 60 days before your trip.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 90+ days before departure receive a full refund minus the deposit. Cancellations 60-89 days before receive a 50% refund, and less than 60 days are non-refundable. We recommend travel insurance for unexpected circumstances.",
  },
  {
    question: "Can I change my booking date?",
    answer:
      "Yes, you can change your booking date up to 60 days before departure, subject to availability. A small administrative fee may apply for date changes.",
  },
  {
    question: "Is travel insurance required?",
    answer:
      "While not mandatory, we strongly recommend comprehensive travel insurance that covers trip cancellation, medical emergencies, and evacuation. This is especially important for adventure travel to remote locations.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment gateway.",
  },
]

"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import apiService from "@/lib/services/api-service"
import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  CheckCircle,
  AlertCircle,
  Compass,
  IndianRupee,
  Utensils,
  Home,
  Bus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CharDhamBookingForm from "@/components/char-dham-booking-form"

export default function PackagePage() {
  const { slug } = useParams()
  const [packageData, setPackageData] = useState<any>(null)
  const [category, setCategory] = useState<{ name: string; description: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    apiService.getPackageBySlug(slug)
      .then((data) => {
        setPackageData(data.data)
        if (data.data && data.data.category && data.data.category.name) {
          setCategory({
            name: data.data.category.name,
            description: data.data.category.description || ""
          })
        }
      })
      .catch(() => setPackageData(null))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return <div className="text-center py-20 text-lg">Loading package...</div>
  }
  if (!packageData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Package Not Found</h1>
        <p className="mb-8">The package you are looking for does not exist or has been removed.</p>
        <Button asChild className="bg-orange-600 hover:bg-orange-700">
          <Link href="/char-dham-yatra/packages">View All Packages</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <Image
          src={packageData.images?.cardImage || packageData.heroImage || "/placeholder.svg"}
          alt={packageData.name || packageData.title}
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            {category && (
              <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700">
                <Compass className="mr-1 h-3.5 w-3.5" />
                <span>{category.name}</span>
              </div>
            )}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              {packageData.name || packageData.title}
            </h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-5 w-5" />
              <span className="text-xl">{packageData.location || packageData.city || packageData.state || "Uttarakhand"}</span>
            </div>
            {category && (
              <p className="text-xl text-white/90">{category.description}</p>
            )}
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed">{packageData.description}</p>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {packageData.galleryImages.map((image: string, index: number) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${packageData.name || packageData.title} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Tabs for Package Details */}
              <Tabs defaultValue="itinerary">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                  <TabsTrigger value="highlights">Highlights</TabsTrigger>
                  <TabsTrigger value="faqs">FAQs</TabsTrigger>
                </TabsList>
                <TabsContent value="itinerary" className="space-y-4 mt-4">
                  <h3 className="text-xl font-bold">Day-by-Day Itinerary</h3>
                  <div className="space-y-4">
                    {packageData.itinerary.map((day: any, index: number) => (
                      <div key={index} className="border-l-2 border-orange-500 pl-4 pb-4">
                        <h4 className="text-lg font-bold">
                          Day {day.day}: {day.title}
                        </h4>
                        <p className="text-gray-700 mb-2">{day.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Home className="h-4 w-4 text-orange-500" />
                            <span>{day.accommodation}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Utensils className="h-4 w-4 text-orange-500" />
                            <span>{day.meals}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Bus className="h-4 w-4 text-orange-500" />
                            <span>{day.distance}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="inclusions" className="space-y-4 mt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3">Inclusions</h3>
                      <ul className="space-y-2">
                        {packageData.inclusions.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Exclusions</h3>
                      <ul className="space-y-2">
                        {packageData.exclusions.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="highlights" className="space-y-4 mt-4">
                  <h3 className="text-xl font-bold mb-3">Package Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {packageData.highlights.map((highlight: string, index: number) => (
                      <div key={index} className="flex items-start gap-2 bg-orange-50 p-3 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="faqs" className="space-y-4 mt-4">
                  <h3 className="text-xl font-bold mb-3">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {packageData.faqs.map((faq: any, index: number) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-bold">{faq.question}</h4>
                        <p className="text-gray-700 mt-2">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="border rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-3xl font-bold text-orange-600">{packageData.price}</p>
                    <p className="text-sm text-gray-500">per person</p>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= packageData.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 mb-4" asChild>
                  <a href="#booking">Book Now</a>
                </Button>
                <Button variant="outline" className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

              {/* Package Info */}
              <div className="border rounded-lg p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold">Package Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{packageData.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-gray-500">Group Size</p>
                      <p className="font-medium">{packageData.groupSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-gray-500">Starting Point</p>
                      <p className="font-medium">{packageData.startingPoint}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-gray-500">Best Time</p>
                      <p className="font-medium">{packageData.bestTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <IndianRupee className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-gray-500">Advance Payment</p>
                      <p className="font-medium">30% to confirm booking</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Batches */}
              <div className="border rounded-lg p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold">Upcoming Batches</h3>
                <div className="space-y-3">
                  {packageData.upcomingBatches.map((batch: any, index: number) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2 last:border-0">
                      <div>
                        <p className="font-medium">{batch.date}</p>
                        <p className="text-sm text-gray-500">{batch.availability}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <a href="#booking">Book</a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Similar Packages */}
              <div className="border rounded-lg p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold">Similar Packages</h3>
                <div className="space-y-3">
                  {packageData.similarPackages.map((similarPackage: any, index: number) => (
                    <Link key={index} href={`/char-dham-yatra/packages/${similarPackage.slug}`}>
                      <div className="flex gap-3 items-center group">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md flex-shrink-0">
                          <Image
                            src={similarPackage.image || "/placeholder.svg"}
                            alt={similarPackage.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium group-hover:text-orange-600 transition-colors">
                            {similarPackage.title}
                          </p>
                          <p className="text-sm text-gray-500">{similarPackage.price}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Book Your Char Dham Yatra</h2>
              <p className="text-gray-600 mt-2">Fill out the form below to book your spot on the {packageData.name || packageData.title}</p>
            </div>
            <CharDhamBookingForm packageName={packageData.name || packageData.title} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-orange-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Your Divine Journey?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Book your spot on the {packageData.name || packageData.title} today and experience the spiritual journey of a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
              <a href="#booking">Book Now</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

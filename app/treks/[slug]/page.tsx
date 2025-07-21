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
  Mountain,
  Star,
  CheckCircle,
  AlertCircle,
  Compass,
  Thermometer,
  Droplets,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TrekPage() {
  const { slug } = useParams()
  const [trek, setTrek] = useState<any>(null)
  const [category, setCategory] = useState<{ name: string; description: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    apiService.getPackageBySlug(slug)
      .then((data) => {
        setTrek(data.data)
        if (data.data && data.data.category && data.data.category.name) {
          setCategory({
            name: data.data.category.name,
            description: data.data.category.description || ""
          })
        }
      })
      .catch(() => setTrek(null))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return <div className="text-center py-20 text-lg">Loading trek...</div>
  }
  if (!trek) {
    return <div className="text-center py-20 text-lg">Trek not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <Image
          src={trek.images?.cardImage || trek.heroImage || "/placeholder.svg"}
          alt={trek.name || trek.title}
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            {category && (
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
                <Mountain className="mr-1 h-3.5 w-3.5" />
                <span>{category.name}</span>
              </div>
            )}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">{trek.name || trek.title}</h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-5 w-5" />
              <span className="text-xl">{trek.location || trek.city || trek.state || ""}</span>
            </div>
            {category && (
              <p className="text-xl text-white/90">{category.description}</p>
            )}
          </div>
        </div>
      </section>

      {/* Trek Details */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed">{trek.overview}</p>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Trek Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {trek.gallery.map((image: any, index: number) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Tabs for Trek Details */}
              <Tabs defaultValue="itinerary">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                  <TabsTrigger value="things-to-carry">Things to Carry</TabsTrigger>
                  <TabsTrigger value="faqs">FAQs</TabsTrigger>
                </TabsList>
                <TabsContent value="itinerary" className="space-y-4 mt-4">
                  <h3 className="text-xl font-bold">Day-by-Day Itinerary</h3>
                  <div className="space-y-4">
                    {trek.itinerary.map((day: any, index: number) => (
                      <div key={index} className="border-l-2 border-red-500 pl-4 pb-4">
                        <h4 className="text-lg font-bold">
                          Day {day.day}: {day.title}
                        </h4>
                        <p className="text-gray-700">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="inclusions" className="space-y-4 mt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3">Inclusions</h3>
                      <ul className="space-y-2">
                        {trek.inclusions.map((item: string, index: number) => (
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
                        {trek.exclusions.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="things-to-carry" className="space-y-4 mt-4">
                  <h3 className="text-xl font-bold mb-3">Essential Items to Carry</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Clothing</h4>
                      <ul className="space-y-2">
                        {trek.thingsToCarry.clothing.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Equipment & Others</h4>
                      <ul className="space-y-2">
                        {trek.thingsToCarry.equipment.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="faqs" className="space-y-4 mt-4">
                  <h3 className="text-xl font-bold mb-3">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {trek.faqs.map((faq: any, index: number) => (
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
                    <p className="text-3xl font-bold text-red-600">{trek.price}</p>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= trek.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 mb-4">Book Now</Button>
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </div>

              {/* Trek Info */}
              <div className="border rounded-lg p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold">Trek Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{trek.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mountain className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm text-gray-500">Altitude</p>
                      <p className="font-medium">{trek.altitude}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Compass className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm text-gray-500">Difficulty</p>
                      <p className="font-medium">{trek.difficulty}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm text-gray-500">Best Time</p>
                      <p className="font-medium">{trek.bestTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Thermometer className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm text-gray-500">Temperature</p>
                      <p className="font-medium">{trek.temperature}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Droplets className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm text-gray-500">Water Sources</p>
                      <p className="font-medium">{trek.waterSources}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Batches */}
              <div className="border rounded-lg p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold">Upcoming Batches</h3>
                <div className="space-y-3">
                  {trek.upcomingBatches.map((batch: any, index: number) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2 last:border-0">
                      <div>
                        <p className="font-medium">{batch.date}</p>
                        <p className="text-sm text-gray-500">{batch.availability}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Book
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Similar Treks */}
              <div className="border rounded-lg p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold">Similar Treks</h3>
                <div className="space-y-3">
                  {trek.similarTreks.map((similarTrek: any, index: number) => (
                    <Link key={index} href={`/treks/${similarTrek.slug}`}>
                      <div className="flex gap-3 items-center group">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md flex-shrink-0">
                          <Image
                            src={similarTrek.image || "/placeholder.svg"}
                            alt={similarTrek.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium group-hover:text-red-600 transition-colors">{similarTrek.title}</p>
                          <p className="text-sm text-gray-500">{similarTrek.location}</p>
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

      {/* CTA Section */}
      <section className="py-12 bg-red-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Book your spot on the {trek.title} trek today and experience the beauty of {trek.location}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Book Now
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

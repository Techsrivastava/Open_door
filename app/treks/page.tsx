"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import apiService from "@/lib/services/api-service"

export default function TreksPage() {
  const [allTreks, setAllTreks] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [category, setCategory] = useState<{ name: string; description: string } | null>(null)

  useEffect(() => {
    setIsLoading(true)
    apiService.getPackages({ category: "Trekking" })
      .then((data) => {
        setAllTreks((data.data || []).map(mapTrekData))
      })
      .catch(() => setAllTreks([]))
      .finally(() => setIsLoading(false))
    // Fetch categories and set the Trekking category
    apiService.request('/categories')
      .then((data) => {
        if (data && data.data && Array.isArray(data.data)) {
          const trekCat = data.data.find((cat: any) => cat.name.toLowerCase() === 'trekking')
          if (trekCat) setCategory({ name: trekCat.name, description: trekCat.description })
        }
      })
      .catch(() => setCategory(null))
  }, [])

  function mapTrekData(apiTrek: any) {
    // Use cardImage if available, else fallback
    let image = '/placeholder.svg';
    if (apiTrek.images) {
      if (typeof apiTrek.images === 'object' && 'cardImage' in apiTrek.images) {
        image = apiTrek.images.cardImage || image;
      } else if (Array.isArray(apiTrek.images) && apiTrek.images.length > 0) {
        image = apiTrek.images[0];
      }
    }
    // Use offerPrice if price is missing
    const price = apiTrek.offerPrice || apiTrek.price || 0;
    // Use inclusions as tags if available
    const tags = apiTrek.inclusions || [];
    // Use seasons if available, else empty array
    const seasons = apiTrek.seasons || [];
    return {
      slug: apiTrek.slug || apiTrek._id,
      title: apiTrek.name || 'Trek',
      location: apiTrek.location || apiTrek.city || apiTrek.state || '',
      duration: apiTrek.duration || 'N/A',
      difficulty: apiTrek.difficulty || 'Easy',
      price: `₹${price.toLocaleString()}`,
      image,
      isPopular: apiTrek.isPopular !== undefined ? apiTrek.isPopular : true,
      tags: tags.slice(0, 3),
      seasons,
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <Image
          src="/placeholder.svg?height=1080&width=1920&query=himalayan mountain trekking group"
          alt="Dream Go India Treks"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              {category ? category.name : "Our Treks"}
            </h1>
            <p className="text-xl text-white/90">
              {category ? category.description : "Discover the best trekking experiences across India"}
            </p>
          </div>
        </div>
      </section>

      {/* Trek Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="all">All Treks</TabsTrigger>
              {/* <TabsTrigger value="winter">Winter Treks</TabsTrigger>
              <TabsTrigger value="summer">Summer Treks</TabsTrigger>
              <TabsTrigger value="monsoon">Monsoon Treks</TabsTrigger>
              <TabsTrigger value="weekend">Weekend Treks</TabsTrigger> */}
            </TabsList>

            <div className="mt-8">
              <TabsContent value="all" className="mt-0">
                {isLoading ? (
                  <div className="text-center py-12 text-lg">Loading treks...</div>
                ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {allTreks.map((trek) => (
                    <TrekCard key={trek.slug} trek={trek} />
                  ))}
                </div>
                )}
              </TabsContent>

              <TabsContent value="winter" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {allTreks
                    .filter((trek) => trek.seasons.includes("Winter"))
                    .map((trek) => (
                      <TrekCard key={trek.slug} trek={trek} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="summer" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {allTreks
                    .filter((trek) => trek.seasons.includes("Summer"))
                    .map((trek) => (
                      <TrekCard key={trek.slug} trek={trek} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="monsoon" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {allTreks
                    .filter((trek) => trek.seasons.includes("Monsoon"))
                    .map((trek) => (
                      <TrekCard key={trek.slug} trek={trek} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="weekend" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {allTreks
                    .filter((trek) => trek.duration <= 3)
                    .map((trek) => (
                      <TrekCard key={trek.slug} trek={trek} />
                    ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
                <MapPin className="mr-1 h-3.5 w-3.5" />
                <span>Destinations</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Popular Trekking Destinations</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore treks by region across India
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            {destinations.map((destination) => (
              <Link
                key={destination.id}
                href={`/destinations/${destination.slug}`}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                    <p className="mt-2 text-sm text-white/90">{destination.description}</p>
                    <div className="mt-4 flex items-center text-sm font-medium text-white">
                      <span>View Treks</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Contact us for custom trek itineraries or to inquire about any specific trek that's not listed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Contact Us
              </Button>
            </Link>
            <Link href="/custom-trek">
              <Button size="lg" variant="outline">
                Request Custom Trek
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

interface TrekCardProps {
  trek: {
    slug: string
    title: string
    location: string
    duration: number
    difficulty: string
    price: string
    image: string
    isPopular?: boolean
    tags: string[]
    seasons: string[]
  }
}

function TrekCard({ trek }: TrekCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
      {trek.isPopular && (
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-block bg-[hsl(var(--secondary))] text-white text-xs font-bold px-2 py-1 rounded">POPULAR</span>
        </div>
      )}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={trek.image || "/placeholder.svg"}
          alt={trek.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">{trek.title}</h3>
          <div className="flex items-center gap-2 text-white/90 text-sm mt-1">
            <MapPin className="h-4 w-4" />
            <span>{trek.location}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {trek.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-[hsl(var(--muted))] text-[hsl(var(--primary))] border-[hsl(var(--primary))]">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-[hsl(var(--primary))]/80">
            <Calendar className="h-4 w-4" />
            <span>{trek.duration} Days</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[hsl(var(--primary))]/80">
            <Users className="h-4 w-4" />
            <span>Difficulty: {trek.difficulty}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-sm text-[hsl(var(--primary))]/70">Starting from</span>
            <p className="text-lg font-bold text-[hsl(var(--secondary))]">{trek.price}</p>
          </div>
          <Link href={`/treks/${trek.slug}`}>
            <Button size="sm" className="bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary))]/90 text-white">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const destinations = [
  {
    id: 1,
    name: "Uttarakhand",
    slug: "uttarakhand",
    description: "Land of Gods with stunning Himalayan views",
    image: "/placeholder.svg?height=600&width=800&query=uttarakhand mountains himalaya landscape",
  },
  {
    id: 2,
    name: "Himachal Pradesh",
    slug: "himachal-pradesh",
    description: "Beautiful valleys and snow-capped peaks",
    image: "/placeholder.svg?height=600&width=800&query=himachal pradesh mountains landscape",
  },
  {
    id: 3,
    name: "Kashmir",
    slug: "kashmir",
    description: "Paradise on Earth with breathtaking landscapes",
    image: "/placeholder.svg?height=600&width=800&query=kashmir mountains lakes landscape",
  },
  {
    id: 4,
    name: "Sikkim & Northeast",
    slug: "sikkim-northeast",
    description: "Eastern Himalayan gems with diverse flora and fauna",
    image: "/placeholder.svg?height=600&width=800&query=sikkim mountains kanchenjunga landscape",
  },
]

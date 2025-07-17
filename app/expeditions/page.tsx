import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Mountain, Users, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExpeditionsPage() {
  const expeditionCategories = [
    {
      title: "Himalayan Expeditions",
      description: "Conquer the highest peaks of the Himalayas",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      link: "/expeditions/himalayan",
      features: ["8000m+ peaks", "Expert guides", "Full support", "Safety equipment"],
      duration: "15-45 days",
      difficulty: "Advanced"
    },
    {
      title: "Trekking Expeditions",
      description: "Explore remote trails and pristine landscapes",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec0134?auto=format&fit=crop&w=800&q=80",
      link: "/expeditions/trekking",
      features: ["Remote trails", "Cultural immersion", "Local guides", "Camping"],
      duration: "7-21 days",
      difficulty: "Moderate"
    },
    {
      title: "Adventure Expeditions",
      description: "Multi-sport adventures combining various activities",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
      link: "/expeditions/adventure",
      features: ["Rock climbing", "River rafting", "Mountain biking", "Wildlife"],
      duration: "10-30 days",
      difficulty: "Intermediate"
    },
    {
      title: "Cultural Expeditions",
      description: "Immerse yourself in local cultures and traditions",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?auto=format&fit=crop&w=800&q=80",
      link: "/expeditions/cultural",
      features: ["Local communities", "Traditional crafts", "Festivals", "Homestays"],
      duration: "5-15 days",
      difficulty: "Easy"
    },
    {
      title: "Wildlife Expeditions",
      description: "Discover diverse wildlife in their natural habitats",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=800&q=80",
      link: "/expeditions/wildlife",
      features: ["Safari tours", "Bird watching", "Conservation", "Expert naturalists"],
      duration: "7-14 days",
      difficulty: "Easy-Moderate"
    },
    {
      title: "Photography Expeditions",
      description: "Capture stunning landscapes and wildlife moments",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      link: "/expeditions/photography",
      features: ["Professional guidance", "Golden hours", "Remote locations", "Workshops"],
      duration: "10-20 days",
      difficulty: "All levels"
    }
  ]

  const featuredExpeditions = [
    {
      title: "Everest Base Camp Expedition",
      description: "Trek to the base of the world's highest peak",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
      duration: "16 Days",
      difficulty: "Challenging",
      price: "₹85,000",
      location: "Nepal",
      highlights: ["Everest Base Camp", "Kala Patthar", "Namche Bazaar", "Tengboche Monastery"]
    },
    {
      title: "Annapurna Circuit Expedition",
      description: "Complete the classic Annapurna circuit trek",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec0134?auto=format&fit=crop&w=600&q=80",
      duration: "21 Days",
      difficulty: "Challenging",
      price: "₹95,000",
      location: "Nepal",
      highlights: ["Thorong La Pass", "Manang Valley", "Muktinath", "Poon Hill"]
    },
    {
      title: "Ladakh Adventure Expedition",
      description: "Multi-sport adventure in the high-altitude desert",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80",
      duration: "14 Days",
      difficulty: "Moderate",
      price: "₹65,000",
      location: "Ladakh, India",
      highlights: ["River rafting", "Mountain biking", "Monastery visits", "High-altitude camping"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-brand-blue to-brand-blue-dark">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container px-4 md:px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expedition Adventures
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Embark on extraordinary journeys to the world's most remote and breathtaking destinations
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white">
                Explore Expeditions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">50+</div>
              <div className="text-gray-600">Expeditions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">1000+</div>
              <div className="text-gray-600">Adventurers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expedition Categories */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Expedition Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From challenging mountain climbs to cultural immersions, we offer a wide range of expedition experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expeditionCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {category.duration}
                    </div>
                    <div className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-medium">
                      {category.difficulty}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href={category.link}>
                    <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark">
                      Explore {category.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Expeditions */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Expeditions
            </h2>
            <p className="text-xl text-gray-600">
              Our most popular and highly-rated expedition experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredExpeditions.map((expedition, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={expedition.image}
                    alt={expedition.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-brand-orange text-white rounded-full text-sm font-medium">
                      {expedition.price}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {expedition.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {expedition.duration}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{expedition.title}</h3>
                  <p className="text-gray-600 mb-4">{expedition.description}</p>
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Highlights:</div>
                    <div className="grid grid-cols-2 gap-1">
                      {expedition.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium">
                      {expedition.difficulty}
                    </div>
                    <Button className="bg-brand-orange hover:bg-brand-orange-dark">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-blue-dark">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us on an unforgettable expedition and create memories that will last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white">
              Start Planning
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 
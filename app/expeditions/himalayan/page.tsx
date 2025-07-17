import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Mountain, Users, Compass, Star, Clock, Thermometer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HimalayanExpeditionsPage() {
  const himalayanExpeditions = [
    {
      title: "Everest Base Camp Trek",
      description: "Trek to the base of the world's highest peak at 5,364m",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      duration: "16 Days",
      difficulty: "Challenging",
      price: "₹85,000",
      location: "Nepal",
      altitude: "5,364m",
      groupSize: "2-12 people",
      rating: 4.8,
      reviews: 156,
      highlights: [
        "Everest Base Camp at 5,364m",
        "Kala Patthar viewpoint",
        "Namche Bazaar acclimatization",
        "Tengboche Monastery",
        "Sherpa culture immersion"
      ],
      itinerary: [
        "Day 1-2: Arrival in Kathmandu & Lukla flight",
        "Day 3-5: Trek to Namche Bazaar",
        "Day 6-7: Acclimatization in Namche",
        "Day 8-12: Trek to EBC via Tengboche",
        "Day 13-15: Return trek to Lukla",
        "Day 16: Flight back to Kathmandu"
      ]
    },
    {
      title: "Annapurna Circuit Trek",
      description: "Complete the classic Annapurna circuit crossing Thorong La Pass",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec0134?auto=format&fit=crop&w=800&q=80",
      duration: "21 Days",
      difficulty: "Challenging",
      price: "₹95,000",
      location: "Nepal",
      altitude: "5,416m",
      groupSize: "2-15 people",
      rating: 4.9,
      reviews: 203,
      highlights: [
        "Thorong La Pass (5,416m)",
        "Manang Valley exploration",
        "Muktinath Temple visit",
        "Poon Hill sunrise",
        "Diverse landscapes"
      ],
      itinerary: [
        "Day 1-3: Drive to Besisahar & trek to Chame",
        "Day 4-8: Trek through Manang Valley",
        "Day 9-11: Acclimatization & Thorong La",
        "Day 12-15: Descend to Muktinath",
        "Day 16-20: Complete circuit via Tatopani",
        "Day 21: Return to Pokhara"
      ]
    },
    {
      title: "Manaslu Circuit Trek",
      description: "Remote and less crowded alternative to Annapurna Circuit",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      duration: "18 Days",
      difficulty: "Challenging",
      price: "₹88,000",
      location: "Nepal",
      altitude: "5,106m",
      groupSize: "2-10 people",
      rating: 4.7,
      reviews: 89,
      highlights: [
        "Larkya La Pass (5,106m)",
        "Remote villages",
        "Tibetan culture",
        "Less crowded trails",
        "Pristine landscapes"
      ],
      itinerary: [
        "Day 1-3: Drive to Soti Khola & trek to Machha Khola",
        "Day 4-8: Trek through Budhi Gandaki Valley",
        "Day 9-12: Acclimatization & Larkya La",
        "Day 13-16: Descend to Dharapani",
        "Day 17-18: Return to Kathmandu"
      ]
    },
    {
      title: "K2 Base Camp Trek",
      description: "Trek to the base of the world's second-highest peak",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec0134?auto=format&fit=crop&w=800&q=80",
      duration: "25 Days",
      difficulty: "Extreme",
      price: "₹1,25,000",
      location: "Pakistan",
      altitude: "5,150m",
      groupSize: "2-8 people",
      rating: 4.9,
      reviews: 67,
      highlights: [
        "K2 Base Camp (5,150m)",
        "Concordia - Throne Room of Gods",
        "Baltoro Glacier trek",
        "Karakoram Range views",
        "Remote wilderness"
      ],
      itinerary: [
        "Day 1-3: Arrival in Islamabad & Skardu",
        "Day 4-8: Drive to Askole & trek to Urdukas",
        "Day 9-15: Trek through Baltoro Glacier",
        "Day 16-18: K2 Base Camp exploration",
        "Day 19-24: Return trek",
        "Day 25: Return to Islamabad"
      ]
    },
    {
      title: "Stok Kangri Summit",
      description: "Climb the highest trekking peak in Ladakh at 6,153m",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      duration: "12 Days",
      difficulty: "Advanced",
      price: "₹75,000",
      location: "Ladakh, India",
      altitude: "6,153m",
      groupSize: "2-12 people",
      rating: 4.6,
      reviews: 134,
      highlights: [
        "Stok Kangri summit (6,153m)",
        "Ladakh culture experience",
        "High-altitude camping",
        "Karakoram views",
        "Monastery visits"
      ],
      itinerary: [
        "Day 1-2: Arrival in Leh & acclimatization",
        "Day 3-5: Drive to Stok & trek to base camp",
        "Day 6-8: Acclimatization & training",
        "Day 9-10: Summit attempt",
        "Day 11-12: Return to Leh"
      ]
    },
    {
      title: "Chadar Trek",
      description: "Walk on the frozen Zanskar River in winter",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec0134?auto=format&fit=crop&w=800&q=80",
      duration: "9 Days",
      difficulty: "Challenging",
      price: "₹45,000",
      location: "Ladakh, India",
      altitude: "3,400m",
      groupSize: "2-15 people",
      rating: 4.5,
      reviews: 98,
      highlights: [
        "Frozen Zanskar River walk",
        "Winter wilderness",
        "Ice formations",
        "Remote villages",
        "Unique experience"
      ],
      itinerary: [
        "Day 1-2: Arrival in Leh & acclimatization",
        "Day 3: Drive to Chilling & start trek",
        "Day 4-7: Trek on frozen river",
        "Day 8: Return to Chilling",
        "Day 9: Return to Leh"
      ]
    }
  ]

  const expeditionFeatures = [
    {
      icon: Mountain,
      title: "Expert Guides",
      description: "Certified mountaineering guides with extensive Himalayan experience"
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Intimate group sizes for personalized attention and safety"
    },
    {
      icon: Thermometer,
      title: "Acclimatization",
      description: "Proper acclimatization schedules to prevent altitude sickness"
    },
    {
      icon: Star,
      title: "Quality Equipment",
      description: "High-quality camping and safety equipment provided"
    },
    {
      icon: Clock,
      title: "Flexible Itineraries",
      description: "Customizable itineraries to suit your fitness and schedule"
    },
    {
      icon: Compass,
      title: "Local Support",
      description: "Local porters and support staff for authentic experience"
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
              Himalayan Expeditions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Conquer the highest peaks and experience the majesty of the Himalayas
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white">
                Book Expedition
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Himalayan Expeditions?
            </h2>
            <p className="text-xl text-gray-600">
              We provide the highest standards of safety, expertise, and authentic experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expeditionFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expeditions List */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Himalayan Expedition Packages
            </h2>
            <p className="text-xl text-gray-600">
              From classic treks to challenging summits, choose your Himalayan adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {himalayanExpeditions.map((expedition, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <Image
                    src={expedition.image}
                    alt={expedition.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-brand-orange text-white">
                      {expedition.price}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 text-white">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{expedition.rating}</span>
                      <span className="text-sm">({expedition.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {expedition.location}
                    </div>
                    <Badge variant="outline" className="text-brand-blue border-brand-blue">
                      {expedition.difficulty}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{expedition.title}</h3>
                  <p className="text-gray-600 mb-4">{expedition.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold">{expedition.duration}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Altitude</div>
                      <div className="font-semibold">{expedition.altitude}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Group Size</div>
                      <div className="font-semibold">{expedition.groupSize}</div>
                    </div>
                  </div>
                  
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
                    <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                      View Details
                    </Button>
                    <Button className="bg-brand-orange hover:bg-brand-orange-dark">
                      Book Now
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
            Ready to Conquer the Himalayas?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our expert-led expeditions and experience the adventure of a lifetime in the world's highest mountains
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white">
              Start Planning
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
              Contact Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 
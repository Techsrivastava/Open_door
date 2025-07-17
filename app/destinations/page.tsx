import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

export default function DestinationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <Image
          src="/placeholder.svg?height=1080&width=1920&query=world map with travel pins and compass"
          alt="DreamGo Destinations"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Destinations
            </h1>
            <p className="text-xl text-white/90">
              Explore the world's most breathtaking locations with our expert-led adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations by Continent */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore by Continent</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover adventures across the globe, from the highest peaks to the most remote wilderness.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {continents.map((continent) => (
              <Link
                key={continent.id}
                href={`/destinations/${continent.slug}`}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={continent.image || "/placeholder.svg"}
                    alt={continent.name}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white">{continent.name}</h3>
                    <p className="mt-2 text-sm text-white/90">{continent.description}</p>
                    <div className="mt-4 flex items-center text-sm font-medium text-white">
                      <span>Explore {continent.name}</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                <MapPin className="mr-1 h-3.5 w-3.5" />
                <span>Featured Destinations</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Most Popular Adventures</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our most sought-after destinations, loved by adventurers from around the world.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {featuredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-1 text-white">
                      <MapPin className="h-4 w-4" />
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                    </div>
                    <p className="text-sm text-white/90">{destination.location}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-3">{destination.description}</p>
                  <div className="space-y-1 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Duration:</span>
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Difficulty:</span>
                      <span>{destination.difficulty}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Best Time:</span>
                      <span>{destination.bestTime}</span>
                    </div>
                  </div>
                  <Link href={`/destinations/${destination.continent}/${destination.slug}`}>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/treks">
              <Button variant="outline" size="lg">
                View All Destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Destination Map */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Where We Adventure</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our adventures span across six continents. Explore our global destinations.
              </p>
            </div>
          </div>

          <div className="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
            <Image
              src="/placeholder.svg?height=800&width=1600&query=detailed world map with adventure locations marked"
              alt="DreamGo Adventure Map"
              width={1600}
              height={800}
              className="object-cover"
            />
            {/* Map pins would be interactive in a real implementation */}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {mapLocations.map((location) => (
              <div key={location.id} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                <span className="text-sm">
                  {location.name}, {location.country}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure Types */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Adventure Types</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find the perfect adventure style to match your interests and abilities.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {adventureTypes.map((type) => (
              <Link
                key={type.id}
                href={`/adventures/${type.slug}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[1/1] w-full overflow-hidden">
                  <Image
                    src={type.image || "/placeholder.svg"}
                    alt={type.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">{type.name}</h3>
                    <p className="mt-2 text-sm text-white/90">{type.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Traveler Experiences</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear what our adventurers have to say about their journeys with DreamGo.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.destination}</p>
                  </div>
                </div>
                <blockquote className="mt-4 text-gray-700">"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Adventure?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact our team to plan your perfect adventure or book directly online.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
              <Link href="/booking">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const continents = [
  {
    id: 1,
    name: "Asia",
    slug: "asia",
    description: "From the Himalayas to tropical rainforests",
    image: "/placeholder.svg?height=600&width=800&query=himalayan mountains nepal landscape",
  },
  {
    id: 2,
    name: "South America",
    slug: "south-america",
    description: "Andes mountains, Amazon rainforest, and ancient ruins",
    image: "/placeholder.svg?height=600&width=800&query=machu picchu peru landscape",
  },
  {
    id: 3,
    name: "Africa",
    slug: "africa",
    description: "Iconic safaris and majestic peaks",
    image: "/placeholder.svg?height=600&width=800&query=mount kilimanjaro tanzania landscape",
  },
  {
    id: 4,
    name: "Europe",
    slug: "europe",
    description: "Alpine adventures and coastal treks",
    image: "/placeholder.svg?height=600&width=800&query=alps mountains europe landscape",
  },
  {
    id: 5,
    name: "Oceania",
    slug: "oceania",
    description: "Pristine wilderness and coastal wonders",
    image: "/placeholder.svg?height=600&width=800&query=new zealand mountains landscape",
  },
  {
    id: 6,
    name: "North America",
    slug: "north-america",
    description: "Vast national parks and mountain ranges",
    image: "/placeholder.svg?height=600&width=800&query=rocky mountains landscape",
  },
]

const featuredDestinations = [
  {
    id: 1,
    name: "Everest Base Camp",
    slug: "everest-base-camp",
    location: "Nepal",
    continent: "asia",
    description:
      "Trek to the foot of the world's highest mountain through stunning Sherpa villages and breathtaking landscapes.",
    image: "/placeholder.svg?height=600&width=800&query=everest base camp trek with prayer flags",
    duration: "14 Days",
    difficulty: "Challenging",
    bestTime: "Mar-May, Sep-Nov",
  },
  {
    id: 2,
    name: "Inca Trail",
    slug: "inca-trail",
    location: "Peru",
    continent: "south-america",
    description: "Follow in the footsteps of the Incas on this classic trek to the lost city of Machu Picchu.",
    image: "/placeholder.svg?key=qakwr",
    duration: "4-7 Days",
    difficulty: "Moderate",
    bestTime: "May-Sep",
  },
  {
    id: 3,
    name: "Kilimanjaro",
    slug: "kilimanjaro",
    location: "Tanzania",
    continent: "africa",
    description: "Summit Africa's highest peak and witness the sunrise from the 'Roof of Africa'.",
    image: "/placeholder.svg?key=6ymt6",
    duration: "6-9 Days",
    difficulty: "Challenging",
    bestTime: "Jan-Mar, Jun-Oct",
  },
  {
    id: 4,
    name: "Tour du Mont Blanc",
    slug: "tour-du-mont-blanc",
    location: "France/Italy/Switzerland",
    continent: "europe",
    description: "Circle the Mont Blanc massif on this iconic alpine trek through three countries.",
    image: "/placeholder.svg?height=600&width=800&query=tour du mont blanc alpine landscape",
    duration: "11 Days",
    difficulty: "Moderate",
    bestTime: "Jun-Sep",
  },
  {
    id: 5,
    name: "Milford Track",
    slug: "milford-track",
    location: "New Zealand",
    continent: "oceania",
    description: "Experience New Zealand's most famous walk through pristine rainforests and alpine scenery.",
    image: "/placeholder.svg?height=600&width=800&query=milford track new zealand fiordland",
    duration: "5 Days",
    difficulty: "Moderate",
    bestTime: "Oct-Apr",
  },
  {
    id: 6,
    name: "Torres del Paine",
    slug: "torres-del-paine",
    location: "Chile",
    continent: "south-america",
    description: "Trek the W Circuit through one of the most stunning national parks in Patagonia.",
    image: "/placeholder.svg?height=600&width=800&query=torres del paine patagonia chile mountains",
    duration: "5-7 Days",
    difficulty: "Moderate",
    bestTime: "Nov-Mar",
  },
]

const mapLocations = [
  { id: 1, name: "Everest Base Camp", country: "Nepal" },
  { id: 2, name: "Machu Picchu", country: "Peru" },
  { id: 3, name: "Kilimanjaro", country: "Tanzania" },
  { id: 4, name: "Mont Blanc", country: "France" },
  { id: 5, name: "Milford Track", country: "New Zealand" },
  { id: 6, name: "Torres del Paine", country: "Chile" },
  { id: 7, name: "Annapurna Circuit", country: "Nepal" },
  { id: 8, name: "Serengeti", country: "Tanzania" },
  { id: 9, name: "Banff National Park", country: "Canada" },
  { id: 10, name: "Laugavegur Trail", country: "Iceland" },
  { id: 11, name: "Dolomites", country: "Italy" },
  { id: 12, name: "Great Barrier Reef", country: "Australia" },
]

const adventureTypes = [
  {
    id: 1,
    name: "Trekking",
    slug: "trekking",
    description: "Multi-day hikes through mountains and valleys",
    image: "/placeholder.svg?height=400&width=400&query=mountain trekking with backpacks",
  },
  {
    id: 2,
    name: "Mountain Climbing",
    slug: "climbing",
    description: "Summit famous peaks with expert guides",
    image: "/placeholder.svg?height=400&width=400&query=mountain climbing with ropes and equipment",
  },
  {
    id: 3,
    name: "Wildlife Safaris",
    slug: "wildlife",
    description: "Observe animals in their natural habitats",
    image: "/placeholder.svg?height=400&width=400&query=wildlife safari with elephants and giraffes",
  },
  {
    id: 4,
    name: "Cultural Tours",
    slug: "cultural",
    description: "Immerse yourself in local traditions",
    image: "/placeholder.svg?height=400&width=400&query=cultural experience with local people traditional clothing",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/placeholder.svg?height=100&width=100&query=woman hiker portrait",
    destination: "Everest Base Camp, Nepal",
    quote:
      "The Everest Base Camp trek was life-changing. Our guide was incredibly knowledgeable and made sure we were safe throughout the journey.",
  },
  {
    id: 2,
    name: "James Wilson",
    image: "/placeholder.svg?height=100&width=100&query=man hiker portrait",
    destination: "Inca Trail, Peru",
    quote:
      "DreamGo's attention to detail made our Inca Trail experience exceptional. The guides shared fascinating cultural insights that brought the history to life.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    image: "/placeholder.svg?height=100&width=100&query=woman traveler portrait",
    destination: "Kilimanjaro, Tanzania",
    quote:
      "Climbing Kilimanjaro with DreamGo was the adventure of a lifetime. The team's encouragement helped me reach the summit despite the challenges.",
  },
]

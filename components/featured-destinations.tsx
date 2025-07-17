import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturedDestinations() {
  const destinations = [
    {
      id: "uttarakhand",
      name: "Uttarakhand",
      description: "Land of Gods with stunning Himalayan views",
      image: "/placeholder.svg?height=600&width=800&query=uttarakhand mountains himalaya landscape",
      featured: ["Kedarkantha", "Brahmatal", "Har Ki Dun"],
    },
    {
      id: "himachal-pradesh",
      name: "Himachal Pradesh",
      description: "Beautiful valleys and snow-capped peaks",
      image: "/placeholder.svg?height=600&width=800&query=himachal pradesh mountains landscape",
      featured: ["Hampta Pass", "Beas Kund", "Bhrigu Lake"],
    },
    {
      id: "kashmir",
      name: "Kashmir",
      description: "Paradise on Earth with breathtaking landscapes",
      image: "/placeholder.svg?height=600&width=800&query=kashmir mountains lakes landscape",
      featured: ["Kashmir Great Lakes", "Tarsar Marsar", "Kolahoi Glacier"],
    },
    {
      id: "sikkim",
      name: "Sikkim",
      description: "Eastern Himalayan gem with diverse flora and fauna",
      image: "/placeholder.svg?height=600&width=800&query=sikkim mountains kanchenjunga landscape",
      featured: ["Goecha La", "Dzongri", "Green Lake"],
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
      {destinations.map((destination) => (
        <div
          key={destination.id}
          className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
        >
          <div className="relative h-48 w-full overflow-hidden">
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
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-3">{destination.description}</p>
            <div className="space-y-1 mb-4">
              {destination.featured.map((trek, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  <span>{trek}</span>
                </div>
              ))}
            </div>
            <Link href={`/destinations/${destination.id}`}>
              <Button variant="outline" size="sm" className="w-full">
                Explore <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

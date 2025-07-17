import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AdventureCategories() {
  const categories = [
    {
      id: "winter-treks",
      title: "Winter Treks",
      description: "Experience the magic of snow-covered trails",
      image: "/placeholder.svg?height=400&width=600&query=winter snow trek mountains",
      link: "/treks/winter-treks",
    },
    {
      id: "summer-treks",
      title: "Summer Treks",
      description: "Escape the heat with refreshing mountain adventures",
      image: "/placeholder.svg?height=400&width=600&query=summer mountain trek green meadows",
      link: "/treks/summer-treks",
    },
    {
      id: "monsoon-treks",
      title: "Monsoon Treks",
      description: "Witness lush green landscapes and flowing waterfalls",
      image: "/placeholder.svg?height=400&width=600&query=monsoon trek green mountains waterfalls",
      link: "/treks/monsoon-treks",
    },
    {
      id: "weekend-treks",
      title: "Weekend Treks",
      description: "Short adventures perfect for busy schedules",
      image: "/placeholder.svg?height=400&width=600&query=weekend short trek mountains",
      link: "/treks/weekend-treks",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
      {categories.map((category) => (
        <Link key={category.id} href={category.link} className="group relative overflow-hidden rounded-xl">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.title}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
              <p className="mt-2 text-sm text-white/90">{category.description}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-white">
                <span>Discover</span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

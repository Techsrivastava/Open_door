"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Package {
  slug: string
  title: string
  subtitle: string
  image: string
  duration: string
  location: string
  price: string
  highlights: string[]
}

export default function PackagesCarousel({
  packages,
  title,
  subtitle,
}: {
  packages: Package[]
  title: string
  subtitle: string
}) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [maxScroll, setMaxScroll] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)

  useEffect(() => {
    const updateDimensions = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.clientWidth
        const totalWidth = carouselRef.current.scrollWidth
        setMaxScroll(totalWidth - containerWidth)

        // Calculate card width including gap
        if (packages.length > 0) {
          const cardElement = carouselRef.current.querySelector("[data-card]")
          if (cardElement) {
            setCardWidth(cardElement.clientWidth + 24) // 24px is the gap
          }
        }
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [packages.length])

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount =
        direction === "left"
          ? Math.max(scrollPosition - cardWidth * 2, 0)
          : Math.min(scrollPosition + cardWidth * 2, maxScroll)

      setScrollPosition(scrollAmount)
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft)
    }
  }

  return (
    <div className="relative">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
        <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
      </div>

      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "absolute -left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border shadow-md md:-left-5",
            scrollPosition <= 0 ? "invisible opacity-0" : "visible opacity-100",
          )}
          onClick={() => scroll("left")}
          disabled={scrollPosition <= 0}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Scroll left</span>
        </Button>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x"
          onScroll={handleScroll}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              data-card
              className="min-w-[300px] flex-shrink-0 snap-start rounded-lg border bg-white shadow-sm transition-all hover:shadow-md md:min-w-[350px]"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
                  <p className="text-sm text-white/90">{pkg.subtitle}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{pkg.location}</span>
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <ul className="space-y-1">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary"></span>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">Starting from</span>
                    <p className="text-lg font-bold text-secondary">{pkg.price}</p>
                  </div>
                  <Link href={`/char-dham-yatra/packages/${pkg.slug}`}>
                    <Button size="sm" className="bg-secondary hover:bg-secondary/80">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className={cn(
            "absolute -right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border shadow-md md:-right-5",
            scrollPosition >= maxScroll ? "invisible opacity-0" : "visible opacity-100",
          )}
          onClick={() => scroll("right")}
          disabled={scrollPosition >= maxScroll}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Scroll right</span>
        </Button>
      </div>
    </div>
  )
}

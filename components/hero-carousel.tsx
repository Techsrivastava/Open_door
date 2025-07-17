"use client"

import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules"
import { useState, useCallback, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Mountain, MapPin, Calendar, Users } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

interface Slide {
  id: string | number
  image: string
  title: string
  subtitle: string
  buttonText?: string
  buttonLink?: string
  bgImage?: string
  alt?: string
  difficulty?: string
  duration?: string
  elevation?: string
}

interface HeroSectionProps {
  slides?: Slide[]
  autoplayDelay?: number
  className?: string
}

const expeditionSlides: Slide[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bgImage: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "EVEREST BASE CAMP",
    subtitle: "Journey to the foot of the world's highest peak through the heart of the Himalayas",
    buttonText: "Book Expedition",
    buttonLink: "/expeditions/everest-base-camp",
    alt: "Everest Base Camp trekking route",
    difficulty: "Challenging",
    duration: "14 Days",
    elevation: "5,364m",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bgImage: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "ANNAPURNA CIRCUIT",
    subtitle: "Experience diverse landscapes from subtropical forests to high alpine deserts",
    buttonText: "Explore Trek",
    buttonLink: "/expeditions/annapurna-circuit",
    alt: "Annapurna mountain range trekking",
    difficulty: "Moderate",
    duration: "16 Days",
    elevation: "5,416m",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bgImage: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "K2 BASE CAMP",
    subtitle: "Conquer the savage mountain's base camp in the remote Karakoram range",
    buttonText: "Join Expedition",
    buttonLink: "/expeditions/k2-base-camp",
    alt: "K2 mountain peak expedition",
    difficulty: "Extreme",
    duration: "21 Days",
    elevation: "5,150m",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bgImage: "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "MANASLU CIRCUIT",
    subtitle: "Discover the hidden gem of Nepal's eighth highest mountain",
    buttonText: "Discover Route",
    buttonLink: "/expeditions/manaslu-circuit",
    alt: "Manaslu mountain circuit trek",
    difficulty: "Challenging",
    duration: "18 Days",
    elevation: "5,106m",
  },
]

export default function ModernHeroSection({
  slides = expeditionSlides,
  autoplayDelay = 5000,
  className = "",
}: HeroSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<any>(null)

  const currentSlide = useMemo(() => {
    return slides[activeSlide] || slides[0] || expeditionSlides[0]
  }, [slides, activeSlide])

  const handleSlideChange = useCallback((swiper: any) => {
    setActiveSlide(swiper.realIndex)
  }, [])

  const handlePrevSlide = useCallback(() => {
    swiperInstance?.slidePrev()
  }, [swiperInstance])

  const handleNextSlide = useCallback(() => {
    swiperInstance?.slideNext()
  }, [swiperInstance])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case "easy":
        return "bg-green-500/30 text-green-200 border-green-500/50"
      case "moderate":
        return "bg-yellow-500/30 text-yellow-200 border-yellow-500/50"
      case "challenging":
        return "bg-orange-500/30 text-orange-200 border-orange-500/50"
      case "extreme":
        return "bg-red-500/30 text-red-200 border-red-500/50"
      default:
        return "bg-blue-500/30 text-blue-200 border-blue-500/50"
    }
  }

  if (!slides.length) {
    return (
      <section className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-center text-white">
          <Mountain className="w-16 h-16 mx-auto mb-4 text-slate-400" />
          <h1 className="text-4xl font-bold mb-4">No expeditions available</h1>
          <p className="text-slate-300">Please check back later for amazing adventures</p>
        </div>
      </section>
    )
  }

  return (
    <section className={`w-full min-h-screen relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentSlide.bgImage || currentSlide.image}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center py-0 mb-8 md:py-0 lg:py-0">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full py-20">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6">
              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {currentSlide.difficulty && (
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold border ${getDifficultyColor(currentSlide.difficulty)}`}
                  >
                    <Mountain className="w-4 h-4 inline mr-1" />
                    {currentSlide.difficulty}
                  </span>
                )}
                {currentSlide.duration && (
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-white/20 text-white border border-white/30">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    {currentSlide.duration}
                  </span>
                )}
                {currentSlide.elevation && (
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-white/20 text-white border border-white/30">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    {currentSlide.elevation}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {currentSlide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0">{currentSlide.subtitle}</p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                {currentSlide.buttonText && currentSlide.buttonLink && (
                  <Link href={currentSlide.buttonLink}>
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {currentSlide.buttonText}
                    </Button>
                  </Link>
                )}
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  View Details
                </Button>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center lg:justify-start gap-6 pt-8">
                {/* Dots */}
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => swiperInstance?.slideToLoop(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeSlide ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevSlide}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Carousel */}
            <div className="relative h-96 lg:h-full max-h-[500px] lg:max-h-[600px]">
              <Swiper
                modules={[Pagination, Autoplay, EffectCoverflow]}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 15,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
                  slideShadows: false,
                }}
                slidesPerView="auto"
                centeredSlides={true}
                loop={true}
                spaceBetween={20}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet !bg-white/60 !w-2 !h-2",
                  bulletActiveClass: "swiper-pagination-bullet-active !bg-white !w-6",
                }}
                onSwiper={setSwiperInstance}
                onSlideChange={handleSlideChange}
                className="h-full !pb-12"
                breakpoints={{
                  320: {
                    slidesPerView: 1.2,
                    spaceBetween: 15,
                  },
                  480: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 1.8,
                    spaceBetween: 25,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 2.2,
                    spaceBetween: 35,
                  },
                  1280: {
                    slidesPerView: 2.5,
                    spaceBetween: 40,
                  },
                }}
              >
                {slides.map((slide, index) => {
                  const isActive = index === activeSlide
                  return (
                    <SwiperSlide key={slide.id} className="!w-72 sm:!w-80 lg:!w-96">
                      <div
                        className={`relative h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                          isActive ? "scale-105 ring-2 ring-white/30" : "scale-95 hover:scale-100"
                        }`}
                      >
                        <div className="aspect-[3/4] relative w-full">
                          <Image
                            src={slide.image || "/placeholder.svg"}
                            alt={slide.alt || slide.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                            sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 384px"
                          />

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                          {/* Card Content */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white">
                            <h3 className="font-bold text-base lg:text-lg mb-2 line-clamp-1">{slide.title}</h3>
                            <p className="text-sm text-gray-200 mb-3 line-clamp-2">{slide.subtitle}</p>

                            {/* Stats */}
                            <div className="flex gap-2 flex-wrap">
                              {slide.difficulty && (
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(slide.difficulty)}`}
                                >
                                  {slide.difficulty}
                                </span>
                              )}
                              {slide.duration && (
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                                  {slide.duration}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce hidden sm:block">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

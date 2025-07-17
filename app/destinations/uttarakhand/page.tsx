import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, Mountain, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import BookingForm from "@/components/booking-form"

export default function UttarakhandPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <Image
          src="/placeholder.svg?key=okqea"
          alt="Uttarakhand Treks"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Uttarakhand Treks
            </h1>
            <p className="text-xl text-white/90">Explore the majestic Himalayan trails in the Land of Gods</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Discover Uttarakhand</h2>
              <p className="text-gray-700 leading-relaxed">
                Uttarakhand, known as the "Land of Gods," is a paradise for trekkers and adventure enthusiasts. Nestled
                in the lap of the Himalayas, this northern Indian state offers some of the most breathtaking trekking
                routes in the country. From snow-capped peaks and alpine meadows to ancient forests and sacred
                pilgrimage sites, Uttarakhand has something for every trekker.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're a beginner looking for an easy trek or an experienced trekker seeking a challenge,
                Uttarakhand's diverse terrain provides options for all skill levels. The state is home to famous treks
                like Kedarkantha, Brahmatal, Har Ki Dun, Roopkund, and Valley of Flowers, each offering unique
                landscapes and experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At Dream Go India, we offer expertly guided treks throughout Uttarakhand, ensuring safety, comfort, and
                unforgettable experiences in the Himalayas.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?key=knf72"
                alt="Uttarakhand Himalayan Landscape"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trek Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Uttarakhand Treks by Season</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find the perfect trek for any time of year
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trekCategories.map((category) => (
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

      {/* Popular Treks */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
                <Mountain className="mr-1 h-3.5 w-3.5" />
                <span>Featured Treks</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Popular Uttarakhand Treks</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our most sought-after trekking experiences in Uttarakhand
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {popularTreks.map((trek) => (
              <div
                key={trek.slug}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
              >
                {trek.isPopular && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      POPULAR
                    </span>
                  </div>
                )}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={trek.image || "/placeholder.svg"}
                    alt={trek.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
                      <Badge key={index} variant="outline" className="bg-gray-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{trek.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>Difficulty: {trek.difficulty}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Starting from</span>
                      <p className="text-lg font-bold text-red-600">{trek.price}</p>
                    </div>
                    <Link href={`/treks/${trek.slug}`}>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/treks">
              <Button variant="outline" size="lg">
                View All Uttarakhand Treks
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?key=2k4tg"
                alt="Uttarakhand Seasons"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Best Time to Visit Uttarakhand</h2>
              <p className="text-gray-700 leading-relaxed">
                Uttarakhand offers unique trekking experiences throughout the year. Each season brings its own charm and
                challenges to the trails.
              </p>

              <div className="space-y-4 mt-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-bold text-lg">Winter (December - February)</h3>
                  <p className="text-gray-700">
                    Perfect for snow treks like Kedarkantha, Brahmatal, and Dayara Bugyal. Expect temperatures ranging
                    from -10°C to 10°C with snow-covered trails and stunning winter landscapes.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-bold text-lg">Spring (March - May)</h3>
                  <p className="text-gray-700">
                    Ideal for moderate treks like Har Ki Dun and Kuari Pass. The weather is pleasant with temperatures
                    between 5°C to 20°C, and you'll see blooming rhododendrons and clear mountain views.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-bold text-lg">Monsoon (June - September)</h3>
                  <p className="text-gray-700">
                    Valley of Flowers and other low-altitude treks are beautiful during this season. The landscape turns
                    lush green, but be prepared for rain and occasional landslides. Temperatures range from 15°C to
                    25°C.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-bold text-lg">Autumn (October - November)</h3>
                  <p className="text-gray-700">
                    The best overall season for trekking with clear skies, stable weather, and temperatures between 5°C
                    to 15°C. Perfect for Roopkund, Nag Tibba, and most other treks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Book Your Uttarakhand Trek</h2>
              <p className="text-gray-700 leading-relaxed">
                Ready to embark on an unforgettable Himalayan adventure? Fill out the form to book your trek or inquire
                about our Uttarakhand trekking packages. Our team will get back to you within 24 hours with all the
                details you need.
              </p>

              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 mt-1">
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Expert Local Guides</h3>
                    <p className="text-gray-700">
                      All our treks are led by experienced guides who know the Uttarakhand mountains like the back of
                      their hand.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 mt-1">
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Quality Equipment</h3>
                    <p className="text-gray-700">
                      We provide high-quality trekking and camping equipment to ensure your comfort and safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 mt-1">
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Customizable Packages</h3>
                    <p className="text-gray-700">
                      We can tailor our trekking packages to suit your preferences, group size, and schedule.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 mt-1">
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">24/7 Support</h3>
                    <p className="text-gray-700">
                      Our team is available round the clock to assist you before, during, and after your trek.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to know about trekking in Uttarakhand
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg border bg-white p-6">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Your Uttarakhand Adventure?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Contact us today to plan your perfect Himalayan trek in the beautiful state of Uttarakhand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Contact Us
              </Button>
            </Link>
            <Link href="/treks">
              <Button size="lg" variant="outline">
                Browse All Treks
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const trekCategories = [
  {
    id: "winter",
    title: "Winter Treks",
    description: "Snow-covered trails and magical winter landscapes",
    image: "/placeholder.svg?key=uwh9g",
    link: "/treks/winter-treks",
  },
  {
    id: "summer",
    title: "Summer Treks",
    description: "Pleasant weather and clear mountain views",
    image: "/placeholder.svg?key=5r6rj",
    link: "/treks/summer-treks",
  },
  {
    id: "monsoon",
    title: "Monsoon Treks",
    description: "Lush green landscapes and flowing waterfalls",
    image: "/placeholder.svg?height=400&width=600&query=uttarakhand monsoon trek valley of flowers",
    link: "/treks/monsoon-treks",
  },
  {
    id: "weekend",
    title: "Weekend Treks",
    description: "Short adventures perfect for busy schedules",
    image: "/placeholder.svg?height=400&width=600&query=uttarakhand weekend short trek",
    link: "/treks/weekend-treks",
  },
]

const popularTreks = [
  {
    slug: "kedarkantha-trek",
    title: "Kedarkantha Trek",
    location: "Uttarkashi, Uttarakhand",
    duration: "6 Days",
    difficulty: "Easy-Moderate",
    price: "₹8,999",
    image: "/placeholder.svg?height=600&width=800&query=kedarkantha trek snow mountains uttarakhand",
    isPopular: true,
    tags: ["Winter Trek", "Snow Trek", "Summit Trek"],
  },
  {
    slug: "brahmatal-trek",
    title: "Brahmatal Trek",
    location: "Chamoli, Uttarakhand",
    duration: "6 Days",
    difficulty: "Moderate",
    price: "₹9,499",
    image: "/placeholder.svg?height=600&width=800&query=brahmatal trek uttarakhand snow mountains",
    isPopular: true,
    tags: ["Winter Trek", "Lake Trek", "Forest Trek"],
  },
  {
    slug: "har-ki-dun-trek",
    title: "Har Ki Dun Trek",
    location: "Uttarkashi, Uttarakhand",
    duration: "8 Days",
    difficulty: "Moderate",
    price: "₹12,999",
    image: "/placeholder.svg?height=600&width=800&query=har ki dun valley trek uttarakhand",
    isPopular: true,
    tags: ["Valley Trek", "Cultural Trek", "Summer Trek"],
  },
  {
    slug: "valley-of-flowers-trek",
    title: "Valley of Flowers Trek",
    location: "Chamoli, Uttarakhand",
    duration: "6 Days",
    difficulty: "Easy-Moderate",
    price: "₹9,999",
    image: "/placeholder.svg?height=600&width=800&query=valley of flowers uttarakhand monsoon",
    isPopular: false,
    tags: ["Monsoon Trek", "UNESCO Site", "Flower Valley"],
  },
  {
    slug: "roopkund-trek",
    title: "Roopkund Trek",
    location: "Chamoli, Uttarakhand",
    duration: "8 Days",
    difficulty: "Difficult",
    price: "₹14,999",
    image: "/placeholder.svg?height=600&width=800&query=roopkund trek skeleton lake uttarakhand",
    isPopular: false,
    tags: ["Mystery Lake", "High Altitude", "Challenging"],
  },
  {
    slug: "dayara-bugyal-trek",
    title: "Dayara Bugyal Trek",
    location: "Uttarkashi, Uttarakhand",
    duration: "5 Days",
    difficulty: "Easy",
    price: "₹7,999",
    image: "/placeholder.svg?height=600&width=800&query=dayara bugyal meadows uttarakhand",
    isPopular: false,
    tags: ["Meadow Trek", "Beginner Friendly", "Weekend Trek"],
  },
]

const faqs = [
  {
    question: "What is the best time to trek in Uttarakhand?",
    answer:
      "Uttarakhand offers trekking opportunities throughout the year. Winter (December-February) is perfect for snow treks, spring (March-May) and autumn (October-November) offer clear views and pleasant weather, while monsoon (June-September) is ideal for the Valley of Flowers and other low-altitude treks.",
  },
  {
    question: "Do I need prior trekking experience for Uttarakhand treks?",
    answer:
      "Not necessarily. Uttarakhand has treks for all experience levels. Beginners can start with easy treks like Dayara Bugyal or Nag Tibba, while experienced trekkers can challenge themselves with Roopkund or Bali Pass Trek.",
  },
  {
    question: "What should I pack for an Uttarakhand trek?",
    answer:
      "Essential items include good trekking shoes, warm layers, rain protection, a backpack, water bottle, headlamp, personal medications, and toiletries. For winter treks, add thermal wear, down jacket, and waterproof gloves. We provide a detailed packing list after booking.",
  },
  {
    question: "Is it safe to trek in Uttarakhand?",
    answer:
      "Yes, trekking with a reputable company like Dream Go India ensures safety. Our guides are trained in first aid and mountain rescue, and we follow strict safety protocols. However, trekking in the mountains always carries inherent risks, which is why we emphasize proper preparation and equipment.",
  },
  {
    question: "How fit do I need to be for Uttarakhand treks?",
    answer:
      "Basic fitness is required for all treks. For easy to moderate treks, being able to walk 5-6 km with a light backpack is sufficient. For difficult treks, we recommend a fitness routine including cardio and strength training for at least 1-2 months before the trek.",
  },
  {
    question: "Do you provide equipment or should I bring my own?",
    answer:
      "We provide camping equipment (tents, sleeping bags, mattresses), cooking equipment, and first aid kits. You need to bring personal gear like backpacks, trekking shoes, clothing, and personal items. Trekking poles can be rented from us if needed.",
  },
]

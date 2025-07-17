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

interface TrekPageProps {
  params: {
    slug: string
  }
}

export default function TrekPage({ params }: TrekPageProps) {
  // In a real app, you would fetch this data from an API or database
  const trek = getTrekBySlug(params.slug)

  if (!trek) {
    return <div>Trek not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <Image
          src={trek.heroImage || "/placeholder.svg"}
          alt={trek.title}
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
              <Mountain className="mr-1 h-3.5 w-3.5" />
              <span>{trek.category}</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">{trek.title}</h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-5 w-5" />
              <span className="text-xl">{trek.location}</span>
            </div>
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
                  {trek.gallery.map((image, index) => (
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
                    {trek.itinerary.map((day, index) => (
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
                        {trek.inclusions.map((item, index) => (
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
                        {trek.exclusions.map((item, index) => (
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
                        {trek.thingsToCarry.clothing.map((item, index) => (
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
                        {trek.thingsToCarry.equipment.map((item, index) => (
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
                    {trek.faqs.map((faq, index) => (
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
                  {trek.upcomingBatches.map((batch, index) => (
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
                  {trek.similarTreks.map((similarTrek, index) => (
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

function getTrekBySlug(slug: string) {
  const treks = [
    {
      slug: "kedarkantha-trek",
      title: "Kedarkantha Trek",
      category: "Winter Trek",
      location: "Uttarakhand",
      overview:
        "Kedarkantha is a beautiful ridge peak in the Tons River Valley of the Govind Wildlife Sanctuary in Uttarakhand. The trek offers stunning views of the Himalayan ranges, pristine snow trails, and beautiful campsites surrounded by pine forests. It's one of the most popular winter treks in India, known for its easy accessibility and breathtaking summit views.",
      heroImage: "/placeholder.svg?height=1080&width=1920&query=kedarkantha trek summit snow mountains uttarakhand",
      gallery: [
        {
          src: "/placeholder.svg?height=600&width=600&query=kedarkantha trek snow trail",
          alt: "Snow trail on Kedarkantha Trek",
        },
        {
          src: "/placeholder.svg?height=600&width=600&query=kedarkantha summit view",
          alt: "View from Kedarkantha Summit",
        },
        {
          src: "/placeholder.svg?height=600&width=600&query=kedarkantha trek campsite in snow",
          alt: "Campsite on Kedarkantha Trek",
        },
        {
          src: "/placeholder.svg?height=600&width=600&query=kedarkantha trek pine forest snow",
          alt: "Pine Forest on Kedarkantha Trek",
        },
        {
          src: "/placeholder.svg?height=600&width=600&query=kedarkantha trek group photo",
          alt: "Trekkers on Kedarkantha",
        },
        {
          src: "/placeholder.svg?height=600&width=600&query=kedarkantha trek sunrise",
          alt: "Sunrise from Kedarkantha",
        },
      ],
      duration: "6 Days",
      altitude: "12,500 ft",
      difficulty: "Easy to Moderate",
      bestTime: "December to April",
      temperature: "Day: 8°C to 15°C, Night: -5°C to -10°C",
      waterSources: "Available at all campsites",
      price: "₹8,999",
      rating: 5,
      itinerary: [
        {
          day: 1,
          title: "Dehradun to Sankri",
          description:
            "Drive from Dehradun to Sankri (1,950 m). The journey takes about 10 hours and covers 220 km. Overnight stay at Sankri.",
        },
        {
          day: 2,
          title: "Sankri to Juda Ka Talab",
          description:
            "Trek from Sankri to Juda Ka Talab (2,700 m). The trek is about 4 km and takes 5 hours. Overnight stay in tents.",
        },
        {
          day: 3,
          title: "Juda Ka Talab to Kedarkantha Base",
          description:
            "Trek from Juda Ka Talab to Kedarkantha Base (3,400 m). The trek is about 4 km and takes 4-5 hours. Overnight stay in tents.",
        },
        {
          day: 4,
          title: "Kedarkantha Base to Summit and back to Hargaon",
          description:
            "Early morning trek to Kedarkantha Summit (3,800 m) and then descend to Hargaon (2,800 m). The trek is about 6 km and takes 8-9 hours. Overnight stay in tents.",
        },
        {
          day: 5,
          title: "Hargaon to Sankri",
          description:
            "Trek from Hargaon to Sankri. The trek is about 6 km and takes 4 hours. Overnight stay at Sankri.",
        },
        {
          day: 6,
          title: "Sankri to Dehradun",
          description: "Drive from Sankri to Dehradun. The journey takes about 10 hours.",
        },
      ],
      inclusions: [
        "Transportation from Dehradun to Sankri and back",
        "Meals during the trek (veg)",
        "Camping equipment (tents, sleeping bags, mattresses)",
        "First aid medical kit",
        "Expert trek leader and support staff",
        "Forest permits and camping charges",
      ],
      exclusions: ["Personal expenses", "Meals during transit", "Insurance", "Anything not mentioned in inclusions"],
      thingsToCarry: {
        clothing: [
          "Warm layers (fleece, down jacket)",
          "Thermal inner wear",
          "Trek pants",
          "Waterproof jacket and pants",
          "Gloves, woolen cap, and sun cap",
          "Good quality trekking shoes",
          "3-4 pairs of socks",
        ],
        equipment: [
          "Backpack with rain cover (50-60 liters)",
          "Trekking pole",
          "Headlamp/torch with extra batteries",
          "Water bottle (2 liters)",
          "Basic medications and personal toiletries",
          "Sunglasses and sunscreen",
          "Camera (optional)",
        ],
      },
      faqs: [
        {
          question: "Is Kedarkantha suitable for beginners?",
          answer:
            "Yes, Kedarkantha is an ideal trek for beginners. The gradual ascent and well-marked trails make it accessible for first-time trekkers with reasonable fitness levels.",
        },
        {
          question: "What is the best time to do the Kedarkantha Trek?",
          answer:
            "The best time for Kedarkantha Trek is from December to April when the trail is covered with snow, offering a magical winter wonderland experience. However, it can also be done during other months, though the experience will be different.",
        },
        {
          question: "How cold does it get on the Kedarkantha Trek?",
          answer:
            "During winter months (December to February), temperatures can drop to -5°C to -10°C at night and hover around 8°C to 15°C during the day. It's essential to carry proper winter clothing.",
        },
        {
          question: "Do I need prior trekking experience for Kedarkantha?",
          answer:
            "No prior trekking experience is required for Kedarkantha. However, basic fitness is necessary. We recommend preparing with some cardio exercises like running or stair climbing for at least a month before the trek.",
        },
        {
          question: "Is there mobile network connectivity on the trek?",
          answer:
            "Mobile network is available in Sankri (BSNL network), but once you start the trek, there is no network connectivity. It's advisable to inform your family about limited connectivity before starting the trek.",
        },
      ],
      upcomingBatches: [
        {
          date: "December 15-20, 2025",
          availability: "Filling Fast",
        },
        {
          date: "December 22-27, 2025",
          availability: "Available",
        },
        {
          date: "January 5-10, 2026",
          availability: "Available",
        },
        {
          date: "January 18-23, 2026",
          availability: "Available",
        },
      ],
      similarTreks: [
        {
          title: "Brahmatal Trek",
          slug: "brahmatal-trek",
          location: "Uttarakhand",
          image: "/placeholder.svg?height=100&width=100&query=brahmatal trek uttarakhand",
        },
        {
          title: "Dayara Bugyal Trek",
          slug: "dayara-bugyal-trek",
          location: "Uttarakhand",
          image: "/placeholder.svg?height=100&width=100&query=dayara bugyal trek uttarakhand",
        },
        {
          title: "Kuari Pass Trek",
          slug: "kuari-pass-trek",
          location: "Uttarakhand",
          image: "/placeholder.svg?height=100&width=100&query=kuari pass trek uttarakhand",
        },
      ],
    },
    {
      slug: "brahmatal-trek",
      title: "Brahmatal Trek",
      category: "Winter Trek",
      location: "Uttarakhand",
      overview:
        "Brahmatal Trek is a hidden gem in the Uttarakhand Himalayas, offering stunning views of Mt. Trishul and Nanda Ghunti. The trek takes you through dense oak and rhododendron forests, alpine meadows, and the frozen Brahmatal Lake. It's known for its breathtaking snow-covered landscapes and relatively less crowded trails compared to other winter treks.",
      heroImage: "/placeholder.svg?height=1080&width=1920&query=brahmatal trek snow mountains uttarakhand",
      gallery: [
        {
          src: "/placeholder.svg?height=600&width=600&query=brahmatal lake frozen",
          alt: "Frozen Brahmatal Lake",
        },
        {
          src: "/placeholder.svg?height=600&width=600&query=brahmatal trek forest trail",
          alt: "Forest Trail on Brahmatal Trek",
        },
        {
          src: "/placeholder.svg?height=600&width=600&query=brahmatal trek campsite",
          alt: "Campsite on Brahmatal Trek",
        },
        {
          src: "/placeholder.svg?height=600&width=600&query=brahmatal trek snow trail",
          alt: "Snow Trail on Brahmatal Trek",
        },
        {
          src: "/placeholder.svg?height=600&width=600&query=mt trishul view from brahmatal",
          alt: "Mt. Trishul View from Brahmatal",
        },
        {
          src: "/placeholder.svg?height=600&width=600&query=brahmatal trek summit view",
          alt: "View from Brahmatal Summit",
        },
      ],
      duration: "6 Days",
      altitude: "12,100 ft",
      difficulty: "Moderate",
      bestTime: "December to March",
      temperature: "Day: 5°C to 10°C, Night: -5°C to -15°C",
      waterSources: "Available at campsites, limited on trail",
      price: "₹9,499",
      rating: 4,
      itinerary: [
        {
          day: 1,
          title: "Kathgodam to Lohajung",
          description:
            "Drive from Kathgodam to Lohajung (7,700 ft). The journey takes about 10-11 hours and covers 220 km. Overnight stay at Lohajung.",
        },
        {
          day: 2,
          title: "Lohajung to Bekaltal",
          description:
            "Trek from Lohajung to Bekaltal (9,700 ft). The trek is about 6 km and takes 5-6 hours. Overnight stay in tents.",
        },
        {
          day: 3,
          title: "Bekaltal to Brahmatal",
          description:
            "Trek from Bekaltal to Brahmatal (10,500 ft). The trek is about 7 km and takes 6-7 hours. Overnight stay in tents.",
        },
        {
          day: 4,
          title: "Brahmatal to Brahmatal Peak and back",
          description:
            "Trek from Brahmatal campsite to Brahmatal Peak (12,100 ft) and back to the campsite. The trek is about 6 km and takes 6-7 hours. Overnight stay in tents.",
        },
        {
          day: 5,
          title: "Brahmatal to Lohajung",
          description:
            "Trek from Brahmatal to Lohajung. The trek is about 9 km and takes 6 hours. Overnight stay at Lohajung.",
        },
        {
          day: 6,
          title: "Lohajung to Kathgodam",
          description: "Drive from Lohajung to Kathgodam. The journey takes about 10-11 hours.",
        },
      ],
      inclusions: [
        "Transportation from Kathgodam to Lohajung and back",
        "Meals during the trek (veg)",
        "Camping equipment (tents, sleeping bags, mattresses)",
        "First aid medical kit",
        "Expert trek leader and support staff",
        "Forest permits and camping charges",
      ],
      exclusions: ["Personal expenses", "Meals during transit", "Insurance", "Anything not mentioned in inclusions"],
      thingsToCarry: {
        clothing: [
          "Warm layers (fleece, down jacket)",
          "Thermal inner wear",
          "Trek pants",
          "Waterproof jacket and pants",
          "Gloves, woolen cap, and sun cap",
          "Good quality trekking shoes",
          "3-4 pairs of socks",
        ],
        equipment: [
          "Backpack with rain cover (50-60 liters)",
          "Trekking pole",
          "Headlamp/torch with extra batteries",
          "Water bottle (2 liters)",
          "Basic medications and personal toiletries",
          "Sunglasses and sunscreen",
          "Camera (optional)",
        ],
      },
      faqs: [
        {
          question: "How difficult is the Brahmatal Trek?",
          answer:
            "Brahmatal Trek is of moderate difficulty. It involves steeper ascents compared to Kedarkantha and reaches a higher altitude. It's recommended for those who have some prior trekking experience or good fitness levels.",
        },
        {
          question: "What is special about Brahmatal Trek?",
          answer:
            "Brahmatal offers stunning views of major Himalayan peaks like Mt. Trishul and Nanda Ghunti. The frozen Brahmatal Lake, beautiful forests, and meadows covered in snow make it a photographer's paradise. It's also less crowded than other popular winter treks.",
        },
        {
          question: "Is there snow on the Brahmatal Trek?",
          answer:
            "Yes, from late December to March, the Brahmatal Trek is covered with snow, offering a beautiful winter trekking experience. The amount of snow increases as you gain altitude.",
        },
        {
          question: "How to reach the starting point of Brahmatal Trek?",
          answer:
            "The trek starts from Lohajung, which is approximately 220 km from Kathgodam. We arrange transportation from Kathgodam to Lohajung. You can reach Kathgodam by train from Delhi or by road.",
        },
        {
          question: "Is Brahmatal suitable for first-time trekkers?",
          answer:
            "While first-time trekkers with good fitness can attempt Brahmatal, we recommend starting with an easier trek like Kedarkantha. If you're determined to do Brahmatal as your first trek, ensure you prepare well with cardio exercises for at least 1-2 months before the trek.",
        },
      ],
      upcomingBatches: [
        {
          date: "December 18-23, 2025",
          availability: "Available",
        },
        {
          date: "January 8-13, 2026",
          availability: "Filling Fast",
        },
        {
          date: "January 22-27, 2026",
          availability: "Available",
        },
        {
          date: "February 5-10, 2026",
          availability: "Available",
        },
      ],
      similarTreks: [
        {
          title: "Kedarkantha Trek",
          slug: "kedarkantha-trek",
          location: "Uttarakhand",
          image: "/placeholder.svg?height=100&width=100&query=kedarkantha trek uttarakhand",
        },
        {
          title: "Dayara Bugyal Trek",
          slug: "dayara-bugyal-trek",
          location: "Uttarakhand",
          image: "/placeholder.svg?height=100&width=100&query=dayara bugyal trek uttarakhand",
        },
        {
          title: "Kuari Pass Trek",
          slug: "kuari-pass-trek",
          location: "Uttarakhand",
          image: "/placeholder.svg?height=100&width=100&query=kuari pass trek uttarakhand",
        },
      ],
    },
    {
      slug: "har-ki-dun-trek",
      title: "Har Ki Dun Trek",
      category: "Summer Trek",
      location: "Uttarakhand",
      overview:
        "Har Ki Dun, also known as the 'Valley of Gods', is one of the most beautiful valleys in the Western Himalayas. This ancient trail is believed to be the path taken by the Pandavas on their way to heaven. The trek offers stunning views of Swargarohini peaks, beautiful meadows, and ancient villages with unique architecture dating back to 3000 years. The valley's cradle-shaped formation gives it the name 'Har Ki Dun' (Valley of Gods).",
      heroImage: "/placeholder.svg?height=1080&width=1920&query=har ki dun valley uttarakhand mountains",
      gallery: [
        {
          src: "/placeholder.svg?height=600&width=600&query=har ki dun valley view",
          alt: "Har Ki Dun Valley View",
        },
        {
          src: "/placeholder.svg?height=600&width=600&query=har ki dun trek trail",
          alt: "Trail to Har Ki Dun",
        },
        {
          src: "/placeholder.svg?height=600&width=600&query=osla village har ki dun",
          alt: "Osla Village on Har Ki Dun Trek",
        },
        {
          src: "/placeholder.svg?height=600&width=600&query=har ki dun campsite",
          alt: "Campsite at Har Ki Dun",
        },
        {
          src: "/placeholder.svg?height=600&width=600&query=swargarohini peaks from har ki dun",
          alt: "Swargarohini Peaks from Har Ki Dun",
        },
        {
          src: "/placeholder.svg?height=600&width=600&query=har ki dun trek river crossing",
          alt: "River Crossing on Har Ki Dun Trek",
        },
      ],
      duration: "8 Days",
      altitude: "11,700 ft",
      difficulty: "Moderate",
      bestTime: "April to June and September to November",
      temperature: "Day: 10°C to 20°C, Night: 0°C to 5°C",
      waterSources: "Available throughout the trek",
      price: "₹12,999",
      rating: 5,
      itinerary: [
        {
          day: 1,
          title: "Dehradun to Sankri",
          description:
            "Drive from Dehradun to Sankri (6,400 ft). The journey takes about 10 hours and covers 220 km. Overnight stay at Sankri.",
        },
        {
          day: 2,
          title: "Sankri to Pauni Garaat",
          description:
            "Trek from Sankri to Pauni Garaat (7,700 ft). The trek is about 12 km and takes 6 hours. Overnight stay in tents.",
        },
        {
          day: 3,
          title: "Pauni Garaat to Kalkattiyadhar",
          description:
            "Trek from Pauni Garaat to Kalkattiyadhar (9,700 ft). The trek is about 9 km and takes 5-6 hours. Overnight stay in tents.",
        },
        {
          day: 4,
          title: "Kalkattiyadhar to Har Ki Dun",
          description:
            "Trek from Kalkattiyadhar to Har Ki Dun (11,700 ft). The trek is about 6 km and takes 4-5 hours. Overnight stay in tents.",
        },
        {
          day: 5,
          title: "Har Ki Dun Exploration Day",
          description:
            "Explore the beautiful Har Ki Dun valley, visit nearby villages, and enjoy the stunning views of Swargarohini peaks. Overnight stay in tents.",
        },
        {
          day: 6,
          title: "Har Ki Dun to Kalkattiyadhar",
          description:
            "Trek from Har Ki Dun to Kalkattiyadhar. The trek is about 6 km and takes 4 hours. Overnight stay in tents.",
        },
        {
          day: 7,
          title: "Kalkattiyadhar to Sankri",
          description:
            "Trek from Kalkattiyadhar to Sankri. The trek is about 21 km and takes 8-9 hours. Overnight stay at Sankri.",
        },
        {
          day: 8,
          title: "Sankri to Dehradun",
          description: "Drive from Sankri to Dehradun. The journey takes about 10 hours.",
        },
      ],
      inclusions: [
        "Transportation from Dehradun to Sankri and back",
        "Meals during the trek (veg)",
        "Camping equipment (tents, sleeping bags, mattresses)",
        "First aid medical kit",
        "Expert trek leader and support staff",
        "Forest permits and camping charges",
      ],
      exclusions: ["Personal expenses", "Meals during transit", "Insurance", "Anything not mentioned in inclusions"],
      thingsToCarry: {
        clothing: [
          "Warm layers (fleece, light jacket)",
          "Trek pants",
          "Waterproof jacket and pants",
          "Gloves, woolen cap, and sun cap",
          "Good quality trekking shoes",
          "3-4 pairs of socks",
        ],
        equipment: [
          "Backpack with rain cover (50-60 liters)",
          "Trekking pole",
          "Headlamp/torch with extra batteries",
          "Water bottle (2 liters)",
          "Basic medications and personal toiletries",
          "Sunglasses and sunscreen",
          "Camera (optional)",
        ],
      },
      faqs: [
        {
          question: "What is special about Har Ki Dun Trek?",
          answer:
            "Har Ki Dun is one of the oldest and most culturally rich treks in the Himalayas. The valley's unique cradle shape, ancient villages with traditional architecture, and stunning views of Swargarohini peaks make it special. It's also one of the few treks that can be done in both summer and winter.",
        },
        {
          question: "Is Har Ki Dun Trek difficult?",
          answer:
            "Har Ki Dun is a moderate trek suitable for beginners with good fitness levels. The gradual ascent and well-marked trails make it accessible, but the longer duration (8 days) requires good stamina and endurance.",
        },
        {
          question: "What is the best time to do Har Ki Dun Trek?",
          answer:
            "The best time for Har Ki Dun Trek is from April to June and September to November. During spring (April-June), the valley is covered with colorful flowers, while autumn (September-November) offers clear skies and stunning mountain views.",
        },
        {
          question: "Can I see snow on Har Ki Dun Trek?",
          answer:
            "Yes, if you trek during late April to early May, you might see some snow patches at higher elevations. For a full snow experience, the trek can also be done in winter (December to March), though it's more challenging during this time.",
        },
        {
          question: "What are the accommodation options on the trek?",
          answer:
            "During the trek, accommodation is in tents (2-3 people sharing). At Sankri (base village), we stay in basic guesthouses or homestays. All camping equipment including sleeping bags, mattresses, and tents are provided by us.",
        },
      ],
      upcomingBatches: [
        {
          date: "April 10-17, 2026",
          availability: "Available",
        },
        {
          date: "May 5-12, 2026",
          availability: "Filling Fast",
        },
        {
          date: "May 20-27, 2026",
          availability: "Available",
        },
        {
          date: "June 8-15, 2026",
          availability: "Available",
        },
      ],
      similarTreks: [
        {
          title: "Valley of Flowers",
          slug: "valley-of-flowers",
          location: "Uttarakhand",
          image: "/placeholder.svg?height=100&width=100&query=valley of flowers uttarakhand",
        },
        {
          title: "Rupin Pass Trek",
          slug: "rupin-pass-trek",
          location: "Uttarakhand",
          image: "/placeholder.svg?height=100&width=100&query=rupin pass trek uttarakhand",
        },
        {
          title: "Bali Pass Trek",
          slug: "bali-pass-trek",
          location: "Uttarakhand",
          image: "/placeholder.svg?height=100&width=100&query=bali pass trek uttarakhand",
        },
      ],
    },
  ]

  return treks.find((trek) => trek.slug === slug)
}

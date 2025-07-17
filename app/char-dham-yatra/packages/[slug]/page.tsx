import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  CheckCircle,
  AlertCircle,
  Compass,
  IndianRupee,
  Utensils,
  Home,
  Bus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CharDhamBookingForm from "@/components/char-dham-booking-form"

interface PackagePageProps {
  params: {
    slug: string
  }
}

export default function PackagePage({ params }: PackagePageProps) {
  // In a real app, you would fetch this data from an API or database
  const packageData = getPackageBySlug(params.slug)

  if (!packageData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Package Not Found</h1>
        <p className="mb-8">The package you are looking for does not exist or has been removed.</p>
        <Button asChild className="bg-orange-600 hover:bg-orange-700">
          <Link href="/char-dham-yatra/packages">View All Packages</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <Image
          src={
            packageData.heroImage ||
            "/placeholder.svg?height=1080&width=1920&query=char dham yatra pilgrimage mountains temples" ||
            "/placeholder.svg"
          }
          alt={packageData.title}
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700">
              <Compass className="mr-1 h-3.5 w-3.5" />
              <span>Char Dham Yatra</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              {packageData.title}
            </h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-5 w-5" />
              <span className="text-xl">Uttarakhand</span>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed">{packageData.description}</p>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {packageData.galleryImages.map((image, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${packageData.title} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Tabs for Package Details */}
              <Tabs defaultValue="itinerary">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                  <TabsTrigger value="highlights">Highlights</TabsTrigger>
                  <TabsTrigger value="faqs">FAQs</TabsTrigger>
                </TabsList>
                <TabsContent value="itinerary" className="space-y-4 mt-4">
                  <h3 className="text-xl font-bold">Day-by-Day Itinerary</h3>
                  <div className="space-y-4">
                    {packageData.itinerary.map((day, index) => (
                      <div key={index} className="border-l-2 border-orange-500 pl-4 pb-4">
                        <h4 className="text-lg font-bold">
                          Day {day.day}: {day.title}
                        </h4>
                        <p className="text-gray-700 mb-2">{day.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Home className="h-4 w-4 text-orange-500" />
                            <span>{day.accommodation}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Utensils className="h-4 w-4 text-orange-500" />
                            <span>{day.meals}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Bus className="h-4 w-4 text-orange-500" />
                            <span>{day.distance}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="inclusions" className="space-y-4 mt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3">Inclusions</h3>
                      <ul className="space-y-2">
                        {packageData.inclusions.map((item, index) => (
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
                        {packageData.exclusions.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="highlights" className="space-y-4 mt-4">
                  <h3 className="text-xl font-bold mb-3">Package Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {packageData.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2 bg-orange-50 p-3 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="faqs" className="space-y-4 mt-4">
                  <h3 className="text-xl font-bold mb-3">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {packageData.faqs.map((faq, index) => (
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
                    <p className="text-3xl font-bold text-orange-600">{packageData.price}</p>
                    <p className="text-sm text-gray-500">per person</p>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= packageData.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 mb-4" asChild>
                  <a href="#booking">Book Now</a>
                </Button>
                <Button variant="outline" className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

              {/* Package Info */}
              <div className="border rounded-lg p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold">Package Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{packageData.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-gray-500">Group Size</p>
                      <p className="font-medium">{packageData.groupSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-gray-500">Starting Point</p>
                      <p className="font-medium">{packageData.startingPoint}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-gray-500">Best Time</p>
                      <p className="font-medium">{packageData.bestTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <IndianRupee className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-gray-500">Advance Payment</p>
                      <p className="font-medium">30% to confirm booking</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Batches */}
              <div className="border rounded-lg p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold">Upcoming Batches</h3>
                <div className="space-y-3">
                  {packageData.upcomingBatches.map((batch, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2 last:border-0">
                      <div>
                        <p className="font-medium">{batch.date}</p>
                        <p className="text-sm text-gray-500">{batch.availability}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <a href="#booking">Book</a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Similar Packages */}
              <div className="border rounded-lg p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold">Similar Packages</h3>
                <div className="space-y-3">
                  {packageData.similarPackages.map((similarPackage, index) => (
                    <Link key={index} href={`/char-dham-yatra/packages/${similarPackage.slug}`}>
                      <div className="flex gap-3 items-center group">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md flex-shrink-0">
                          <Image
                            src={similarPackage.image || "/placeholder.svg"}
                            alt={similarPackage.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium group-hover:text-orange-600 transition-colors">
                            {similarPackage.title}
                          </p>
                          <p className="text-sm text-gray-500">{similarPackage.price}</p>
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

      {/* Booking Form */}
      <section id="booking" className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Book Your Char Dham Yatra</h2>
              <p className="text-gray-600 mt-2">Fill out the form below to book your spot on the {packageData.title}</p>
            </div>
            <CharDhamBookingForm packageName={packageData.title} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-orange-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Your Divine Journey?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Book your spot on the {packageData.title} today and experience the spiritual journey of a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
              <a href="#booking">Book Now</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function getPackageBySlug(slug: string) {
  const packages = [
    {
      slug: "standard-char-dham",
      title: "Standard Char Dham Package",
      subtitle: "Complete Char Dham Yatra by road with comfortable accommodations",
      description:
        "Experience the divine journey to all four Dhams - Yamunotri, Gangotri, Kedarnath, and Badrinath with our comprehensive Standard Char Dham Package. This carefully crafted itinerary allows you to visit all the sacred sites with adequate time for darshan and spiritual activities, while ensuring comfortable accommodations and transportation throughout your journey.",
      price: "₹45,999",
      duration: "12 Days / 11 Nights",
      groupSize: "10-15 people",
      startingPoint: "Haridwar",
      endingPoint: "Haridwar",
      bestTime: "May to June & September to October",
      rating: 5,
      heroImage: "/images/char-dham-package-custom.png",
      galleryImages: [
        "/placeholder.svg?key=37x2g",
        "/placeholder.svg?key=ldo58",
        "/placeholder.svg?key=dtgeh",
        "/placeholder.svg?key=c0kot",
        "/placeholder.svg?key=18vs2",
        "/placeholder.svg?height=600&width=800&query=uttarakhand mountains char dham route",
      ],
      highlights: [
        "Visit all four sacred Dhams: Yamunotri, Gangotri, Kedarnath, and Badrinath",
        "Comfortable accommodation throughout the journey",
        "All meals included (vegetarian)",
        "Experienced guide and support staff",
        "Transportation in AC vehicle",
        "Assistance for temple rituals and pujas",
        "Medical support during the journey",
      ],
      inclusions: [
        "11 nights accommodation in hotels/guesthouses (twin sharing basis)",
        "All meals (breakfast, lunch, and dinner) - pure vegetarian",
        "All transfers and sightseeing by AC vehicle",
        "Experienced tour guide throughout the journey",
        "All applicable taxes",
        "Bottled water during travel",
        "Basic medical kit",
        "All necessary permits",
        "Assistance for temple rituals",
      ],
      exclusions: [
        "Personal expenses and tips",
        "Special puja arrangements",
        "Travel insurance",
        "Helicopter tickets (if opted)",
        "Any item not mentioned in inclusions",
        "Additional accommodation due to bad weather or roadblocks",
        "Porter/mule charges for personal luggage",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Haridwar",
          description:
            "Arrive in Haridwar and check-in to the hotel. Attend the evening Ganga Aarti at Har Ki Pauri. Overnight stay in Haridwar.",
          accommodation: "Hotel in Haridwar",
          meals: "Dinner",
          distance: "N/A",
        },
        {
          day: 2,
          title: "Haridwar to Barkot",
          description:
            "After breakfast, drive to Barkot. En route, visit Kempty Falls in Mussoorie. Check-in to the hotel in Barkot. Overnight stay in Barkot.",
          accommodation: "Hotel in Barkot",
          meals: "Breakfast, Lunch, Dinner",
          distance: "200 km / 7-8 hours",
        },
        {
          day: 3,
          title: "Barkot to Yamunotri and back to Barkot",
          description:
            "Early morning, drive to Janki Chatti. Trek from Janki Chatti to Yamunotri (6 km). Perform puja and darshan at Yamunotri Temple. Return to Janki Chatti and drive back to Barkot. Overnight stay in Barkot.",
          accommodation: "Hotel in Barkot",
          meals: "Breakfast, Lunch, Dinner",
          distance: "50 km drive + 12 km trek (round trip)",
        },
        {
          day: 4,
          title: "Barkot to Uttarkashi",
          description:
            "After breakfast, drive to Uttarkashi. Visit Vishwanath Temple in Uttarkashi. Overnight stay in Uttarkashi.",
          accommodation: "Hotel in Uttarkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "100 km / 4 hours",
        },
        {
          day: 5,
          title: "Uttarkashi to Gangotri and back to Uttarkashi",
          description:
            "Early morning, drive to Gangotri. Perform puja and darshan at Gangotri Temple. Take a holy dip in the Ganges (weather permitting). Drive back to Uttarkashi. Overnight stay in Uttarkashi.",
          accommodation: "Hotel in Uttarkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "200 km (round trip) / 8-9 hours",
        },
        {
          day: 6,
          title: "Uttarkashi to Guptkashi",
          description:
            "After breakfast, drive to Guptkashi. En route, enjoy the beautiful views of the Himalayas. Check-in to the hotel in Guptkashi. Overnight stay in Guptkashi.",
          accommodation: "Hotel in Guptkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "220 km / 8-9 hours",
        },
        {
          day: 7,
          title: "Guptkashi to Sonprayag to Kedarnath",
          description:
            "Early morning, drive to Sonprayag. From Sonprayag, trek to Kedarnath (16 km). Check-in to the guesthouse. Evening darshan at Kedarnath Temple. Overnight stay in Kedarnath.",
          accommodation: "Guesthouse in Kedarnath",
          meals: "Breakfast, Lunch, Dinner",
          distance: "30 km drive + 16 km trek",
        },
        {
          day: 8,
          title: "Kedarnath to Guptkashi",
          description:
            "Early morning, perform puja and darshan at Kedarnath Temple. Trek back to Sonprayag. Drive to Guptkashi. Overnight stay in Guptkashi.",
          accommodation: "Hotel in Guptkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "16 km trek + 30 km drive",
        },
        {
          day: 9,
          title: "Guptkashi to Badrinath",
          description:
            "After breakfast, drive to Badrinath via Joshimath. En route, visit the confluence of Alaknanda and Bhagirathi rivers at Devprayag. Check-in to the hotel in Badrinath. Evening darshan at Badrinath Temple. Overnight stay in Badrinath.",
          accommodation: "Hotel in Badrinath",
          meals: "Breakfast, Lunch, Dinner",
          distance: "200 km / 8-9 hours",
        },
        {
          day: 10,
          title: "Badrinath",
          description:
            "Early morning, perform puja and darshan at Badrinath Temple. Visit Mana Village, the last Indian village before the Tibet border. Visit Vyas Cave and Ganesh Gufa. Overnight stay in Badrinath.",
          accommodation: "Hotel in Badrinath",
          meals: "Breakfast, Lunch, Dinner",
          distance: "10 km (local sightseeing)",
        },
        {
          day: 11,
          title: "Badrinath to Rudraprayag",
          description:
            "After breakfast, drive to Rudraprayag. En route, visit Karnaprayag and Nandaprayag. Check-in to the hotel in Rudraprayag. Overnight stay in Rudraprayag.",
          accommodation: "Hotel in Rudraprayag",
          meals: "Breakfast, Lunch, Dinner",
          distance: "160 km / 7-8 hours",
        },
        {
          day: 12,
          title: "Rudraprayag to Haridwar",
          description:
            "After breakfast, drive to Haridwar. En route, visit Devprayag. Arrive in Haridwar by evening. Tour ends.",
          accommodation: "N/A",
          meals: "Breakfast, Lunch",
          distance: "140 km / 6-7 hours",
        },
      ],
      faqs: [
        {
          question: "What is the best time to undertake the Char Dham Yatra?",
          answer:
            "The best time for Char Dham Yatra is from May to June and September to October. The temples are typically closed during winter (November to April) due to heavy snowfall and reopen in late April or early May.",
        },
        {
          question: "How physically demanding is this package?",
          answer:
            "This package involves moderate physical activity, including trekking to Yamunotri (12 km round trip) and Kedarnath (32 km round trip). Travelers should be in reasonably good health. For those who cannot trek, pony and palanquin services are available at additional cost.",
        },
        {
          question: "What type of accommodation is provided?",
          answer:
            "We provide comfortable 3-star equivalent hotels and guesthouses on a twin-sharing basis. In Kedarnath, accommodation is basic due to limited options available.",
        },
        {
          question: "Is there an age limit for this package?",
          answer:
            "While there's no strict age limit, we recommend this package for people between 12-70 years who are in good health. For senior citizens or those with health concerns, we suggest our Senior Citizen Char Dham Package which has a more relaxed pace.",
        },
        {
          question: "What should I pack for the journey?",
          answer:
            "Pack warm clothes (even in summer), comfortable walking shoes, personal medications, toiletries, sunscreen, hat, raincoat/umbrella, torch, and a small backpack for day trips. Carry some dry snacks and a water bottle.",
        },
      ],
      upcomingBatches: [
        {
          date: "May 15-26, 2026",
          availability: "8 seats left",
        },
        {
          date: "May 25 - June 5, 2026",
          availability: "12 seats left",
        },
        {
          date: "June 10-21, 2026",
          availability: "15 seats left",
        },
        {
          date: "September 5-16, 2026",
          availability: "Filling Fast",
        },
      ],
      similarPackages: [
        {
          title: "Helicopter Char Dham Package",
          slug: "helicopter-char-dham",
          price: "₹1,85,000",
          image: "/images/char-dham-package-helicopter.png",
        },
        {
          title: "Senior Citizen Char Dham Package",
          slug: "senior-citizen-char-dham",
          price: "₹55,999",
          image: "/images/char-dham-package-senior.png",
        },
        {
          title: "Budget Char Dham Package",
          slug: "budget-char-dham",
          price: "₹35,999",
          image: "/placeholder.svg?height=100&width=100&query=budget char dham package",
        },
      ],
    },
    {
      slug: "helicopter-char-dham",
      title: "Helicopter Char Dham Package",
      subtitle: "Experience the divine Char Dham Yatra with helicopter services",
      description:
        "Complete the sacred Char Dham Yatra in just 6 days with our exclusive Helicopter Package. This premium service allows you to visit all four Dhams - Yamunotri, Gangotri, Kedarnath, and Badrinath - without the physical exertion of trekking or long road journeys. Perfect for those with time constraints, senior citizens, or anyone seeking a comfortable pilgrimage experience.",
      price: "₹1,85,000",
      duration: "6 Days / 5 Nights",
      groupSize: "4-6 people",
      startingPoint: "Dehradun",
      endingPoint: "Dehradun",
      bestTime: "May to June & September to October",
      rating: 5,
      heroImage: "/images/char-dham-package-helicopter.png",
      galleryImages: [
        "/placeholder.svg?height=600&width=800&query=helicopter char dham yatra",
        "/placeholder.svg?height=600&width=800&query=yamunotri temple aerial view",
        "/placeholder.svg?height=600&width=800&query=gangotri temple from helicopter",
        "/placeholder.svg?height=600&width=800&query=kedarnath temple aerial",
        "/placeholder.svg?height=600&width=800&query=badrinath temple from above",
        "/placeholder.svg?height=600&width=800&query=himalayan mountains aerial view",
      ],
      highlights: [
        "Visit all four Dhams in just 6 days",
        "Helicopter services to all four Dhams",
        "Luxury accommodation at all locations",
        "All meals included (vegetarian)",
        "VIP darshan arrangements",
        "Personal guide and assistance",
        "No trekking required",
      ],
      inclusions: [
        "5 nights accommodation in luxury hotels (twin sharing basis)",
        "All meals (breakfast, lunch, and dinner) - pure vegetarian",
        "Helicopter transfers to all four Dhams",
        "Ground transportation in luxury vehicles",
        "VIP darshan arrangements where possible",
        "Personal guide throughout the journey",
        "All applicable taxes",
        "Bottled water and refreshments",
        "Basic medical kit",
        "All necessary permits",
      ],
      exclusions: [
        "Personal expenses and tips",
        "Special puja arrangements",
        "Travel insurance",
        "Any item not mentioned in inclusions",
        "Additional accommodation due to bad weather or flight cancellations",
        "Excess baggage charges",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Dehradun",
          description:
            "Arrive in Dehradun and check-in to the luxury hotel. Briefing about the journey and helicopter safety instructions. Overnight stay in Dehradun.",
          accommodation: "Luxury Hotel in Dehradun",
          meals: "Dinner",
          distance: "N/A",
        },
        {
          day: 2,
          title: "Dehradun to Yamunotri to Harsil",
          description:
            "After breakfast, board the helicopter to Yamunotri. Short trek or pony ride to Yamunotri Temple. Perform darshan and rituals. Return by helicopter and fly to Harsil. Overnight stay in Harsil.",
          accommodation: "Luxury Hotel in Harsil",
          meals: "Breakfast, Lunch, Dinner",
          distance: "Helicopter journey",
        },
        {
          day: 3,
          title: "Harsil to Gangotri to Guptkashi",
          description:
            "After breakfast, short drive to Gangotri. Perform darshan and rituals at Gangotri Temple. Return to Harsil and board helicopter to Guptkashi. Overnight stay in Guptkashi.",
          accommodation: "Luxury Hotel in Guptkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "Helicopter journey + 25 km drive",
        },
        {
          day: 4,
          title: "Guptkashi to Kedarnath to Badrinath",
          description:
            "Early morning, board helicopter to Kedarnath. Perform darshan and rituals at Kedarnath Temple. Return by helicopter and fly to Badrinath. Evening darshan at Badrinath Temple. Overnight stay in Badrinath.",
          accommodation: "Luxury Hotel in Badrinath",
          meals: "Breakfast, Lunch, Dinner",
          distance: "Helicopter journey",
        },
        {
          day: 5,
          title: "Badrinath to Dehradun",
          description:
            "Morning visit to Mana Village, the last Indian village before Tibet border. Visit Vyas Cave and Ganesh Gufa. After lunch, board helicopter to Dehradun. Overnight stay in Dehradun.",
          accommodation: "Luxury Hotel in Dehradun",
          meals: "Breakfast, Lunch, Dinner",
          distance: "Helicopter journey + 5 km local sightseeing",
        },
        {
          day: 6,
          title: "Departure from Dehradun",
          description: "After breakfast, check-out from the hotel. Transfer to airport/railway station. Tour ends.",
          accommodation: "N/A",
          meals: "Breakfast",
          distance: "N/A",
        },
      ],
      faqs: [
        {
          question: "Is the helicopter journey safe?",
          answer:
            "Yes, we use well-maintained helicopters operated by experienced pilots. All safety protocols are strictly followed. However, helicopter services are subject to weather conditions.",
        },
        {
          question: "What happens if helicopter services are cancelled due to bad weather?",
          answer:
            "In case of cancellation due to weather, we arrange for the best possible alternative, which may include road transport or rescheduling the helicopter journey for the next day. Any additional costs for accommodation will be borne by the guests.",
        },
        {
          question: "How much luggage can I carry on the helicopter?",
          answer:
            "Luggage is restricted to 5 kg per person due to weight limitations on helicopters. We recommend packing light and carrying only essentials.",
        },
        {
          question: "Is this package suitable for senior citizens?",
          answer:
            "Yes, this package is ideal for senior citizens as it eliminates the need for long road journeys and trekking. However, guests should be aware that some of the destinations are at high altitudes.",
        },
        {
          question: "What is the cancellation policy for this package?",
          answer:
            "For cancellations 30 days or more before departure, 70% refund is provided. For cancellations 15-29 days before departure, 50% refund is provided. No refund for cancellations less than 15 days before departure.",
        },
      ],
      upcomingBatches: [
        {
          date: "May 10-15, 2026",
          availability: "4 seats left",
        },
        {
          date: "May 20-25, 2026",
          availability: "6 seats left",
        },
        {
          date: "June 5-10, 2026",
          availability: "Filling Fast",
        },
        {
          date: "September 15-20, 2026",
          availability: "Available",
        },
      ],
      similarPackages: [
        {
          title: "Standard Char Dham Package",
          slug: "standard-char-dham",
          price: "₹45,999",
          image: "/images/char-dham-package-custom.png",
        },
        {
          title: "Senior Citizen Char Dham Package",
          slug: "senior-citizen-char-dham",
          price: "₹55,999",
          image: "/images/char-dham-package-senior.png",
        },
        {
          title: "Premium Char Dham Package",
          slug: "premium-char-dham",
          price: "₹75,999",
          image: "/placeholder.svg?height=100&width=100&query=premium char dham package",
        },
      ],
    },
    {
      slug: "senior-citizen-char-dham",
      title: "Senior Citizen Char Dham Package",
      subtitle: "Specially designed Char Dham Yatra for senior citizens with extra care",
      description:
        "Our Senior Citizen Char Dham Package is thoughtfully designed for elderly pilgrims, with a relaxed pace, extra rest days, and special medical assistance throughout the journey. Experience the divine Char Dham Yatra with comfort, care, and spiritual fulfillment.",
      price: "₹55,999",
      duration: "14 Days / 13 Nights",
      groupSize: "8-10 people",
      startingPoint: "Haridwar",
      endingPoint: "Haridwar",
      bestTime: "May to June & September to October",
      rating: 5,
      heroImage: "/images/char-dham-package-senior.png",
      galleryImages: [
        "/placeholder.svg?height=600&width=800&query=senior citizens char dham yatra",
        "/placeholder.svg?height=600&width=800&query=yamunotri temple elderly pilgrims",
        "/placeholder.svg?height=600&width=800&query=gangotri temple senior pilgrims",
        "/placeholder.svg?height=600&width=800&query=kedarnath temple elderly visitors",
        "/placeholder.svg?height=600&width=800&query=badrinath temple senior citizens",
        "/placeholder.svg?height=600&width=800&query=comfortable accommodation char dham",
      ],
      highlights: [
        "Slower-paced itinerary with more rest days",
        "Medical assistance throughout the journey",
        "Comfortable accommodation with accessibility features",
        "All meals included (special diet options available)",
        "Porter services for luggage",
        "Oxygen cylinders and first aid available 24/7",
        "Smaller group size for personalized attention",
      ],
      inclusions: [
        "13 nights accommodation in comfortable hotels/guesthouses (twin sharing basis)",
        "All meals (breakfast, lunch, and dinner) - pure vegetarian with special diet options",
        "All transfers and sightseeing by AC vehicle with easy boarding steps",
        "Experienced tour guide throughout the journey",
        "Medical assistant and basic health check-ups",
        "Porter services for luggage",
        "Oxygen cylinders and first aid kit",
        "All applicable taxes",
        "Bottled water during travel",
        "All necessary permits",
        "Assistance for temple rituals",
      ],
      exclusions: [
        "Personal expenses and tips",
        "Special puja arrangements",
        "Travel insurance",
        "Helicopter tickets (if opted)",
        "Any item not mentioned in inclusions",
        "Additional accommodation due to bad weather or roadblocks",
        "Special medical requirements beyond basic first aid",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Haridwar",
          description:
            "Arrive in Haridwar and check-in to the hotel. Rest and acclimatization. Attend the evening Ganga Aarti at Har Ki Pauri (optional). Overnight stay in Haridwar.",
          accommodation: "Comfortable Hotel in Haridwar",
          meals: "Dinner",
          distance: "N/A",
        },
        {
          day: 2,
          title: "Haridwar (Rest Day)",
          description:
            "Full day for rest and acclimatization in Haridwar. Visit local temples and ghats at a leisurely pace. Health check-up by our medical assistant. Overnight stay in Haridwar.",
          accommodation: "Comfortable Hotel in Haridwar",
          meals: "Breakfast, Lunch, Dinner",
          distance: "Local sightseeing",
        },
        {
          day: 3,
          title: "Haridwar to Barkot",
          description:
            "After breakfast, drive to Barkot. En route, visit Kempty Falls in Mussoorie. Check-in to the hotel in Barkot. Overnight stay in Barkot.",
          accommodation: "Comfortable Hotel in Barkot",
          meals: "Breakfast, Lunch, Dinner",
          distance: "200 km / 7-8 hours with breaks",
        },
        {
          day: 4,
          title: "Barkot (Rest Day)",
          description:
            "Full day for rest and acclimatization in Barkot. Short orientation walk around the area. Preparation for Yamunotri visit. Overnight stay in Barkot.",
          accommodation: "Comfortable Hotel in Barkot",
          meals: "Breakfast, Lunch, Dinner",
          distance: "Local sightseeing",
        },
        {
          day: 5,
          title: "Barkot to Yamunotri and back to Barkot",
          description:
            "Early morning, drive to Janki Chatti. Option for pony/palanquin ride to Yamunotri Temple (at additional cost). Perform puja and darshan at Yamunotri Temple. Return to Janki Chatti and drive back to Barkot. Overnight stay in Barkot.",
          accommodation: "Comfortable Hotel in Barkot",
          meals: "Breakfast, Lunch, Dinner",
          distance: "50 km drive + optional trek/pony ride",
        },
        {
          day: 6,
          title: "Barkot to Uttarkashi",
          description:
            "After breakfast, drive to Uttarkashi at a leisurely pace with frequent breaks. Visit Vishwanath Temple in Uttarkashi. Overnight stay in Uttarkashi.",
          accommodation: "Comfortable Hotel in Uttarkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "100 km / 4-5 hours with breaks",
        },
        {
          day: 7,
          title: "Uttarkashi to Gangotri and back to Uttarkashi",
          description:
            "Early morning, drive to Gangotri. Perform puja and darshan at Gangotri Temple. Take a holy dip in the Ganges (weather permitting). Drive back to Uttarkashi. Overnight stay in Uttarkashi.",
          accommodation: "Comfortable Hotel in Uttarkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "200 km (round trip) / 8-9 hours with breaks",
        },
        {
          day: 8,
          title: "Uttarkashi (Rest Day)",
          description:
            "Full day for rest in Uttarkashi. Visit local temples and markets at a leisurely pace. Health check-up by our medical assistant. Overnight stay in Uttarkashi.",
          accommodation: "Comfortable Hotel in Uttarkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "Local sightseeing",
        },
        {
          day: 9,
          title: "Uttarkashi to Guptkashi",
          description:
            "After breakfast, drive to Guptkashi at a leisurely pace with frequent breaks. En route, enjoy the beautiful views of the Himalayas. Check-in to the hotel in Guptkashi. Overnight stay in Guptkashi.",
          accommodation: "Comfortable Hotel in Guptkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "220 km / 8-9 hours with breaks",
        },
        {
          day: 10,
          title: "Guptkashi (Rest Day)",
          description:
            "Full day for rest and acclimatization in Guptkashi. Visit Kashi Vishwanath Temple and Ardhanarishwar Temple. Preparation for Kedarnath visit. Overnight stay in Guptkashi.",
          accommodation: "Comfortable Hotel in Guptkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "Local sightseeing",
        },
        {
          day: 11,
          title: "Guptkashi to Sonprayag to Kedarnath",
          description:
            "Early morning, drive to Sonprayag. From Sonprayag, option for helicopter to Kedarnath (at additional cost) or pony/palanquin ride. Check-in to the guesthouse. Evening darshan at Kedarnath Temple. Overnight stay in Kedarnath.",
          accommodation: "Basic Guesthouse in Kedarnath",
          meals: "Breakfast, Lunch, Dinner",
          distance: "30 km drive + helicopter/pony option",
        },
        {
          day: 12,
          title: "Kedarnath to Guptkashi",
          description:
            "Early morning, perform puja and darshan at Kedarnath Temple. Return to Sonprayag by helicopter/pony/palanquin. Drive to Guptkashi. Overnight stay in Guptkashi.",
          accommodation: "Comfortable Hotel in Guptkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "Helicopter/pony option + 30 km drive",
        },
        {
          day: 13,
          title: "Guptkashi to Badrinath",
          description:
            "After breakfast, drive to Badrinath at a leisurely pace with frequent breaks. En route, visit the confluence of Alaknanda and Bhagirathi rivers at Devprayag. Check-in to the hotel in Badrinath. Evening darshan at Badrinath Temple. Overnight stay in Badrinath.",
          accommodation: "Comfortable Hotel in Badrinath",
          meals: "Breakfast, Lunch, Dinner",
          distance: "200 km / 8-9 hours with breaks",
        },
        {
          day: 14,
          title: "Badrinath to Haridwar",
          description:
            "After breakfast and morning darshan, drive to Haridwar. En route, visit Joshimath and Devprayag. Arrive in Haridwar by evening. Tour ends.",
          accommodation: "N/A",
          meals: "Breakfast, Lunch",
          distance: "300 km / 10-11 hours with breaks",
        },
      ],
      faqs: [
        {
          question: "Is this package suitable for people with health conditions?",
          answer:
            "This package is designed for senior citizens and those who prefer a relaxed pace. However, individuals with serious health conditions like severe heart problems or respiratory issues should consult their doctor before booking. We have a medical assistant throughout the journey, but facilities in remote areas are limited.",
        },
        {
          question: "Do I need to trek for this package?",
          answer:
            "The package is designed to minimize trekking. For Yamunotri and Kedarnath, where trekking is normally required, we offer options for pony/palanquin rides or helicopter services (at additional cost). Our team will assist you throughout.",
        },
        {
          question: "What type of accommodation is provided?",
          answer:
            "We provide comfortable hotels and guesthouses with accessibility features where possible. In Kedarnath, accommodation is basic due to limited options available, but we ensure the best possible comfort.",
        },
        {
          question: "What medical facilities are available during the journey?",
          answer:
            "A trained medical assistant travels with the group throughout the journey. We carry oxygen cylinders, first aid kits, and basic medications. Regular health check-ups are conducted, especially during acclimatization days.",
        },
        {
          question: "Can special dietary requirements be accommodated?",
          answer:
            "Yes, we can accommodate special dietary requirements such as diabetic-friendly meals, low-salt options, or soft food. Please inform us of your requirements at the time of booking.",
        },
      ],
      upcomingBatches: [
        {
          date: "May 5-18, 2026",
          availability: "6 seats left",
        },
        {
          date: "May 20 - June 2, 2026",
          availability: "8 seats left",
        },
        {
          date: "September 10-23, 2026",
          availability: "Available",
        },
        {
          date: "September 25 - October 8, 2026",
          availability: "Available",
        },
      ],
      similarPackages: [
        {
          title: "Standard Char Dham Package",
          slug: "standard-char-dham",
          price: "₹45,999",
          image: "/images/char-dham-package-custom.png",
        },
        {
          title: "Helicopter Char Dham Package",
          slug: "helicopter-char-dham",
          price: "₹1,85,000",
          image: "/images/char-dham-package-helicopter.png",
        },
        {
          title: "Do Dham Yatra Package",
          slug: "do-dham-yatra",
          price: "₹28,999",
          image: "/placeholder.svg?height=100&width=100&query=do dham yatra package",
        },
      ],
    },
    {
      slug: "do-dham-yatra",
      title: "Do Dham Yatra Package",
      subtitle: "Visit Kedarnath and Badrinath in a shorter duration",
      description:
        "Experience the divine journey to Kedarnath and Badrinath with our Do Dham Yatra Package. This package is perfect for those with time constraints who still wish to seek the blessings of Lord Shiva at Kedarnath and Lord Vishnu at Badrinath. The carefully crafted itinerary ensures you have adequate time for darshan and spiritual activities at both sacred sites.",
      price: "₹28,999",
      duration: "7 Days / 6 Nights",
      groupSize: "10-15 people",
      startingPoint: "Haridwar",
      endingPoint: "Haridwar",
      bestTime: "May to June & September to October",
      rating: 4,
      heroImage: "/placeholder.svg?height=800&width=1200&query=kedarnath badrinath temples mountains pilgrimage",
      galleryImages: [
        "/placeholder.svg?height=600&width=800&query=kedarnath temple front view",
        "/placeholder.svg?height=600&width=800&query=badrinath temple colorful",
        "/placeholder.svg?height=600&width=800&query=kedarnath trek path pilgrims",
        "/placeholder.svg?height=600&width=800&query=badrinath valley view",
        "/placeholder.svg?height=600&width=800&query=char dham pilgrims praying",
        "/placeholder.svg?height=600&width=800&query=uttarakhand mountains scenic",
      ],
      highlights: [
        "Visit the sacred temples of Kedarnath and Badrinath",
        "Comfortable accommodation throughout the journey",
        "All meals included (vegetarian)",
        "Experienced guide and support staff",
        "Transportation in AC vehicle",
        "Assistance for temple rituals and pujas",
        "Perfect for those with time constraints",
      ],
      inclusions: [
        "6 nights accommodation in hotels/guesthouses (twin sharing basis)",
        "All meals (breakfast, lunch, and dinner) - pure vegetarian",
        "All transfers and sightseeing by AC vehicle",
        "Experienced tour guide throughout the journey",
        "All applicable taxes",
        "Bottled water during travel",
        "Basic medical kit",
        "All necessary permits",
        "Assistance for temple rituals",
      ],
      exclusions: [
        "Personal expenses and tips",
        "Special puja arrangements",
        "Travel insurance",
        "Helicopter tickets (if opted)",
        "Any item not mentioned in inclusions",
        "Additional accommodation due to bad weather or roadblocks",
        "Porter/mule charges for personal luggage",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Haridwar",
          description:
            "Arrive in Haridwar and check-in to the hotel. Attend the evening Ganga Aarti at Har Ki Pauri. Overnight stay in Haridwar.",
          accommodation: "Hotel in Haridwar",
          meals: "Dinner",
          distance: "N/A",
        },
        {
          day: 2,
          title: "Haridwar to Guptkashi",
          description:
            "After breakfast, drive to Guptkashi. En route, enjoy the beautiful views of the Himalayas and visit Devprayag, the confluence of Alaknanda and Bhagirathi rivers. Check-in to the hotel in Guptkashi. Overnight stay in Guptkashi.",
          accommodation: "Hotel in Guptkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "220 km / 8-9 hours",
        },
        {
          day: 3,
          title: "Guptkashi to Sonprayag to Kedarnath",
          description:
            "Early morning, drive to Sonprayag. From Sonprayag, trek to Kedarnath (16 km). Check-in to the guesthouse. Evening darshan at Kedarnath Temple. Overnight stay in Kedarnath.",
          accommodation: "Guesthouse in Kedarnath",
          meals: "Breakfast, Lunch, Dinner",
          distance: "30 km drive + 16 km trek",
        },
        {
          day: 4,
          title: "Kedarnath to Guptkashi",
          description:
            "Early morning, perform puja and darshan at Kedarnath Temple. Trek back to Sonprayag. Drive to Guptkashi. Overnight stay in Guptkashi.",
          accommodation: "Hotel in Guptkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "16 km trek + 30 km drive",
        },
        {
          day: 5,
          title: "Guptkashi to Badrinath",
          description:
            "After breakfast, drive to Badrinath via Joshimath. En route, visit Karnaprayag and Nandaprayag. Check-in to the hotel in Badrinath. Evening darshan at Badrinath Temple. Overnight stay in Badrinath.",
          accommodation: "Hotel in Badrinath",
          meals: "Breakfast, Lunch, Dinner",
          distance: "200 km / 8-9 hours",
        },
        {
          day: 6,
          title: "Badrinath to Rudraprayag",
          description:
            "Early morning, perform puja and darshan at Badrinath Temple. Visit Mana Village, the last Indian village before the Tibet border. Visit Vyas Cave and Ganesh Gufa. Drive to Rudraprayag. Overnight stay in Rudraprayag.",
          accommodation: "Hotel in Rudraprayag",
          meals: "Breakfast, Lunch, Dinner",
          distance: "160 km / 7-8 hours",
        },
        {
          day: 7,
          title: "Rudraprayag to Haridwar",
          description:
            "After breakfast, drive to Haridwar. En route, visit Devprayag. Arrive in Haridwar by evening. Tour ends.",
          accommodation: "N/A",
          meals: "Breakfast, Lunch",
          distance: "140 km / 5-6 hours",
        },
      ],
      faqs: [
        {
          question: "Why choose the Do Dham Package instead of the complete Char Dham Yatra?",
          answer:
            "The Do Dham Package is ideal for those with time constraints or those who wish to focus specifically on Kedarnath and Badrinath, which are considered the most significant of the four Dhams. It allows you to complete the pilgrimage in just 7 days compared to 12-14 days for the complete Char Dham Yatra.",
        },
        {
          question: "How physically demanding is the trek to Kedarnath?",
          answer:
            "The trek to Kedarnath is moderately difficult, covering 16 km with a gradual ascent. It takes approximately 6-8 hours to complete. For those who cannot trek, pony and palanquin services are available at an additional cost. Helicopter services are also available (subject to weather conditions).",
        },
        {
          question: "Is there an option to visit Yamunotri and Gangotri later?",
          answer:
            "Yes, you can opt for our Yamunotri-Gangotri package separately at a later date to complete your Char Dham Yatra. Many pilgrims choose to split their Char Dham Yatra into two separate journeys.",
        },
        {
          question: "What type of accommodation is provided?",
          answer:
            "We provide comfortable 3-star equivalent hotels and guesthouses on a twin-sharing basis. In Kedarnath, accommodation is basic due to limited options available.",
        },
        {
          question: "What is the best time to undertake the Do Dham Yatra?",
          answer:
            "The best time is from May to June and September to October. The temples are typically closed during winter (November to April) due to heavy snowfall and reopen in late April or early May.",
        },
      ],
      upcomingBatches: [
        {
          date: "May 10-16, 2026",
          availability: "10 seats left",
        },
        {
          date: "May 25-31, 2026",
          availability: "12 seats left",
        },
        {
          date: "June 15-21, 2026",
          availability: "Available",
        },
        {
          date: "September 10-16, 2026",
          availability: "Available",
        },
      ],
      similarPackages: [
        {
          title: "Standard Char Dham Package",
          slug: "standard-char-dham",
          price: "₹45,999",
          image: "/images/char-dham-package-custom.png",
        },
        {
          title: "Helicopter Char Dham Package",
          slug: "helicopter-char-dham",
          price: "₹1,85,000",
          image: "/images/char-dham-package-helicopter.png",
        },
        {
          title: "Senior Citizen Char Dham Package",
          slug: "senior-citizen-char-dham",
          price: "₹55,999",
          image: "/images/char-dham-package-senior.png",
        },
      ],
    },
    {
      slug: "budget-char-dham",
      title: "Budget Char Dham Package",
      subtitle: "Affordable Char Dham Yatra without compromising on the spiritual experience",
      description:
        "Our Budget Char Dham Package offers an economical way to complete the sacred pilgrimage to all four Dhams - Yamunotri, Gangotri, Kedarnath, and Badrinath. While keeping costs low, we ensure you have a fulfilling spiritual experience with adequate time for darshan at all the holy sites.",
      price: "₹35,999",
      duration: "11 Days / 10 Nights",
      groupSize: "15-20 people",
      startingPoint: "Haridwar",
      endingPoint: "Haridwar",
      bestTime: "May to June & September to October",
      rating: 4,
      heroImage: "/placeholder.svg?height=800&width=1200&query=budget char dham yatra pilgrimage mountains",
      galleryImages: [
        "/placeholder.svg?height=600&width=800&query=yamunotri temple pilgrims",
        "/placeholder.svg?height=600&width=800&query=gangotri temple view",
        "/placeholder.svg?height=600&width=800&query=kedarnath temple snow mountains",
        "/placeholder.svg?height=600&width=800&query=badrinath temple colorful flags",
        "/placeholder.svg?height=600&width=800&query=char dham pilgrims group",
        "/placeholder.svg?height=600&width=800&query=uttarakhand mountains rivers",
      ],
      highlights: [
        "Visit all four sacred Dhams at an affordable price",
        "Standard accommodation throughout the journey",
        "All meals included (vegetarian)",
        "Shared transportation in non-AC vehicles",
        "Experienced guide for the group",
        "Basic assistance for temple rituals",
        "Perfect for budget-conscious pilgrims",
      ],
      inclusions: [
        "10 nights accommodation in standard hotels/guesthouses (twin/triple sharing basis)",
        "All meals (breakfast, lunch, and dinner) - pure vegetarian",
        "All transfers and sightseeing by non-AC vehicle",
        "Experienced tour guide for the group",
        "All applicable taxes",
        "Basic medical kit",
        "All necessary permits",
      ],
      exclusions: [
        "Personal expenses and tips",
        "Special puja arrangements",
        "Travel insurance",
        "Helicopter tickets (if opted)",
        "Any item not mentioned in inclusions",
        "Additional accommodation due to bad weather or roadblocks",
        "Porter/mule charges for personal luggage",
        "Bottled water (common filtered water will be provided)",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Haridwar",
          description:
            "Arrive in Haridwar and check-in to the hotel. Attend the evening Ganga Aarti at Har Ki Pauri. Overnight stay in Haridwar.",
          accommodation: "Standard Hotel in Haridwar",
          meals: "Dinner",
          distance: "N/A",
        },
        {
          day: 2,
          title: "Haridwar to Barkot",
          description:
            "After breakfast, drive to Barkot. En route, visit Kempty Falls in Mussoorie. Check-in to the hotel in Barkot. Overnight stay in Barkot.",
          accommodation: "Standard Hotel in Barkot",
          meals: "Breakfast, Lunch, Dinner",
          distance: "200 km / 7-8 hours",
        },
        {
          day: 3,
          title: "Barkot to Yamunotri and back to Barkot",
          description:
            "Early morning, drive to Janki Chatti. Trek from Janki Chatti to Yamunotri (6 km). Perform puja and darshan at Yamunotri Temple. Return to Janki Chatti and drive back to Barkot. Overnight stay in Barkot.",
          accommodation: "Standard Hotel in Barkot",
          meals: "Breakfast, Lunch, Dinner",
          distance: "50 km drive + 12 km trek (round trip)",
        },
        {
          day: 4,
          title: "Barkot to Uttarkashi",
          description:
            "After breakfast, drive to Uttarkashi. Visit Vishwanath Temple in Uttarkashi. Overnight stay in Uttarkashi.",
          accommodation: "Standard Hotel in Uttarkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "100 km / 4 hours",
        },
        {
          day: 5,
          title: "Uttarkashi to Gangotri and back to Uttarkashi",
          description:
            "Early morning, drive to Gangotri. Perform puja and darshan at Gangotri Temple. Take a holy dip in the Ganges (weather permitting). Drive back to Uttarkashi. Overnight stay in Uttarkashi.",
          accommodation: "Standard Hotel in Uttarkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "200 km (round trip) / 8-9 hours",
        },
        {
          day: 6,
          title: "Uttarkashi to Guptkashi",
          description:
            "After breakfast, drive to Guptkashi. En route, enjoy the beautiful views of the Himalayas. Check-in to the hotel in Guptkashi. Overnight stay in Guptkashi.",
          accommodation: "Standard Hotel in Guptkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "220 km / 8-9 hours",
        },
        {
          day: 7,
          title: "Guptkashi to Sonprayag to Kedarnath",
          description:
            "Early morning, drive to Sonprayag. From Sonprayag, trek to Kedarnath (16 km). Check-in to the guesthouse. Evening darshan at Kedarnath Temple. Overnight stay in Kedarnath.",
          accommodation: "Basic Guesthouse in Kedarnath",
          meals: "Breakfast, Lunch, Dinner",
          distance: "30 km drive + 16 km trek",
        },
        {
          day: 8,
          title: "Kedarnath to Guptkashi",
          description:
            "Early morning, perform puja and darshan at Kedarnath Temple. Trek back to Sonprayag. Drive to Guptkashi. Overnight stay in Guptkashi.",
          accommodation: "Standard Hotel in Guptkashi",
          meals: "Breakfast, Lunch, Dinner",
          distance: "16 km trek + 30 km drive",
        },
        {
          day: 9,
          title: "Guptkashi to Badrinath",
          description:
            "After breakfast, drive to Badrinath via Joshimath. En route, visit the confluence of Alaknanda and Bhagirathi rivers at Devprayag. Check-in to the hotel in Badrinath. Evening darshan at Badrinath Temple. Overnight stay in Badrinath.",
          accommodation: "Standard Hotel in Badrinath",
          meals: "Breakfast, Lunch, Dinner",
          distance: "200 km / 8-9 hours",
        },
        {
          day: 10,
          title: "Badrinath to Rudraprayag",
          description:
            "Early morning, perform puja and darshan at Badrinath Temple. Visit Mana Village, the last Indian village before the Tibet border. Drive to Rudraprayag. Overnight stay in Rudraprayag.",
          accommodation: "Standard Hotel in Rudraprayag",
          meals: "Breakfast, Lunch, Dinner",
          distance: "160 km / 7-8 hours",
        },
        {
          day: 11,
          title: "Rudraprayag to Haridwar",
          description:
            "After breakfast, drive to Haridwar. En route, visit Devprayag. Arrive in Haridwar by evening. Tour ends.",
          accommodation: "N/A",
          meals: "Breakfast, Lunch",
          distance: "140 km / 5-6 hours",
        },
      ],
      faqs: [
        {
          question: "How is this package different from the Standard Char Dham Package?",
          answer:
            "The Budget Char Dham Package offers the same spiritual experience but with more economical accommodations, non-AC transportation, and larger group sizes to keep costs low. The itinerary is also slightly shorter (11 days instead of 12).",
        },
        {
          question: "What type of accommodation is provided?",
          answer:
            "We provide standard hotels and guesthouses with basic amenities on a twin or triple sharing basis. In Kedarnath, accommodation is very basic due to limited options available.",
        },
        {
          question: "Is food quality compromised in this package?",
          answer:
            "No, we serve fresh, hygienic, and pure vegetarian meals throughout the journey. The menu might be simpler compared to premium packages, but quality and nutrition are never compromised.",
        },
        {
          question: "How many people will be in the group?",
          answer:
            "The group size is typically 15-20 people, which helps us keep costs low while ensuring everyone receives proper attention and guidance.",
        },
        {
          question: "Is this package suitable for senior citizens?",
          answer:
            "While seniors can join this package, we recommend our Senior Citizen Char Dham Package for elderly pilgrims as it offers more comfort, medical support, and a relaxed pace suitable for their needs.",
        },
      ],
      upcomingBatches: [
        {
          date: "May 12-22, 2026",
          availability: "15 seats left",
        },
        {
          date: "May 25 - June 4, 2026",
          availability: "18 seats left",
        },
        {
          date: "June 10-20, 2026",
          availability: "Available",
        },
        {
          date: "September 5-15, 2026",
          availability: "Available",
        },
      ],
      similarPackages: [
        {
          title: "Standard Char Dham Package",
          slug: "standard-char-dham",
          price: "₹45,999",
          image: "/images/char-dham-package-custom.png",
        },
        {
          title: "Do Dham Yatra Package",
          slug: "do-dham-yatra",
          price: "₹28,999",
          image: "/placeholder.svg?height=100&width=100&query=do dham yatra package",
        },
        {
          title: "Senior Citizen Char Dham Package",
          slug: "senior-citizen-char-dham",
          price: "₹55,999",
          image: "/images/char-dham-package-senior.png",
        },
      ],
    },
  ]

  return packages.find((pkg) => pkg.slug === slug)
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, CheckCircle, Clock, MapPin, Users } from "lucide-react"

export default function CharDhamPackagesPage() {
  const packages = [
    {
      id: "standard-char-dham",
      title: "Standard Char Dham Package",
      description: "Complete Char Dham Yatra by road with comfortable accommodations and experienced guides.",
      price: "₹45,999",
      duration: "12 Days / 11 Nights",
      groupSize: "10-15 people",
      startingPoint: "Haridwar",
      image: "/images/char-dham-package-custom.png",
      highlights: [
        "Visit all four Dhams: Yamunotri, Gangotri, Kedarnath, and Badrinath",
        "Comfortable accommodation throughout the journey",
        "All meals included (vegetarian)",
        "Experienced guide and support staff",
        "Transportation in AC vehicle",
      ],
      featured: true,
      popular: true,
    },
    {
      id: "helicopter-char-dham",
      title: "Helicopter Char Dham Package",
      description: "Experience the divine Char Dham Yatra with helicopter services to save time and avoid trekking.",
      price: "₹1,85,000",
      duration: "6 Days / 5 Nights",
      groupSize: "4-6 people",
      startingPoint: "Dehradun",
      image: "/images/char-dham-package-helicopter.png",
      highlights: [
        "Helicopter services to all four Dhams",
        "Luxury accommodation at all locations",
        "All meals included (vegetarian)",
        "VIP darshan arrangements",
        "Personal guide and assistance",
      ],
      featured: true,
      popular: false,
    },
    {
      id: "senior-citizen-char-dham",
      title: "Senior Citizen Char Dham Package",
      description: "Specially designed Char Dham Yatra package for senior citizens with extra care and assistance.",
      price: "₹55,999",
      duration: "14 Days / 13 Nights",
      groupSize: "8-10 people",
      startingPoint: "Haridwar",
      image: "/images/char-dham-package-senior.png",
      highlights: [
        "Slower-paced itinerary with more rest days",
        "Medical assistance throughout the journey",
        "Comfortable accommodation with accessibility features",
        "All meals included (special diet options available)",
        "Porter services for luggage",
      ],
      featured: true,
      popular: false,
    },
    {
      id: "budget-char-dham",
      title: "Budget Char Dham Package",
      description: "Affordable Char Dham Yatra package without compromising on the spiritual experience.",
      price: "₹35,999",
      duration: "11 Days / 10 Nights",
      groupSize: "15-20 people",
      startingPoint: "Haridwar",
      image: "/placeholder.svg?height=400&width=600&query=budget char dham package pilgrimage mountains",
      highlights: [
        "Visit all four Dhams",
        "Standard accommodation",
        "All meals included (vegetarian)",
        "Shared transportation",
        "Group guide service",
      ],
      featured: false,
      popular: true,
    },
    {
      id: "premium-char-dham",
      title: "Premium Char Dham Package",
      description: "Luxury Char Dham Yatra with premium accommodations and personalized services.",
      price: "₹75,999",
      duration: "12 Days / 11 Nights",
      groupSize: "6-8 people",
      startingPoint: "Dehradun",
      image: "/placeholder.svg?height=400&width=600&query=premium luxury char dham package pilgrimage",
      highlights: [
        "Premium accommodations throughout the journey",
        "Gourmet vegetarian meals",
        "Private transportation in luxury vehicle",
        "Personal guide and assistant",
        "VIP darshan arrangements where possible",
      ],
      featured: false,
      popular: true,
    },
    {
      id: "do-dham-yatra",
      title: "Do Dham Yatra Package",
      description: "Visit Kedarnath and Badrinath in a shorter duration for those with time constraints.",
      price: "₹28,999",
      duration: "7 Days / 6 Nights",
      groupSize: "10-15 people",
      startingPoint: "Haridwar",
      image: "/placeholder.svg?height=400&width=600&query=kedarnath badrinath do dham yatra package",
      highlights: [
        "Visit Kedarnath and Badrinath",
        "Comfortable accommodation",
        "All meals included (vegetarian)",
        "Transportation in AC vehicle",
        "Experienced guide",
      ],
      featured: false,
      popular: false,
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/placeholder.svg?height=800&width=1600&query=char dham yatra packages mountains temples pilgrimage"
          alt="Char Dham Packages"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Char Dham Yatra Packages</h1>
          <p className="text-lg md:text-xl mb-8">
            Choose from our carefully curated packages for a divine and comfortable Char Dham pilgrimage
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="#featured-packages">View Packages</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Find Your Perfect Char Dham Journey</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our Char Dham packages are designed to provide a seamless and spiritually fulfilling experience. Whether
            you're looking for a budget-friendly option, a luxury experience, or a package tailored for senior citizens,
            we have something for everyone. Each package includes accommodation, transportation, meals, and experienced
            guides to ensure a comfortable and meaningful pilgrimage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertly Planned</h3>
              <p className="text-gray-600 text-center">
                Itineraries designed by experts with years of experience in Char Dham pilgrimages
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
              <p className="text-gray-600 text-center">
                Dedicated support team to assist you throughout your spiritual journey
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Coverage</h3>
              <p className="text-gray-600 text-center">
                Visit all sacred sites with proper time for darshan and spiritual activities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section id="featured-packages" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Featured Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our most popular Char Dham Yatra packages, carefully designed to provide a memorable and spiritually
              enriching experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages
              .filter((pkg) => pkg.featured)
              .map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                    {pkg.popular && <Badge className="absolute top-2 right-2 bg-orange-600">Popular</Badge>}
                  </div>
                  <CardHeader>
                    <CardTitle>{pkg.title}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-2xl font-bold text-orange-600">{pkg.price}</p>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <Users className="w-4 h-4 mr-2 text-gray-500 mt-1" />
                        <span className="text-sm text-gray-600">{pkg.groupSize}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 text-gray-500 mt-1" />
                        <span className="text-sm text-gray-600">Starting from: {pkg.startingPoint}</span>
                      </div>
                      <div className="flex items-start">
                        <CalendarIcon className="w-4 h-4 mr-2 text-gray-500 mt-1" />
                        <span className="text-sm text-gray-600">Available year-round</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Highlights:</h4>
                      <ul className="space-y-1">
                        {pkg.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button asChild variant="outline">
                      <Link href={`/char-dham-yatra/packages/${pkg.id}`}>View Details</Link>
                    </Button>
                    <Button asChild className="bg-orange-600 hover:bg-orange-700">
                      <Link href={`/char-dham-yatra/packages/${pkg.id}#booking`}>Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Packages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">All Char Dham Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our complete range of Char Dham Yatra packages to find the perfect match for your spiritual journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages
              .filter((pkg) => !pkg.featured)
              .map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                    {pkg.popular && <Badge className="absolute top-2 right-2 bg-orange-600">Popular</Badge>}
                  </div>
                  <CardHeader>
                    <CardTitle>{pkg.title}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-2xl font-bold text-orange-600">{pkg.price}</p>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <Users className="w-4 h-4 mr-2 text-gray-500 mt-1" />
                        <span className="text-sm text-gray-600">{pkg.groupSize}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 text-gray-500 mt-1" />
                        <span className="text-sm text-gray-600">Starting from: {pkg.startingPoint}</span>
                      </div>
                      <div className="flex items-start">
                        <CalendarIcon className="w-4 h-4 mr-2 text-gray-500 mt-1" />
                        <span className="text-sm text-gray-600">Available year-round</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Highlights:</h4>
                      <ul className="space-y-1">
                        {pkg.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button asChild variant="outline">
                      <Link href={`/char-dham-yatra/packages/${pkg.id}`}>View Details</Link>
                    </Button>
                    <Button asChild className="bg-orange-600 hover:bg-orange-700">
                      <Link href={`/char-dham-yatra/packages/${pkg.id}#booking`}>Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Custom Package */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Need a Custom Package?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We understand that every pilgrim has unique requirements. If our standard packages don't meet your specific
            needs, we can create a customized Char Dham Yatra package just for you.
          </p>
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
            <Link href="/contact">Contact for Custom Package</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about our Char Dham Yatra packages</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">What is included in the package price?</h3>
              <p className="text-gray-600">
                Our packages typically include accommodation, meals (breakfast, lunch, and dinner), transportation as
                per itinerary, guide services, all applicable taxes, and basic medical assistance. Specific inclusions
                may vary by package, so please check the detailed itinerary.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">When is the best time to undertake the Char Dham Yatra?</h3>
              <p className="text-gray-600">
                The Char Dham temples are typically open from late April/early May to October/November, depending on
                weather conditions. The best time to visit is from May to June and September to October, avoiding the
                monsoon season (July-August) when landslides are common.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How physically demanding is the Char Dham Yatra?</h3>
              <p className="text-gray-600">
                The Char Dham Yatra involves traveling in mountainous terrain and includes some trekking, particularly
                to Yamunotri and Kedarnath. The difficulty level varies by package. We offer special packages for senior
                citizens and those who prefer less physically demanding options, including helicopter services.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Can I customize the itinerary?</h3>
              <p className="text-gray-600">
                Yes, we offer customization options for groups and individuals. Please contact our team with your
                specific requirements, and we'll create a tailored package for you.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">What is the booking and cancellation policy?</h3>
              <p className="text-gray-600">
                A 30% advance payment is required to confirm your booking. The remaining amount can be paid 30 days
                before the journey begins. Cancellations made 30 days or more before departure receive a 70% refund.
                Cancellations within 15-29 days receive a 50% refund. No refund is provided for cancellations less than
                15 days before departure.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Our Support Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Begin Your Sacred Journey Today</h2>
          <p className="text-lg mb-8">
            Embark on the divine Char Dham Yatra with our expertly crafted packages. Book now to secure your spot for
            this life-changing spiritual journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="#featured-packages">Browse Packages</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/contact">Request Callback</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

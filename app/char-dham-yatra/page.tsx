import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Heart, BirdIcon as Helicopter, Leaf, Briefcase, CheckCircle2, Phone } from "lucide-react"
import CharDhamBookingForm from "@/components/char-dham-booking-form"

export default function CharDhamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Char Dham Yatra"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Char Dham Yatra</h1>
          <p className="text-lg md:text-xl mb-8">
            Embark on a divine journey to the four sacred shrines of Uttarakhand
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Yamunotri Temple"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Yamunotri Temple</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gangotri Temple"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Gangotri Temple</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Kedarnath Temple"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Kedarnath Temple</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Badrinath Temple"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Badrinath Temple</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Himalayan Scenery"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Himalayan Scenery</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pilgrimage Route"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Pilgrimage Route</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">The Sacred Char Dham Pilgrimage</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A journey of spiritual enlightenment and divine blessings
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The Char Dham Yatra is one of the most sacred Hindu pilgrimages, comprising four holy sites in the
                Indian Himalayas: Yamunotri, Gangotri, Kedarnath, and Badrinath. These four sites are collectively known
                as Char Dham (four abodes) and are believed to be highly sacred by Hindus who aspire to visit them at
                least once in their lifetime.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The pilgrimage traditionally begins from the west and proceeds in a clockwise direction: first
                Yamunotri, then Gangotri, followed by Kedarnath, and finally Badrinath. This circuit covers all the
                primary sources of the holy rivers Yamuna, Ganga (Ganges), and tributaries of the Ganga like Mandakini
                and Alaknanda.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Char Dham Yatra was systematized by Adi Shankaracharya in the 8th century CE as part of his mission
                to revive Hinduism. Each of these destinations is associated with a different deity: Yamunotri with
                Goddess Yamuna, Gangotri with Goddess Ganga, Kedarnath with Lord Shiva, and Badrinath with Lord Vishnu.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The pilgrimage season typically begins in late April or early May (on Akshaya Tritiya) and continues
                until October/November (around Diwali), as these sites remain inaccessible during winter due to heavy
                snowfall.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image src="/placeholder.svg?key=x8n8i" alt="Yamunotri Temple" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-white text-center">Yamunotri</div>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image src="/placeholder.svg?key=4kjat" alt="Gangotri Temple" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-white text-center">Gangotri</div>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image src="/placeholder.svg?key=a8t6r" alt="Kedarnath Temple" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-white text-center">Kedarnath</div>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image src="/placeholder.svg?key=4won8" alt="Badrinath Temple" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-white text-center">Badrinath</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Dhams */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">The Four Divine Abodes</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the spiritual significance of each Dham
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Yamunotri */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Yamunotri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Yamunotri</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Altitude: 3,293 meters</span>
                </div>
                <p className="text-gray-700">
                  The source of the sacred Yamuna River and dedicated to Goddess Yamuna. It's the first stop in the Char
                  Dham circuit.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Hot springs (Surya Kund) for ritual bathing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>6 km trek from Janki Chatti</span>
                  </li>
                </ul>
                <Link href="/char-dham-yatra/yamunotri">
                  <Button className="w-full mt-2 bg-red-600 hover:bg-red-700">Explore Yamunotri</Button>
                </Link>
              </div>
            </div>

            {/* Gangotri */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Gangotri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Gangotri</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Altitude: 3,100 meters</span>
                </div>
                <p className="text-gray-700">
                  The origin of the holy Ganges River and dedicated to Goddess Ganga. It's the second stop in the
                  circuit.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Gaumukh Glacier trek (19 km from Gangotri)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Evening aarti by the Bhagirathi River</span>
                  </li>
                </ul>
                <Link href="/char-dham-yatra/gangotri">
                  <Button className="w-full mt-2 bg-red-600 hover:bg-red-700">Explore Gangotri</Button>
                </Link>
              </div>
            </div>

            {/* Kedarnath */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Kedarnath"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Kedarnath</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Altitude: 3,583 meters</span>
                </div>
                <p className="text-gray-700">
                  One of the 12 Jyotirlingas, dedicated to Lord Shiva. It's the third and most challenging stop in the
                  circuit.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>16 km trek from Gaurikund</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Helicopter services available</span>
                  </li>
                </ul>
                <Link href="/char-dham-yatra/kedarnath">
                  <Button className="w-full mt-2 bg-red-600 hover:bg-red-700">Explore Kedarnath</Button>
                </Link>
              </div>
            </div>

            {/* Badrinath */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Badrinath"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Badrinath</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Altitude: 3,133 meters</span>
                </div>
                <p className="text-gray-700">
                  Dedicated to Lord Vishnu and the final destination in the Char Dham circuit. One of the 108 Divya
                  Desams.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tapt Kund hot spring for ritual bathing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Visit to Mana, the last Indian village</span>
                  </li>
                </ul>
                <Link href="/char-dham-yatra/badrinath">
                  <Button className="w-full mt-2 bg-red-600 hover:bg-red-700">Explore Badrinath</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Char Dham Packages</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the perfect package for your sacred journey
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Standard Package */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/char-dham-package-standard.png"
                  alt="Standard Char Dham Package"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Standard Char Dham Package</h3>
                <p className="text-3xl font-bold text-red-600">
                  ₹45,999 <span className="text-sm text-gray-500 font-normal">per person</span>
                </p>
                <p className="text-gray-700">
                  A comprehensive 12-day journey covering all four Dhams with comfortable accommodation and
                  transportation.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>12 days / 11 nights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>3-star accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>All meals included (vegetarian)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>AC vehicle for transportation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Experienced guide throughout</span>
                  </li>
                </ul>
                <Link href="#booking">
                  <Button className="w-full mt-2 bg-red-600 hover:bg-red-700">Book Now</Button>
                </Link>
              </div>
            </div>

            {/* Helicopter Package */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/char-dham-package-helicopter.png"
                  alt="Helicopter Char Dham Package"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Premium
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Helicopter Char Dham Package</h3>
                <p className="text-3xl font-bold text-red-600">
                  ₹1,85,000 <span className="text-sm text-gray-500 font-normal">per person</span>
                </p>
                <p className="text-gray-700">
                  Complete the Char Dham Yatra in just 6 days with helicopter services to all four Dhams.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>6 days / 5 nights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>4-star accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>All meals included (vegetarian)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Helicopter transfers to all Dhams</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>VIP darshan arrangements</span>
                  </li>
                </ul>
                <Link href="#booking">
                  <Button className="w-full mt-2 bg-red-600 hover:bg-red-700">Book Now</Button>
                </Link>
              </div>
            </div>

            {/* Senior Citizen Package */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/char-dham-package-senior.png"
                  alt="Senior Citizen Char Dham Package"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Specialized
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Senior Citizen Package</h3>
                <p className="text-3xl font-bold text-red-600">
                  ₹65,999 <span className="text-sm text-gray-500 font-normal">per person</span>
                </p>
                <p className="text-gray-700">
                  A specially designed package for senior citizens with extra care, medical support, and comfortable
                  pacing.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>14 days / 13 nights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>3-star accommodation with lift access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>All meals (special diet options)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Medical support throughout</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Palanquin/pony services included</span>
                  </li>
                </ul>
                <Link href="#booking">
                  <Button className="w-full mt-2 bg-red-600 hover:bg-red-700">Book Now</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Customized Packages</h3>
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  We understand that every pilgrim has unique needs and preferences. Our team can create a customized
                  Char Dham package tailored specifically to your requirements, including:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Flexible duration and starting dates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Choice of accommodation types</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Special puja arrangements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Additional sightseeing options</span>
                  </li>
                </ul>
                <div className="mt-6 flex gap-4">
                  <Link href="/contact">
                    <Button className="bg-red-600 hover:bg-red-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact for Custom Package
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/char-dham-package-custom.png"
                  alt="Customized Char Dham Package"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Sample Itinerary</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A glimpse of your spiritual journey through the Char Dham circuit
              </p>
            </div>
          </div>

          <Tabs defaultValue="standard" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="standard">Standard Package</TabsTrigger>
              <TabsTrigger value="helicopter">Helicopter Package</TabsTrigger>
              <TabsTrigger value="senior">Senior Citizen Package</TabsTrigger>
            </TabsList>

            <TabsContent value="standard" className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">12-Day Standard Char Dham Itinerary</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                      Day 1
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Haridwar to Barkot (200 km / 7-8 hours)</h4>
                      <p className="text-gray-700">
                        Arrival at Haridwar and drive to Barkot. En route visit Kempty Falls and enjoy the scenic beauty
                        of the Himalayas. Overnight stay at Barkot.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                      Day 2
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Barkot to Yamunotri and back (42 km drive + 6 km trek)</h4>
                      <p className="text-gray-700">
                        Early morning drive to Janki Chatti, followed by a 6 km trek to Yamunotri Temple. Perform puja,
                        take a dip in Surya Kund, and trek back to Janki Chatti. Return to Barkot for overnight stay.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                      Day 3
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Barkot to Uttarkashi (100 km / 4 hours)</h4>
                      <p className="text-gray-700">
                        Drive to Uttarkashi, visiting Tehri Dam en route. Check-in at hotel and visit Vishwanath Temple
                        in the evening. Overnight stay at Uttarkashi.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                      Day 4
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Uttarkashi to Gangotri and back (100 km / 4 hours each way)</h4>
                      <p className="text-gray-700">
                        Early morning drive to Gangotri. Visit Gangotri Temple, take a holy dip in the Bhagirathi River,
                        and perform puja. Return to Uttarkashi for overnight stay.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                      Day 5
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Uttarkashi to Guptkashi (220 km / 8-9 hours)</h4>
                      <p className="text-gray-700">
                        Drive to Guptkashi via Tehri and Devprayag. Enjoy the scenic beauty and the confluence of
                        rivers. Overnight stay at Guptkashi.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                      Day 6
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">
                        Guptkashi to Sonprayag to Kedarnath (30 km drive + 16 km trek)
                      </h4>
                      <p className="text-gray-700">
                        Drive to Sonprayag, then trek 16 km to Kedarnath. For those unable to trek, pony and palanquin
                        services are available (at additional cost). Overnight stay at Kedarnath.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                      Day 7
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Kedarnath Temple Visit and Return to Sonprayag (16 km trek)</h4>
                      <p className="text-gray-700">
                        Early morning visit to Kedarnath Temple for darshan and puja. After breakfast, trek back to
                        Sonprayag and drive to Guptkashi for overnight stay.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                      Day 8
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Guptkashi to Joshimath (160 km / 7 hours)</h4>
                      <p className="text-gray-700">
                        Drive to Joshimath via Rudraprayag and Karnaprayag. Visit Narsingh Temple in Joshimath.
                        Overnight stay at Joshimath.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                      Day 9
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Joshimath to Badrinath (45 km / 2 hours)</h4>
                      <p className="text-gray-700">
                        Drive to Badrinath. Visit Badrinath Temple for darshan and puja. Take a dip in Tapt Kund and
                        visit Mana Village, the last Indian village before the Tibet border. Overnight stay at
                        Badrinath.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                      Day 10
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Badrinath to Rudraprayag (160 km / 7 hours)</h4>
                      <p className="text-gray-700">
                        Morning visit to Badrinath Temple again, then drive to Rudraprayag. Visit the confluence of
                        Alaknanda and Mandakini rivers. Overnight stay at Rudraprayag.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                      Day 11
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Rudraprayag to Rishikesh (140 km / 5-6 hours)</h4>
                      <p className="text-gray-700">
                        Drive to Rishikesh via Devprayag. Visit Triveni Ghat and attend the evening Ganga Aarti.
                        Overnight stay at Rishikesh.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                      Day 12
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Rishikesh to Haridwar and Departure</h4>
                      <p className="text-gray-700">
                        Morning visit to famous ashrams in Rishikesh, then drive to Haridwar. Visit Har Ki Pauri for a
                        holy dip in the Ganges. Departure with divine memories of the Char Dham Yatra.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="helicopter" className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">6-Day Helicopter Char Dham Itinerary</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      Day 1
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Arrival at Dehradun</h4>
                      <p className="text-gray-700">
                        Arrival at Dehradun airport. Transfer to hotel. Briefing about the helicopter yatra. Overnight
                        stay at Dehradun.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      Day 2
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Dehradun to Yamunotri to Harsil</h4>
                      <p className="text-gray-700">
                        Morning helicopter flight to Kharsali helipad. Short drive to Yamunotri Temple. After darshan
                        and puja, helicopter flight to Harsil. Overnight stay at Harsil.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      Day 3
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Harsil to Gangotri to Guptkashi</h4>
                      <p className="text-gray-700">
                        Morning helicopter flight to Gangotri. Visit Gangotri Temple for darshan and puja. Helicopter
                        flight to Guptkashi. Overnight stay at Guptkashi.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      Day 4
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Guptkashi to Kedarnath to Badrinath</h4>
                      <p className="text-gray-700">
                        Morning helicopter flight to Kedarnath. Visit Kedarnath Temple for darshan and puja. Helicopter
                        flight to Badrinath. Overnight stay at Badrinath.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      Day 5
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Badrinath Temple Visit and Mana Village</h4>
                      <p className="text-gray-700">
                        Morning visit to Badrinath Temple for darshan and puja. Visit Mana Village, Vyas Cave, and Bheem
                        Pul. Overnight stay at Badrinath.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      Day 6
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Badrinath to Dehradun and Departure</h4>
                      <p className="text-gray-700">
                        Morning helicopter flight from Badrinath to Dehradun. Transfer to airport for departure with
                        divine blessings of the Char Dham Yatra.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="senior" className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">14-Day Senior Citizen Char Dham Itinerary</h3>
                <p className="text-gray-700 mb-4">
                  This itinerary is specially designed for senior citizens with a slower pace, more rest days, and
                  additional medical support throughout the journey.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                      Day 1-2
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Haridwar (2 nights)</h4>
                      <p className="text-gray-700">
                        Arrival at Haridwar. Rest and acclimatization. Visit Har Ki Pauri for Ganga Aarti. Medical
                        check-up and briefing about the journey.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                      Day 3-4
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Barkot (2 nights)</h4>
                      <p className="text-gray-700">
                        Drive from Haridwar to Barkot at a comfortable pace with frequent stops. Rest day for
                        acclimatization to higher altitude.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                      Day 5
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Yamunotri Visit</h4>
                      <p className="text-gray-700">
                        Drive to Janki Chatti. Palanquin/pony ride to Yamunotri Temple. Darshan and puja at the temple.
                        Return to Barkot for overnight stay.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                      Day 6-7
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Uttarkashi (2 nights)</h4>
                      <p className="text-gray-700">
                        Drive from Barkot to Uttarkashi. Rest and acclimatization. Visit Vishwanath Temple in
                        Uttarkashi.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                      Day 8
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Gangotri Visit</h4>
                      <p className="text-gray-700">
                        Drive to Gangotri. Darshan and puja at Gangotri Temple. Return to Uttarkashi for overnight stay.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                      Day 9-10
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Guptkashi (2 nights)</h4>
                      <p className="text-gray-700">
                        Drive from Uttarkashi to Guptkashi with comfort stops. Rest day for acclimatization. Visit Kashi
                        Vishwanath Temple in Guptkashi.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                      Day 11
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Kedarnath Visit</h4>
                      <p className="text-gray-700">
                        Helicopter ride from Phata to Kedarnath. Darshan and puja at Kedarnath Temple. Return to
                        Guptkashi for overnight stay.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                      Day 12
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Badrinath (1 night)</h4>
                      <p className="text-gray-700">
                        Drive from Guptkashi to Badrinath via Joshimath with comfort stops. Overnight stay at Badrinath.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                      Day 13
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Badrinath to Rishikesh</h4>
                      <p className="text-gray-700">
                        Morning visit to Badrinath Temple for darshan and puja. Drive to Rishikesh with comfort stops.
                        Overnight stay at Rishikesh.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                      Day 14
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Rishikesh to Haridwar and Departure</h4>
                      <p className="text-gray-700">
                        Morning visit to ashrams in Rishikesh. Drive to Haridwar. Final dip in the Ganges. Departure
                        with divine blessings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Book Your Char Dham Yatra</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Begin your spiritual journey to the four divine abodes
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Booking Form</h3>
              <CharDhamBookingForm destination="Char Dham" />
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Why Book With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">20+ years of experience in organizing Char Dham Yatra</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dedicated support team available 24/7 during your journey</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Comfortable accommodation and transportation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Experienced guides with deep knowledge of religious significance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Special arrangements for VIP darshan and pujas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Important Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Briefcase className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Carry warm clothes, comfortable walking shoes, and personal medications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Medical check-up recommended before undertaking the yatra</span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Advance booking recommended, especially during peak season (May-June)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Helicopter className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Helicopter services subject to weather conditions</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Only vegetarian food available during the entire yatra</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Pilgrim Testimonials</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from those who have experienced the divine journey
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
                  RS
                </div>
                <div>
                  <h4 className="font-bold">Rajesh Sharma</h4>
                  <p className="text-sm text-gray-500">Delhi</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The Char Dham Yatra organized by DreamGo Adventures was a life-changing experience. The arrangements
                were perfect, and the guides were knowledgeable and helpful. I felt spiritually uplifted throughout the
                journey."
              </p>
              <div className="flex items-center mt-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">May 2024</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
                  SP
                </div>
                <div>
                  <h4 className="font-bold">Sunita Patel</h4>
                  <p className="text-sm text-gray-500">Mumbai</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As senior citizens, we were worried about undertaking the Char Dham Yatra, but the special package for
                seniors made it possible. The medical support, comfortable pace, and special arrangements were
                excellent. Thank you for this divine experience!"
              </p>
              <div className="flex items-center mt-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">June 2024</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
                  AK
                </div>
                <div>
                  <h4 className="font-bold">Anand Kumar</h4>
                  <p className="text-sm text-gray-500">Bangalore</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The helicopter package was worth every penny! We completed the Char Dham Yatra in just 6 days with
                comfort and ease. The aerial views of the Himalayas were breathtaking, and the VIP darshan arrangements
                saved us a lot of time."
              </p>
              <div className="flex items-center mt-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">April 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about the Char Dham Yatra
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">When is the best time to undertake the Char Dham Yatra?</h3>
              <p className="text-gray-700">
                The best time is from May to June and September to October when the weather is pleasant. The temples
                remain open from late April/early May to October/November, depending on the Hindu calendar.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">How physically demanding is the Char Dham Yatra?</h3>
              <p className="text-gray-700">
                The yatra involves treks and high altitudes, making it moderately to highly demanding. Kedarnath
                requires a 16 km trek, while Yamunotri needs a 6 km trek. For those unable to trek, pony, palanquin, and
                helicopter services are available.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">How many days are required for the complete Char Dham Yatra?</h3>
              <p className="text-gray-700">
                A standard Char Dham Yatra takes 10-12 days by road. The helicopter package can complete it in 5-6 days.
                For senior citizens or those preferring a relaxed pace, 14-16 days is recommended.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">What should I pack for the Char Dham Yatra?</h3>
              <p className="text-gray-700">
                Pack warm clothes (even in summer), comfortable walking shoes, rain protection, personal medications,
                water bottle, torch, power bank, and basic first aid. Also bring offerings for the temples and a
                yellow/orange cloth for prayers.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Are there any health restrictions for undertaking the yatra?</h3>
              <p className="text-gray-700">
                People with severe heart conditions, respiratory problems, or mobility issues should consult a doctor
                before undertaking the yatra. The high altitude can cause breathing difficulties for some individuals.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Is advance booking necessary for the Char Dham Yatra?</h3>
              <p className="text-gray-700">
                Yes, advance booking is highly recommended, especially during the peak season (May-June). Accommodation,
                transportation, and helicopter services get fully booked quickly during this time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Begin Your Sacred Journey Today</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Embark on the divine Char Dham Yatra and seek the blessings of Yamunotri, Gangotri, Kedarnath, and
            Badrinath. Book your package now and take the first step towards spiritual enlightenment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#booking">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Book Your Yatra Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

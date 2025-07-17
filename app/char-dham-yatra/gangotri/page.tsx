import React from "react"
import Image from "next/image"
import { Calendar, Clock, MapPin, Mountain } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function GangotriPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Gangotri Temple"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gangotri Temple</h1>
          <p className="text-lg md:text-xl mb-8">
            The sacred source of the Ganges River and the second stop in the Char Dham Yatra
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gangotri Temple View"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Temple View</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ganges River"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Ganges River</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800"
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
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">About Gangotri</h2>
              <p className="text-gray-700 leading-relaxed">
                Gangotri, the second stop in the Char Dham Yatra, is the origin of the holy Ganges River and is dedicated to Goddess Ganga. Located at an altitude of 3,100 meters (10,170 feet) in the Uttarkashi district of Uttarakhand, this sacred site holds immense religious significance for Hindus worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The temple was built by the Gurkha General Amar Singh Thapa in the early 18th century and is situated on the banks of the Bhagirathi River. The actual source of the Ganges, known as Gaumukh (cow's mouth), is located about 19 km further up from Gangotri at the snout of the Gangotri Glacier.
              </p>
              <p className="text-gray-700 leading-relaxed">
                According to Hindu mythology, King Bhagirath performed penance here to bring the river Ganga from heaven to earth to provide salvation to his ancestors. Lord Shiva caught the river in his matted locks to break her fall, and from there, she flowed down to earth as the Ganges River.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gangotri Temple Close View"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Key Information</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">Location</h3>
              </div>
              <p className="text-gray-700">
                Uttarkashi district, Uttarakhand
                <br />
                Altitude: 3,100 meters (10,170 feet)
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">Best Time to Visit</h3>
              </div>
              <p className="text-gray-700">
                May to June and September to November
                <br />
                Temple remains closed during winter (November to April)
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">Temple Timings</h3>
              </div>
              <p className="text-gray-700">
                Summer: 6:00 AM to 8:00 PM
                <br />
                Winter: 7:00 AM to 6:00 PM
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <Mountain className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">Distance</h3>
              </div>
              <p className="text-gray-700">
                100 km from Uttarkashi
                <br />
                250 km from Rishikesh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey to Gangotri */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Journey to Gangotri</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                How to reach and what to expect
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">The Route</h3>
              <p className="text-gray-700">
                The journey to Gangotri typically starts from Haridwar or Rishikesh. From there, you travel to Uttarkashi, which serves as a base for visiting Gangotri. The road journey from Uttarkashi to Gangotri is about 100 km and takes approximately 4 hours.
              </p>
              <p className="text-gray-700">
                The route passes through beautiful landscapes, dense forests, and alongside the Bhagirathi River. The road is well-maintained but has several hairpin bends and steep sections as you gain altitude.
              </p>
              <h3 className="text-xl font-bold mt-6">Gaumukh Trek</h3>
              <p className="text-gray-700">
                For the more adventurous pilgrims, a trek to Gaumukh (the actual source of the Ganges) is highly recommended. This 19 km trek from Gangotri takes about 1-2 days and requires a permit from the forest department. The trek offers stunning views of the Gangotri Glacier and surrounding Himalayan peaks.
              </p>
              <p className="text-gray-700">
                The trek is moderately difficult and reaches an altitude of 4,000 meters (13,120 feet). It's advisable to be properly acclimatized before attempting this trek.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=road to gangotri with bhagirathi river flowing alongside"
                  alt="Road to Gangotri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=400&query=gaumukh glacier source of ganges"
                    alt="Gaumukh Glacier"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=400&query=bhagirathi peaks view from gangotri"
                    alt="Bhagirathi Peaks"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Significance */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Spiritual Significance</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The divine importance of Gangotri in Hindu mythology
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280&query=ganga aarti ceremony at gangotri temple with priests"
                alt="Ganga Aarti at Gangotri"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Mythological Importance</h3>
              <p className="text-gray-700">
                According to Hindu mythology, King Bhagirath performed severe penance to bring the river Ganga from heaven to earth to provide salvation to his 60,000 ancestors who had been cursed by Sage Kapila. Lord Brahma, pleased with his devotion, granted his wish and released Ganga.
              </p>
              <p className="text-gray-700">
                However, the force of Ganga's descent would have been too much for the earth to bear, so Lord Shiva caught her in his matted locks to break her fall. From there, she was released in several streams, with the most sacred one flowing as the Bhagirathi River from Gangotri.
              </p>
              <h3 className="text-xl font-bold mt-6">Rituals and Practices</h3>
              <p className="text-gray-700">
                Pilgrims perform various rituals at Gangotri, including taking a holy dip in the Bhagirathi River (though this is challenging due to the extremely cold water), offering prayers at the temple, and collecting Gangajal (holy water) to take back home. The evening aarti (prayer ceremony) at the temple is a mesmerizing experience that shouldn't be missed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Around Gangotri */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Attractions Around Gangotri</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Other places to visit during your pilgrimage
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=gaumukh glacier trek path with trekkers"
                  alt="Gaumukh Glacier"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Gaumukh Glacier</h3>
                <p className="mt-2 text-gray-700">
                  The actual source of the Ganges River, located 19 km from Gangotri. The glacier resembles a cow's mouth, hence the name 'Gaumukh'. A trek to this sacred spot is considered highly meritorious.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=surya kund hot spring gangotri"
                  alt="Surya Kund"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Surya Kund</h3>
                <p className="mt-2 text-gray-700">
                  A hot water spring near the temple where pilgrims take a dip before visiting the main shrine. It's believed to have healing properties and is named after the Sun God.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=bhairav temple gangotri"
                  alt="Bhairav Temple"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Bhairav Temple</h3>
                <p className="mt-2 text-gray-700">
                  Located about 1 km from the main temple, this shrine is dedicated to Lord Bhairav, the guardian deity of Gangotri. It's believed that Lord Bhairav protects the temple during winter when it's closed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
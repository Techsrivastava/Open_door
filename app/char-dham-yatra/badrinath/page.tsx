import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Mountain, Users, Heart, Droplets, Sun } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function BadrinathPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Badrinath Temple"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Badrinath Temple</h1>
          <p className="text-lg md:text-xl mb-8">
            The abode of Lord Vishnu and the final stop in the Char Dham Yatra
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Badrinath Temple View"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Temple View</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Alaknanda River"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Alaknanda River</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mountain Valley"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Mountain Valley</h3>
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
              <h2 className="text-3xl font-bold tracking-tight">About Badrinath</h2>
              <p className="text-gray-700 leading-relaxed">
                Badrinath, the fourth and final stop in the Char Dham Yatra, is one of the holiest pilgrimage sites for
                Hindus. Located at an altitude of 3,133 meters (10,279 feet) in the Chamoli district of Uttarakhand,
                this sacred temple is dedicated to Lord Vishnu in his Badrinath (Badrinarayan) form.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The temple is situated along the banks of the Alaknanda River, against the breathtaking backdrop of the
                Neelkanth Peak. According to Hindu mythology, Lord Vishnu meditated here for thousands of years under a
                badri tree (Indian jujube), giving the place its name.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Badrinath is not only a part of the Char Dham circuit but also one of the 108 Divya Desams (holy abodes
                of Vishnu) mentioned in the works of the Tamil Azhvars (saints). The temple remains open for only six
                months a year, from late April/early May to early November, due to extreme weather conditions during
                winter.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Badrinath Temple Close View"
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
                Chamoli district, Uttarakhand
                <br />
                Altitude: 3,133 meters (10,279 feet)
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
                May to June and September to October
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
                Summer: 4:30 AM to 9:00 PM
                <br />
                Special aarti: 4:30 AM and 7:00 PM
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
                45 km from Joshimath
                <br />
                295 km from Rishikesh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey to Badrinath */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Journey to Badrinath</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                How to reach and what to expect
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">The Route</h3>
              <p className="text-gray-700">
                The journey to Badrinath typically starts from Haridwar or Rishikesh. From there, you travel to
                Joshimath, which serves as a base for visiting Badrinath. The road journey from Joshimath to Badrinath
                is about 45 km and takes approximately 2-3 hours.
              </p>
              <p className="text-gray-700">
                The route passes through breathtaking landscapes, including the confluence of rivers at Devprayag,
                Rudraprayag, and Karnaprayag. The road is well-maintained but has several hairpin bends and steep
                sections as you gain altitude.
              </p>
              <h3 className="text-xl font-bold mt-6">The Experience</h3>
              <p className="text-gray-700">
                As you approach Badrinath, the majestic Neelkanth Peak (6,596 meters) comes into view, creating a
                stunning backdrop for the temple. The colorful temple stands out against the stark mountain landscape,
                creating a mesmerizing sight for pilgrims.
              </p>
              <p className="text-gray-700">
                The town of Badrinath is small but vibrant during the pilgrimage season, with numerous shops, eateries,
                and accommodations catering to the thousands of devotees who visit each year. The atmosphere is charged
                with spiritual energy, with the sound of bells, chants, and prayers filling the air.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/placeholder.svg?key=r065h" alt="Road to Badrinath" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image src="/placeholder.svg?key=i4sx4" alt="Neelkanth Peak" fill className="object-cover" />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image src="/placeholder.svg?key=yf41x" alt="Alaknanda River" fill className="object-cover" />
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
                The divine importance of Badrinath in Hindu mythology
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280&query=badrinath temple aarti ceremony with priests and devotees"
                alt="Aarti at Badrinath Temple"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Mythological Importance</h3>
              <p className="text-gray-700">
                According to Hindu mythology, Lord Vishnu came to Badrinath to meditate after being reprimanded by sage
                Narada for his indulgence in worldly pleasures. He performed severe penance here for thousands of years
                under a badri tree (Indian jujube).
              </p>
              <p className="text-gray-700">
                His consort, Goddess Lakshmi, took the form of the badri tree to provide shade to Lord Vishnu during his
                meditation. Pleased with his devotion, Lord Shiva and Parvati blessed him and promised that this place
                would be known as the abode of Lord Vishnu.
              </p>
              <h3 className="text-xl font-bold mt-6">Rituals and Practices</h3>
              <p className="text-gray-700">
                Pilgrims perform various rituals at Badrinath, including taking a holy dip in the Tapt Kund (hot spring)
                before visiting the temple, offering prayers to the deity, and participating in the morning and evening
                aartis. The temple follows a unique tradition where the head priest (Rawal) is always a Nambudiri
                Brahmin from Kerala, a tradition established by Adi Shankaracharya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Around Badrinath */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Attractions Around Badrinath</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Other places to visit during your pilgrimage
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=tapt kund hot spring badrinath"
                  alt="Tapt Kund"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Tapt Kund</h3>
                <p className="mt-2 text-gray-700">
                  A natural hot spring located just below the temple, where pilgrims take a holy dip before entering the
                  temple. The water is believed to have medicinal properties and is considered sacred.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=mana village last indian village before tibet border"
                  alt="Mana Village"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Mana Village</h3>
                <p className="mt-2 text-gray-700">
                  The last Indian village before the Tibet border, located just 3 km from Badrinath. It is associated
                  with several mythological stories from the Mahabharata and offers stunning views of the surrounding
                  mountains.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=vyas gufa cave badrinath where ved vyas composed mahabharata"
                  alt="Vyas Gufa"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Vyas Gufa</h3>
                <p className="mt-2 text-gray-700">
                  A cave where sage Vyas is believed to have composed the Mahabharata. Located in Mana village, this
                  sacred site attracts many pilgrims seeking spiritual enlightenment.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=bheem pul natural rock bridge badrinath"
                  alt="Bheem Pul"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Bheem Pul</h3>
                <p className="mt-2 text-gray-700">
                  A natural rock bridge over the roaring Saraswati River, believed to have been placed by Bheem, one of
                  the Pandava brothers, to help Draupadi cross the river. Located in Mana village.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=vasudhara falls waterfall near badrinath"
                  alt="Vasudhara Falls"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Vasudhara Falls</h3>
                <p className="mt-2 text-gray-700">
                  A magnificent waterfall located about 5 km from Mana village. According to legend, the falls are
                  visible only to those who are pure in heart and mind. The trek to the falls offers breathtaking views.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=charan paduka footprint of vishnu badrinath"
                  alt="Charan Paduka"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Charan Paduka</h3>
                <p className="mt-2 text-gray-700">
                  A boulder with footprints believed to be of Lord Vishnu. Located on a hill about 3 km from Badrinath,
                  it offers panoramic views of the Neelkanth Peak and the surrounding Himalayan range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Travel Tips</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Essential information for a smooth pilgrimage to Badrinath
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="h-5 w-5 text-red-600" />
                <h3 className="text-xl font-bold">Best Time to Visit</h3>
              </div>
              <p className="text-gray-700">
                The best time to visit Badrinath is from May to June and September to October when the weather is
                pleasant. Avoid the monsoon season (July-August) as there is a risk of landslides and road blockages.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Sun className="h-5 w-5 text-red-600" />
                <h3 className="text-xl font-bold">Weather</h3>
              </div>
              <p className="text-gray-700">
                Badrinath has a cold climate throughout the year. Summer (May-June) temperatures range from 7°C to 18°C,
                while in early winter (October) temperatures can drop to 0°C. Always carry warm clothes, even in summer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="h-5 w-5 text-red-600" />
                <h3 className="text-xl font-bold">Health Precautions</h3>
              </div>
              <p className="text-gray-700">
                Acclimatize properly to avoid altitude sickness. Carry necessary medications if you have any health
                conditions. The high altitude can be challenging for those with respiratory or heart problems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Users className="h-5 w-5 text-red-600" />
                <h3 className="text-xl font-bold">Accommodation</h3>
              </div>
              <p className="text-gray-700">
                Badrinath has various accommodation options, including the GMVN Tourist Rest House, private hotels, and
                dharamshalas. It's advisable to book in advance during peak season (May-June and September-October).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Droplets className="h-5 w-5 text-red-600" />
                <h3 className="text-xl font-bold">Holy Dip</h3>
              </div>
              <p className="text-gray-700">
                Taking a dip in the Tapt Kund before visiting the temple is a traditional practice. The water is hot and
                believed to have medicinal properties. Separate bathing areas are available for men and women.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-red-600" />
                <h3 className="text-xl font-bold">Local Customs</h3>
              </div>
              <p className="text-gray-700">
                Respect local traditions and dress modestly when visiting the temple. Photography may be restricted
                inside the temple. Remove footwear before entering the temple premises. Non-Hindus are allowed to enter
                the temple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Complete Your Char Dham Yatra</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Badrinath is the final destination in the sacred Char Dham circuit. Book your complete Char Dham Yatra
            package today and embark on a journey of spiritual enlightenment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/char-dham-yatra">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Explore Char Dham Packages
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

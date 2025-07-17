import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Mountain } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function YamunotriPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Yamunotri Temple"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Yamunotri Temple</h1>
          <p className="text-lg md:text-xl mb-8">
            The source of the sacred Yamuna River and the first stop in the Char Dham Yatra
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
                alt="Yamunotri Temple View"
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
                alt="Yamuna River"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Yamuna River</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Trekking Route"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Trekking Route</h3>
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
              <h2 className="text-3xl font-bold tracking-tight">About Yamunotri</h2>
              <p className="text-gray-700 leading-relaxed">
                Yamunotri, the source of the sacred Yamuna River, is the first stop in the Char Dham Yatra. Located at
                an altitude of 3,293 meters (10,804 feet) in the Uttarkashi district of Uttarakhand, this holy shrine is
                dedicated to Goddess Yamuna, who is believed to be the daughter of Surya (Sun God) and sister of Yama
                (God of Death).
              </p>
              <p className="text-gray-700 leading-relaxed">
                The temple opens every year on the auspicious day of Akshaya Tritiya (April-May) and closes on Diwali
                (October-November). The actual source of the Yamuna River is the Champasar Glacier, located about 1 km
                further up from the temple at an altitude of 4,421 meters.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Pilgrims visit Yamunotri not only to pay homage to Goddess Yamuna but also to take a dip in the hot
                springs (Surya Kund) near the temple, which are believed to have therapeutic properties. Many devotees
                also cook rice in the hot spring water and take it home as prasad.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Yamunotri Temple Close View"
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
                Altitude: 3,293 meters (10,804 feet)
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
                <h3 className="font-bold text-lg">Trek Distance</h3>
              </div>
              <p className="text-gray-700">
                6 km trek from Janki Chatti to Yamunotri Temple
                <br />
                Ponies and palanquins available for hire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey to Yamunotri */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Journey to Yamunotri</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                How to reach and what to expect
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">The Route</h3>
              <p className="text-gray-700">
                The journey to Yamunotri typically starts from Haridwar or Rishikesh. From there, you travel to Janki
                Chatti via Dehradun, Mussoorie, Barkot, and Hanuman Chatti. The road journey takes approximately 7-8
                hours from Haridwar to Janki Chatti.
              </p>
              <p className="text-gray-700">
                From Janki Chatti, a 6 km trek leads to the Yamunotri Temple. The trek is moderately difficult and takes
                about 3-4 hours to complete. For those who cannot trek, ponies and palanquins (dolis) are available for
                hire at Janki Chatti.
              </p>
              <h3 className="text-xl font-bold mt-6">The Trek</h3>
              <p className="text-gray-700">
                The trek from Janki Chatti to Yamunotri is a beautiful journey through stunning mountain landscapes. The
                path is well-maintained but steep in some places. Along the way, you'll cross small streams, dense
                forests, and witness breathtaking views of the Himalayas.
              </p>
              <p className="text-gray-700">
                There are several small shops and rest points along the trek where you can take a break and enjoy some
                refreshments. The final approach to the temple involves climbing a series of steps.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/yamunotri-trek-path.png"
                  alt="Trek Path to Yamunotri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/images/yamunotri-hot-springs.png"
                    alt="Hot Springs at Yamunotri"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/images/yamunotri-mountains.png"
                    alt="Mountains around Yamunotri"
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
                The divine importance of Yamunotri in Hindu mythology
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/yamunotri-puja.png"
                alt="Puja at Yamunotri Temple"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Mythological Importance</h3>
              <p className="text-gray-700">
                According to Hindu mythology, Goddess Yamuna is the daughter of Surya (Sun God) and Sanjna. She is also
                the sister of Yama, the God of Death. It is believed that bathing in the sacred waters of the Yamuna
                River can free one from the suffering of death.
              </p>
              <p className="text-gray-700">
                Legend has it that sage Asit Muni used to bathe in both the Ganges and the Yamuna. When he grew old and
                weak, he could no longer travel to the Ganges. Seeing his devotion, a stream of the Ganges appeared
                opposite to the Yamuna at Yamunotri itself.
              </p>
              <h3 className="text-xl font-bold mt-6">Rituals and Practices</h3>
              <p className="text-gray-700">
                Pilgrims perform various rituals at Yamunotri, including taking a dip in the Surya Kund (hot spring) and
                cooking rice and potatoes in the hot spring water, which is then offered to the deity and taken back as
                prasad. Devotees also offer prayers to Divya Shila, a rock pillar near the temple, before entering the
                main shrine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Around Yamunotri */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Attractions Around Yamunotri</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Other places to visit during your pilgrimage
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/surya-kund.png"
                  alt="Surya Kund Hot Springs"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Surya Kund</h3>
                <p className="mt-2 text-gray-700">
                  A hot water spring near the temple where pilgrims cook rice and potatoes to offer to the deity. The
                  water is believed to have healing properties.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/divya-shila.png"
                  alt="Divya Shila"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Divya Shila</h3>
                <p className="mt-2 text-gray-700">
                  A rock pillar near the temple that is worshipped before entering the main shrine. It is believed to be
                  a divine rock blessed by the gods.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/janki-chatti.png"
                  alt="Janki Chatti"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Janki Chatti</h3>
                <p className="mt-2 text-gray-700">
                  The base village for the trek to Yamunotri, Janki Chatti has several accommodation options, shops, and
                  facilities for pilgrims.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/hanuman-chatti.png"
                  alt="Hanuman Chatti"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Hanuman Chatti</h3>
                <p className="mt-2 text-gray-700">
                  Located 13 km before Janki Chatti, this place is the confluence of the Hanuman Ganga and Yamuna
                  rivers. It has a temple dedicated to Lord Hanuman.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/saptarishi-kund.png"
                  alt="Saptarishi Kund"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Saptarishi Kund</h3>
                <p className="mt-2 text-gray-700">
                  A high-altitude lake located about 10 km from Yamunotri Temple. It is believed that the seven great
                  sages (Saptarishis) meditated here.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/kharsali-village.png"
                  alt="Kharsali Village"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Kharsali Village</h3>
                <p className="mt-2 text-gray-700">
                  A picturesque village near Janki Chatti where the idol of Goddess Yamuna is kept during the winter
                  months when the main temple is closed.
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
                Essential information for a smooth pilgrimage to Yamunotri
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Best Time to Visit</h3>
              <p className="text-gray-700">
                The best time to visit Yamunotri is from May to June and September to November when the weather is
                pleasant. Avoid the monsoon season (July-August) as there is a risk of landslides and road blockages.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What to Pack</h3>
              <p className="text-gray-700">
                Carry warm clothes (even in summer), comfortable trekking shoes, rain protection, personal medications,
                water bottle, torch, power bank, and basic first aid. Also bring offerings for the temple and a
                yellow/orange cloth for prayers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Accommodation</h3>
              <p className="text-gray-700">
                Stay options are available at Janki Chatti, Barkot, and Hanuman Chatti. It's advisable to book in
                advance during peak season. There are also dharamshalas (pilgrim rest houses) near the temple for
                overnight stays.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Health Precautions</h3>
              <p className="text-gray-700">
                Acclimatize properly to avoid altitude sickness. Carry necessary medications if you have any health
                conditions. The trek can be strenuous, so ensure you are physically fit before undertaking it.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Local Customs</h3>
              <p className="text-gray-700">
                Respect local traditions and dress modestly when visiting the temple. Remove footwear before entering
                the temple premises. Photography may be restricted in certain areas, so always ask for permission.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Transportation</h3>
              <p className="text-gray-700">
                Shared taxis and buses are available from Haridwar/Rishikesh to Janki Chatti. For the trek, ponies and
                palanquins (dolis) can be hired at Janki Chatti if you cannot walk the entire distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Char Dham Yatra?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Start your spiritual journey with Yamunotri and continue to the other sacred Dhams. Book your Char Dham
            Yatra package today.
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

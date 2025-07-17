import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Clock, Heart, MapPin, Shield, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <Image
          src="/placeholder.svg?height=800&width=1600&query=mountain guides team with trekkers on summit"
          alt="About Open Door Expedition"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">About Open Door Expedition</h1>
            <p className="text-xl text-white/90">
              Our story, our mission, and the passionate team behind your unforgettable adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                <span>Our Story</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">From Passion to Purpose</h2>
              <p className="text-gray-500 md:text-lg">
                Open Door Expedition was founded in 2010 by a group of passionate mountaineers and travel
                enthusiasts who shared a common vision: to create meaningful adventure experiences that connect people
                with the world's most extraordinary places.
              </p>
              <p className="text-gray-500 md:text-lg">
                What began as a small operation offering treks in the Himalayas has grown into a global adventure
                company, but our core values remain unchanged. We believe in responsible travel, authentic experiences,
                and the transformative power of adventure.
              </p>
              <p className="text-gray-500 md:text-lg">
                Today, Open Door Expedition leads expeditions across six continents, but we still maintain the personalized service
                and attention to detail that defined us from the beginning. Every trek, climb, and cultural journey is
                crafted with care, led by expert guides who share our passion for adventure and respect for local
                cultures and environments.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280&query=mountain guides planning trek with maps"
                alt="Open Door Expedition founders planning an expedition"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                <Heart className="mr-1 h-3.5 w-3.5" />
                <span>Our Values</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Drives Us</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our core values guide every decision we make and every adventure we create.
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Connection</h3>
              <p className="text-gray-500">
                We foster meaningful connections between travelers and local communities, ensuring that tourism benefits
                those who call our destinations home.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="text-gray-500">
                Your safety is our highest priority. Our guides are extensively trained, and we maintain rigorous safety
                protocols on every adventure.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Environmental Stewardship</h3>
              <p className="text-gray-500">
                We're committed to preserving the natural environments we explore through sustainable practices and
                conservation initiatives.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-700 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence in Service</h3>
              <p className="text-gray-500">
                We strive for excellence in every aspect of your journey, from the first inquiry to the final farewell.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-700 mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Passion for Adventure</h3>
              <p className="text-gray-500">
                Our love for adventure drives us to create experiences that inspire, challenge, and transform.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lifelong Learning</h3>
              <p className="text-gray-500">
                We believe in the educational value of travel and strive to create opportunities for cultural exchange
                and personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700">
                <Users className="mr-1 h-3.5 w-3.5" />
                <span>Our Team</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet the Experts</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of experienced guides and adventure specialists are the heart of Open Door Expedition.
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center">
                <div className="relative h-48 w-48 overflow-hidden rounded-full mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-emerald-600 font-medium">{member.role}</p>
                <p className="mt-2 text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
                <Award className="mr-1 h-3.5 w-3.5" />
                <span>Certifications</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Credentials</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Open Door Expedition is proud to be recognized by leading industry organizations.
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="h-16 w-16 mb-4">
                  <Image
                    src={cert.logo || "/placeholder.svg"}
                    alt={cert.name}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold">{cert.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Adventure?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join us for an unforgettable journey to the world's most breathtaking destinations.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-brand-blue hover:bg-brand-blue-dark">
                  Contact Us
                </Button>
              </Link>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                  Book a Trek
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const teamMembers = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Founder & Lead Guide",
    image: "/placeholder.svg?height=300&width=300&query=male mountain guide portrait",
    bio: "With over 20 years of mountaineering experience across the Himalayas, Michael founded Open Door Expedition to share his passion for adventure.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Operations Director",
    image: "/placeholder.svg?height=300&width=300&query=female adventure company director portrait",
    bio: "Sarah ensures every expedition runs smoothly, from logistics to emergency protocols, with her background in adventure management.",
  },
  {
    id: 3,
    name: "Carlos Rodriguez",
    role: "Senior Trek Guide",
    image: "/placeholder.svg?height=300&width=300&query=male trek guide portrait latin american",
    bio: "Specializing in South American treks, Carlos brings local knowledge and 15 years of guiding experience to every adventure.",
  },
  {
    id: 4,
    name: "Aisha Patel",
    role: "Cultural Experience Specialist",
    image: "/placeholder.svg?height=300&width=300&query=female cultural guide portrait indian",
    bio: "Aisha designs our cultural immersion experiences, ensuring authentic connections with local communities.",
  },
]

const certifications = [
  {
    id: 1,
    name: "Adventure Travel Trade Association",
    logo: "/placeholder.svg?height=64&width=64&query=adventure travel certification logo",
    description: "Member of the global community of adventure travel leaders.",
  },
  {
    id: 2,
    name: "International Mountain Guides Association",
    logo: "/placeholder.svg?height=64&width=64&query=mountain guide certification logo",
    description: "Our guides meet international standards for mountain leadership.",
  },
  {
    id: 3,
    name: "Sustainable Tourism Certified",
    logo: "/placeholder.svg?height=64&width=64&query=sustainable tourism certification logo",
    description: "Recognized for our commitment to environmental and social responsibility.",
  },
  {
    id: 4,
    name: "Wilderness First Responder",
    logo: "/placeholder.svg?height=64&width=64&query=wilderness first aid certification logo",
    description: "All guides are certified in advanced wilderness first aid and rescue.",
  },
]

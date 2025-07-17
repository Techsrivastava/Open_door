import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronRight, User } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <Image
          src="/placeholder.svg?height=800&width=1600&query=adventure travel blog writing on mountain"
          alt="DreamGo Adventure Blog"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Adventure Blog
            </h1>
            <p className="text-xl text-white/90">Stories, tips, and insights from the world of adventure travel.</p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280&query=hikers at everest base camp with prayer flags"
                alt="Reaching Everest Base Camp"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                <span>Featured Post</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Reaching Everest Base Camp: A Journey to the Top of the World
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>May 15, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Michael Chen</span>
                </div>
              </div>
              <p className="text-gray-500 md:text-lg">
                Follow our journey to Everest Base Camp, where breathtaking landscapes, rich Sherpa culture, and the
                majesty of the world's highest peak create an unforgettable adventure. Learn about the challenges,
                rewards, and life-changing moments along this iconic trek.
              </p>
              <Link href="/blog/reaching-everest-base-camp">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Articles</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover tips, stories, and insights from our adventures around the world.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                      {post.category}
                    </div>
                    <h3 className="mt-2 text-xl font-bold group-hover:text-emerald-600 transition-colors">
                      {post.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-500 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 flex items-center text-sm font-medium text-emerald-600 group-hover:text-emerald-700">
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore by Category</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find articles on your favorite adventure topics.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog/category/${category.slug}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="mt-2 text-sm text-white/90">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-emerald-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the latest adventure stories, travel tips, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Items for Your Trekking Backpack",
    slug: "essential-trekking-items",
    excerpt:
      "Packing for a trek can be overwhelming. Here are the 10 must-have items that should be in every trekker's backpack, regardless of destination or duration.",
    image: "/placeholder.svg?height=600&width=800&query=hiking backpack with gear on mountain",
    date: "April 28, 2025",
    author: "Sarah Williams",
    category: "Trekking Tips",
  },
  {
    id: 2,
    title: "The Cultural Wonders of Peru Beyond Machu Picchu",
    slug: "peru-cultural-wonders",
    excerpt:
      "While Machu Picchu deservedly captures attention, Peru offers countless other cultural treasures. Discover the lesser-known archaeological sites, vibrant local traditions, and culinary delights.",
    image: "/placeholder.svg?height=600&width=800&query=peruvian cultural festival with traditional clothing",
    date: "April 15, 2025",
    author: "Carlos Rodriguez",
    category: "Cultural Experiences",
  },
  {
    id: 3,
    title: "Wildlife Photography: Capturing the Perfect Safari Shot",
    slug: "wildlife-photography-tips",
    excerpt:
      "From equipment recommendations to composition techniques, learn how to capture stunning wildlife photographs on your next safari adventure.",
    image: "/placeholder.svg?height=600&width=800&query=photographer taking picture of elephant on safari",
    date: "March 30, 2025",
    author: "James Wilson",
    category: "Photography",
  },
  {
    id: 4,
    title: "Mountain Safety: Weather Patterns and How to Prepare",
    slug: "mountain-weather-safety",
    excerpt:
      "Understanding mountain weather patterns is crucial for a safe adventure. Learn how to read the signs and prepare for sudden changes in conditions.",
    image: "/placeholder.svg?height=600&width=800&query=stormy mountain weather with hikers",
    date: "March 22, 2025",
    author: "Michael Chen",
    category: "Safety",
  },
  {
    id: 5,
    title: "The Rise of Sustainable Adventure Tourism",
    slug: "sustainable-adventure-tourism",
    excerpt:
      "How the adventure travel industry is evolving to minimize environmental impact while maximizing benefits to local communities.",
    image: "/placeholder.svg?height=600&width=800&query=eco friendly tourism with local guides",
    date: "March 10, 2025",
    author: "Aisha Patel",
    category: "Sustainability",
  },
  {
    id: 6,
    title: "Training for High Altitude: A 12-Week Program",
    slug: "high-altitude-training",
    excerpt:
      "Prepare your body for the challenges of high-altitude trekking with this comprehensive 12-week training program designed by mountain experts.",
    image: "/placeholder.svg?height=600&width=800&query=person training for mountain climbing",
    date: "February 28, 2025",
    author: "Sarah Williams",
    category: "Fitness",
  },
]

const categories = [
  {
    id: 1,
    name: "Trekking Tips",
    slug: "trekking-tips",
    description: "Expert advice for successful treks",
    image: "/placeholder.svg?height=400&width=600&query=hikers on mountain trail with backpacks",
  },
  {
    id: 2,
    name: "Cultural Experiences",
    slug: "cultural-experiences",
    description: "Immersive cultural adventures",
    image: "/placeholder.svg?height=400&width=600&query=travelers participating in local cultural ceremony",
  },
  {
    id: 3,
    name: "Wildlife & Nature",
    slug: "wildlife-nature",
    description: "Encounters with wildlife and natural wonders",
    image: "/placeholder.svg?height=400&width=600&query=safari wildlife photography with animals",
  },
  {
    id: 4,
    name: "Adventure Stories",
    slug: "adventure-stories",
    description: "Real stories from our guides and travelers",
    image: "/placeholder.svg?height=400&width=600&query=campfire storytelling at night in mountains",
  },
]

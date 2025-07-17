import React from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Clock,
  Users,
  Compass,
  Thermometer,
  Droplets,
  Mountain,
  Tent,
  AlertTriangle,
  Heart,
} from "lucide-react"
import CharDhamBookingForm from "@/components/char-dham-booking-form"

export default function KedarnathPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Kedarnath Temple"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kedarnath Temple</h1>
          <p className="text-lg md:text-xl mb-8">
            The abode of Lord Shiva and the third stop in the Char Dham Yatra
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
                alt="Kedarnath Temple View"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Temple View</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Snow-Capped Mountains"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Snow-Capped Mountains</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Trekking Path"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Trekking Path</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content - 2/3 width on desktop */}
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-red-600 mb-6">About Kedarnath Dham</h2>
              
              <p className="mb-4">
                Kedarnath, one of the twelve Jyotirlingas of Lord Shiva, is a sacred Hindu temple located in the Rudraprayag district of Uttarakhand. Situated at an altitude of 3,583 meters (11,755 ft) near the Mandakini river, this revered shrine is nestled amidst the breathtaking snow-capped peaks of the Himalayas.
              </p>
              
              <p className="mb-4">
                The temple is not just a pilgrimage site but a testament to faith that has withstood the test of time and nature's fury. The present temple is believed to have been built by Adi Shankaracharya in the 8th century CE, though its origins date back to the Mahabharata era.
              </p>

              <div className="my-8">
                <Image 
                  src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Kedarnath Temple with Pilgrims" 
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-bold text-red-600 mb-4">Spiritual Significance</h3>
              
              <p className="mb-4">
                According to Hindu mythology, the Pandavas sought Lord Shiva's blessings to atone for their sins after the Kurukshetra war. Lord Shiva, wanting to avoid them, took the form of a bull and hid in Kedarnath. When discovered, he dove into the ground, leaving parts of his body in different locations - his hump (back) remained in Kedarnath, making it one of the most significant Shiva temples.
              </p>
              
              <p className="mb-4">
                Kedarnath forms an integral part of the Char Dham Yatra and is also part of the Panch Kedar pilgrimage circuit. The temple houses a conical rock formation worshipped as Lord Shiva in his "Sadashiva" form.
              </p>

              <div className="my-8">
                <Image 
                  src="/placeholder.svg?height=500&width=800&query=kedarnath temple interior with shiva lingam"
                  alt="Kedarnath Temple Interior" 
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-bold text-red-600 mb-4">The Journey to Kedarnath</h3>
              
              <p className="mb-4">
                The journey to Kedarnath is as spiritual as the destination itself. The trek begins from Gaurikund, covering approximately 16 kilometers of steep mountain terrain. For those unable to trek, options like palanquins (palkis), ponies, and helicopter services are available.
              </p>
              
              <p className="mb-4">
                The path winds through breathtaking landscapes, offering glimpses of the majestic Himalayas, lush forests, and the gushing Mandakini river. Each step towards the temple is believed to cleanse the soul and bring one closer to divine salvation.
              </p>

              <div className="my-8">
                <Image 
                  src="/placeholder.svg?height=500&width=800&query=trek path to kedarnath with pilgrims and mountains"
                  alt="Trek Path to Kedarnath" 
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-bold text-red-600 mb-4">Key Attractions Around Kedarnath</h3>
              
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li><strong>Bhairav Temple:</strong> Dedicated to Bhairavnath, believed to be the guardian deity of Kedarnath.</li>
                <li><strong>Gandhi Sarovar:</strong> A pristine lake located about 3 km from the temple, formed by the melting of Chorabari Glacier.</li>
                <li><strong>Vasuki Tal:</strong> A high-altitude lake offering stunning views, located about 8 km from Kedarnath.</li>
                <li><strong>Shankaracharya Samadhi:</strong> The final resting place of Adi Shankaracharya, located behind the Kedarnath temple.</li>
                <li><strong>Chorabari Glacier:</strong> The source of the Mandakini river, offering a challenging trek for adventure enthusiasts.</li>
              </ul>

              <div className="my-8">
                <Image 
                  src="/placeholder.svg?height=500&width=800&query=gandhi sarovar lake near kedarnath with mountains"
                  alt="Gandhi Sarovar Lake" 
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-bold text-red-600 mb-4">The 2013 Tragedy and Rebirth</h3>
              
              <p className="mb-4">
                In June 2013, Kedarnath witnessed devastating floods that caused extensive damage to the surrounding areas. However, miraculously, the temple structure remained largely unharmed. This event is often seen as a testament to the divine protection of Lord Shiva.
              </p>
              
              <p className="mb-4">
                Since then, extensive reconstruction efforts have transformed the area, making the pilgrimage safer and more accessible. The tragedy has become part of Kedarnath's spiritual narrative, symbolizing destruction and rebirth - much like Lord Shiva himself.
              </p>

              <div className="my-8">
                <Image 
                  src="/placeholder.svg?height=500&width=800&query=kedarnath temple with reconstruction and development"
                  alt="Kedarnath Reconstruction" 
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-12">
              <Tabs defaultValue="practical-info">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="practical-info">Practical Info</TabsTrigger>
                  <TabsTrigger value="best-time">Best Time to Visit</TabsTrigger>
                  <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
                  <TabsTrigger value="puja-services">Puja Services</TabsTrigger>
                </TabsList>
                
                <TabsContent value="practical-info" className="mt-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-600 mb-4">Essential Information for Pilgrims</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Location</h4>
                          <p>Rudraprayag District, Uttarakhand</p>
                          <p>Altitude: 3,583 meters (11,755 ft)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Clock className="text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Temple Timings</h4>
                          <p>4:00 AM to 9:00 PM (during season)</p>
                          <p>Special aarti: 4:30 AM and 7:00 PM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Compass className="text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">How to Reach</h4>
                          <p>Trek: 16 km from Gaurikund</p>
                          <p>Helicopter services available from Phata, Guptkashi, and Sirsi</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Users className="text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Registration</h4>
                          <p>Mandatory registration for all pilgrims</p>
                          <p>Biometric registration at Sonprayag</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Health Advisory</h4>
                          <p>Medical certificate recommended</p>
                          <p>Not advised for people with heart or respiratory conditions</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Thermometer className="text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Weather</h4>
                          <p>Summer: 15°C to 30°C</p>
                          <p>Monsoon: Heavy rainfall</p>
                          <p>Winter: Below freezing, heavy snowfall</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="best-time" className="mt-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-600 mb-4">Best Time to Visit Kedarnath</h3>
                    
                    <p className="mb-4">
                      The Kedarnath temple remains open for only six months a year, from April/May to October/November, depending on the auspicious dates determined according to the Hindu calendar.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-bold text-lg text-red-600 mb-2">May - June (Early Season)</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <Droplets className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Pleasant weather with temperatures between 15°C to 25°C</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Users className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>High pilgrim traffic, especially during Akshaya Tritiya</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Mountain className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Snow-capped mountains visible in full glory</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-bold text-lg text-red-600 mb-2">July - August (Monsoon)</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <Droplets className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Heavy rainfall, landslides possible</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <AlertTriangle className="text-yellow-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Travel can be risky, delays common</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Users className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Less crowded, more peaceful experience</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-bold text-lg text-red-600 mb-2">September - October (Late Season)</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <Droplets className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Clear skies, excellent visibility</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Thermometer className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Temperatures begin to drop (5°C to 15°C)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Users className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Moderate crowds, especially during closing ceremony</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-bold text-lg text-red-600 mb-2">November - April (Closed)</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <Thermometer className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Extreme cold, heavy snowfall</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <AlertTriangle className="text-yellow-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Temple closed, area inaccessible</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Heart className="text-red-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Lord Shiva's idol moved to Ukhimath for worship</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-bold text-lg text-red-600 mb-2">Recommended Time</h4>
                      <p>
                        For the best experience, visit Kedarnath during late May to early June or late September to early October. These periods offer pleasant weather, clear views, and moderate crowds.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="accommodation" className="mt-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-600 mb-4">Accommodation Options</h3>
                    
                    <p className="mb-6">
                      Accommodation in Kedarnath is limited and basic, given the remote location and high altitude. Most pilgrims stay for 1-2 days before descending back to more comfortable facilities in lower towns.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-bold text-lg text-red-600 mb-2">In Kedarnath</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-2">
                            <Tent className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold">GMVN Tourist Rest House</span>
                              <p className="text-sm">Government-run accommodation with basic facilities</p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Tent className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold">Dharamshalas</span>
                              <p className="text-sm">Run by religious trusts, offering dormitory-style accommodation</p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Tent className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold">Private Lodges</span>
                              <p className="text-sm">Basic rooms with shared facilities</p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Tent className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold">Swiss Tents</span>
                              <p className="text-sm">Seasonal tent accommodations with basic amenities</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-bold text-lg text-red-600 mb-2">Nearby Locations</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-2">
                            <Tent className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold">Gaurikund</span>
                              <p className="text-sm">Starting point of the trek, offers better accommodation options</p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Tent className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold">Sonprayag</span>
                              <p className="text-sm">Registration point with decent hotels and guesthouses</p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Tent className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold">Guptkashi</span>
                              <p className="text-sm">Larger town with more comfortable hotels</p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Tent className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold">Rudraprayag</span>
                              <p className="text-sm">District headquarters with good accommodation options</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-bold text-lg text-red-600 mb-2">Booking Information</h4>
                      <ul className="space-y-2">
                        <li>Advance booking is highly recommended, especially during peak season</li>
                        <li>GMVN accommodations can be booked online through their official website</li>
                        <li>Most private accommodations can be booked through our Char Dham packages</li>
                        <li>During peak season, prices can increase by 30-50%</li>
                        <li>Electricity and hot water may be limited in Kedarnath</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="puja-services" className="mt-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-600 mb-4">Puja and Ritual Services</h3>
                    
                    <p className="mb-6">
                      Various pujas and rituals can be performed at Kedarnath temple to seek Lord Shiva's blessings. These range from simple darshan to elaborate ceremonies conducted by temple priests (teerth purohits).
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-bold text-lg text-red-600 mb-2">Common Pujas</h4>
                        <ul className="space-y-3">
                          <li>
                            <div className="font-semibold">Rudrabhishek</div>
                            <p className="text-sm">Special abhishekam of the Shiva Lingam with milk, curd, honey, ghee, and water</p>
                            <p className="text-sm font-medium mt-1">Duration: 1-2 hours | Cost: ₹2,100 onwards</p>
                          </li>
                          <li>
                            <div className="font-semibold">Maha Mrityunjaya Jaap</div>
                            <p className="text-sm">Recitation of the powerful Maha Mrityunjaya mantra for health and longevity</p>
                            <p className="text-sm font-medium mt-1">Duration: 1 hour | Cost: ₹1,100 onwards</p>
                          </li>
                          <li>
                            <div className="font-semibold">Laghu Puja</div>
                            <p className="text-sm">Brief worship ceremony with basic offerings</p>
                            <p className="text-sm font-medium mt-1">Duration: 30 minutes | Cost: ₹501 onwards</p>
                          </li>
                          <li>
                            <div className="font-semibold">Pind Daan</div>
                            <p className="text-sm">Ritual performed for ancestors' souls</p>
                            <p className="text-sm font-medium mt-1">Duration: 1 hour | Cost: ₹1,500 onwards</p>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-bold text-lg text-red-600 mb-2">Special Ceremonies</h4>
                        <ul className="space-y-3">
                          <li>
                            <div className="font-semibold">Participation in Mangala Aarti</div>
                            <p className="text-sm">Early morning ritual with special access</p>
                            <p className="text-sm font-medium mt-1">Time: 4:30 AM | Cost: ₹1,100 per person</p>
                          </li>
                          <li>
                            <div className="font-semibold">VIP Darshan</div>
                            <p className="text-sm">Priority darshan without waiting in long queues</p>
                            <p className="text-sm font-medium mt-1">Cost: ₹1,500 per person</p>
                          </li>
                          <li>
                            <div className="font-semibold">Shayan Aarti</div>
                            <p className="text-sm">Evening aarti before the temple closes</p>
                            <p className="text-sm font-medium mt-1">Time: 7:00 PM | Cost: ₹1,100 per person</p>
                          </li>
                          <li>
                            <div className="font-semibold">Bhog Offering</div>
                            <p className="text-sm">Special food offerings to the deity</p>
                            <p className="text-sm font-medium mt-1">Cost: ₹551 onwards</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-bold text-lg text-red-600 mb-2">How to Arrange Pujas</h4>
                      <ul className="space-y-2">
                        <li>Book through our Char Dham packages for hassle-free arrangements</li>
                        <li>Contact temple administration or authorized priests in advance</li>
                        <li>Arrange through local tour operators in Gaurikund or Sonprayag</li>
                        <li>On-spot arrangements possible but subject to availability and temple rush</li>
                        <li>Carry proper identification for booking pujas</li>
                      </ul>
                      <p className="mt-4 text-sm italic">
                        Note: Prices are indicative and may vary based on season and specific requirements. All puja materials are provided by the priests.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Right Sidebar - 1/3 width on desktop */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <CharDhamBookingForm destination="Kedarnath" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

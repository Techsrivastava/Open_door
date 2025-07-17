'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { getPackageById } from '@/lib/services/package-service';
import { Package } from '@/lib/services/package-service';
import InternationalBookingForm from '@/components/international-booking-form';
import PriceFormatter from '@/components/price-formatter';
import { Calendar, MapPin, Mountain, Clock, Users, Star, CheckCircle } from 'lucide-react';

export async function generateMetadata({ 
  params: { locale, slug } 
}: { 
  params: { locale: string; slug: string } 
}) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  
  return {
    title: `${t('package.title')} - ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`,
    description: t('package.description'),
  };
}

export default function PackageDetailPage({ 
  params: { slug } 
}: { 
  params: { slug: string } 
}) {
  const t = useTranslations('PackageDetail');
  const [packageData, setPackageData] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        setLoading(true);
        // In a real implementation, you would fetch by slug
        // For demo purposes, we'll use a sample package
        const data = await getPackageById(slug);
        // setPackageData(samplePackage);
        setError(null);
      } catch (err) {
        console.error('Error fetching package:', err);
        setError(t('errors.fetchFailed'));
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [slug, t]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[500px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error || !packageData) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-red-50 p-6 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-red-700 mb-4">{t('errors.notFound')}</h2>
          <p className="text-red-600 mb-6">{error || t('errors.unavailable')}</p>
          <a 
            href="/packages" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
          >
            {t('backToPackages')}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
        <Image
          src={packageData.imageUrl}
          alt={packageData.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{packageData.title}</h1>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{packageData.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{packageData.duration}</span>
            </div>
            <div className="flex items-center">
              <Mountain className="w-4 h-4 mr-1" />
              <span>{packageData.difficulty}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Package Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">{t('overview')}</h2>
            <p className="text-gray-700 mb-6">{packageData.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-orange-500 mb-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-medium">{t('duration')}</span>
                </div>
                <p className="text-gray-700">{packageData.duration}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-orange-500 mb-2">
                  <Mountain className="w-5 h-5 mr-2" />
                  <span className="font-medium">{t('difficulty')}</span>
                </div>
                <p className="text-gray-700">{packageData.difficulty}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-orange-500 mb-2">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-medium">{t('groupSize')}</span>
                </div>
                <p className="text-gray-700">{packageData.groupSize}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-orange-500 mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-medium">{t('bestTime')}</span>
                </div>
                <p className="text-gray-700">{packageData.bestTime}</p>
              </div>
            </div>
          </section>
          
          {/* Highlights */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">{t('highlights')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </section>
          
          {/* Itinerary */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">{t('itinerary')}</h2>
            <div className="space-y-6">
              {itinerary.map((day, index) => (
                <div key={index} className="border-l-2 border-orange-500 pl-4 pb-6">
                  <h3 className="text-lg font-bold text-orange-600 mb-2">{t('day')} {day.day}: {day.title}</h3>
                  <p className="text-gray-700">{day.description}</p>
                  {day.meals && (
                    <div className="mt-2 text-sm text-gray-600">
                      <span className="font-medium">{t('meals')}:</span> {day.meals}
                    </div>
                  )}
                  {day.accommodation && (
                    <div className="mt-1 text-sm text-gray-600">
                      <span className="font-medium">{t('accommodation')}:</span> {day.accommodation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
          
          {/* Inclusions & Exclusions */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">{t('inclusionsExclusions')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-green-600 mb-3">{t('inclusions')}</h3>
                <ul className="space-y-2">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-red-600 mb-3">{t('exclusions')}</h3>
                <ul className="space-y-2">
                  {exclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
        
        {/* Right Column - Booking Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <InternationalBookingForm
              packageId={packageData.id}
              packageTitle={packageData.title}
              packagePrice={packageData.price}
              packageDuration={packageData.duration}
              packageLocation={packageData.location}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Sample data for demonstration purposes
const samplePackage: Package = {
  id: '1',
  title: 'Kedarkantha Trek',
  description: 'Experience the beauty of Kedarkantha, one of the most popular winter treks in India. This trek offers breathtaking views of the Himalayan range, pristine snow-covered landscapes, and charming forest trails. Perfect for beginners and experienced trekkers alike, Kedarkantha provides an unforgettable adventure in the heart of Uttarakhand.',
  location: 'Uttarakhand',
  duration: '6 Days',
  groupSize: '8-15 People',
  price: 12999,
  imageUrl: '/images/treks/kedarkantha.jpg',
  slug: 'kedarkantha-trek',
  category: 'Treks',
  difficulty: 'Moderate',
  altitude: '12,500 ft',
  bestTime: 'December to April',
  included: ['Accommodation', 'Meals', 'Expert Guide', 'Permits'],
  itinerary: [],
  reviews: [],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const highlights = [
  'Summit climb to 12,500 ft offering panoramic views of the Himalayan peaks',
  'Camping under the stars in pristine snow-covered meadows',
  'Trek through dense pine and oak forests with diverse flora and fauna',
  'Experience the thrill of walking on fresh snow (during winter months)',
  'Visit charming mountain villages and experience local culture',
  'Professional trek leaders and guides with extensive experience',
  'Delicious meals prepared fresh at campsites',
  'Bonfire evenings with fellow trekkers sharing stories',
];

const itinerary = [
  {
    day: 1,
    title: 'Arrival at Dehradun and Drive to Sankri',
    description: 'The journey begins with a scenic drive from Dehradun to Sankri (1,950 m), passing through Mussoorie and following the Tons River. Enjoy the beautiful landscapes and arrive at Sankri by evening. After check-in, explore the village and attend a briefing session about the trek.',
    meals: 'Dinner',
    accommodation: 'Guest House (Twin Sharing)',
  },
  {
    day: 2,
    title: 'Sankri to Juda Ka Talab',
    description: 'After breakfast, begin the trek to Juda Ka Talab (2,700 m). The trail passes through dense pine forests with occasional clearings offering views of snow-capped peaks. Reach the campsite near the beautiful lake by afternoon and enjoy the serene surroundings.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Tents (Twin Sharing)',
  },
  {
    day: 3,
    title: 'Juda Ka Talab to Kedarkantha Base Camp',
    description: 'Trek from Juda Ka Talab to Kedarkantha Base Camp (3,400 m) through oak and pine forests. The trail gradually ascends and offers spectacular views of the surrounding mountains. Reach the base camp by afternoon and prepare for the summit climb.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Tents (Twin Sharing)',
  },
  {
    day: 4,
    title: 'Summit Day: Base Camp to Kedarkantha Peak and back to Base Camp',
    description: 'Start early morning (around 4 AM) for the summit climb. The trail becomes steeper as you approach the peak. Reach the summit (3,810 m) by sunrise and enjoy the breathtaking panoramic views of Himalayan peaks including Swargarohini, Bandarpoonch, and Kala Nag. Descend back to the base camp by afternoon.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Tents (Twin Sharing)',
  },
  {
    day: 5,
    title: 'Base Camp to Hargaon',
    description: 'Trek from Base Camp to Hargaon through a different route, offering new views and landscapes. The trail is mostly downhill through dense forests and meadows. Reach Hargaon by afternoon and enjoy the last night of camping.',
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Tents (Twin Sharing)',
  },
  {
    day: 6,
    title: 'Hargaon to Sankri and Drive to Dehradun',
    description: 'After breakfast, trek down to Sankri (approximately 2 hours). From Sankri, board the vehicles for the return journey to Dehradun. Arrive in Dehradun by evening, marking the end of the trek.',
    meals: 'Breakfast, Lunch',
    accommodation: 'Not Included',
  },
];

const inclusions = [
  'Transportation from Dehradun to Sankri and back',
  'Accommodation in guest house at Sankri (Day 1) on twin sharing basis',
  'Camping accommodation during the trek (twin sharing tents)',
  'All meals as mentioned in the itinerary',
  'Qualified and experienced trek leader, guides, and support staff',
  'All necessary permits and entry fees',
  'Safety equipment including first aid kit, oxygen cylinder, and oximeter',
  'Camping equipment including tents, sleeping bags, mattresses, and kitchen/dining tents',
  'Basic toiletries and toilet tents',
  'Evening snacks and bonfire (subject to weather conditions)',
];

const exclusions = [
  'Any personal expenses or additional meals not mentioned in the inclusions',
  'Travel insurance, medical insurance, or evacuation charges',
  'Additional accommodation or meals due to unforeseen delays',
  'Costs arising from unforeseen circumstances such as bad weather, landslides, road conditions, etc.',
  'Tips for guides, porters, and support staff',
  'Any items or services not specifically mentioned in the inclusions',
  'GST and other applicable taxes',
];
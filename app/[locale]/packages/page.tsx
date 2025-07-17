'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { getAllPackages } from '@/lib/services/package-service';
import PackageCard from '@/components/package-card';
import { Package } from '@/lib/services/package-service';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  
  return {
    title: t('packages.title'),
    description: t('packages.description'),
  };
}

export default function PackagesPage() {
  const t = useTranslations('Packages');
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const data = await getAllPackages();
        setPackages(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching packages:', err);
        setError(t('errors.fetchFailed'));
        // Use sample data for demonstration if API fails
        setPackages(samplePackages);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [t]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        {t('title')}
      </h1>
      
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        {t('description')}
      </p>

      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      ) : error && packages.length === 0 ? (
        <div className="text-center text-red-500 py-8">
          {error}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              id={pkg.id}
              title={pkg.title}
              description={pkg.description}
              location={pkg.location}
              duration={pkg.duration}
              groupSize={pkg.groupSize}
              price={pkg.price}
              imageUrl={pkg.imageUrl}
              slug={pkg.slug}
              category={pkg.category}
              showMultipleCurrencies={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Sample data for demonstration purposes
const samplePackages: Package[] = [
  {
    id: '1',
    title: 'Kedarkantha Trek',
    description: 'Experience the beauty of Kedarkantha, one of the most popular winter treks in India.',
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
  },
  {
    id: '2',
    title: 'Valley of Flowers Trek',
    description: 'Discover the UNESCO World Heritage Site known for its meadows of endemic alpine flowers.',
    location: 'Uttarakhand',
    duration: '6 Days',
    groupSize: '10-15 People',
    price: 14999,
    imageUrl: '/images/treks/valley-of-flowers.jpg',
    slug: 'valley-of-flowers-trek',
    category: 'Treks',
    difficulty: 'Moderate',
    altitude: '14,100 ft',
    bestTime: 'July to September',
    included: ['Accommodation', 'Meals', 'Expert Guide', 'Permits'],
    itinerary: [],
    reviews: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Char Dham Yatra',
    description: 'Embark on the sacred pilgrimage to the four holy shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath.',
    location: 'Uttarakhand',
    duration: '12 Days',
    groupSize: '15-20 People',
    price: 29999,
    imageUrl: '/images/char-dham/char-dham-yatra.jpg',
    slug: 'char-dham-yatra',
    category: 'CharDham',
    difficulty: 'Moderate',
    altitude: '12,000 ft',
    bestTime: 'May to June, September to October',
    included: ['Accommodation', 'Meals', 'Transportation', 'Guide'],
    itinerary: [],
    reviews: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Kashmir Great Lakes Trek',
    description: 'Trek through the most beautiful alpine lakes surrounded by meadows and mountains.',
    location: 'Jammu & Kashmir',
    duration: '8 Days',
    groupSize: '8-12 People',
    price: 18999,
    imageUrl: '/images/treks/kashmir-great-lakes.jpg',
    slug: 'kashmir-great-lakes-trek',
    category: 'Treks',
    difficulty: 'Moderate to Difficult',
    altitude: '13,750 ft',
    bestTime: 'July to September',
    included: ['Accommodation', 'Meals', 'Expert Guide', 'Permits'],
    itinerary: [],
    reviews: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
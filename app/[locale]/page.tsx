import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

// Import components
import HeroCarousel from '@/components/hero-carousel';
import FeaturedDestinations from '@/components/featured-destinations';
import AdventureCategories from '@/components/adventure-categories';
import ModernPopularTreksCarousel from '@/components/modern-popular-treks-carousel';
import ModernCharDhamCarousel from '@/components/modern-char-dham-carousel';
import TestimonialCarousel from '@/components/testimonial-carousel';
import NewsletterSignup from '@/components/newsletter-signup';

export async function generateMetadata(props: { params: { locale: string } }) {
  const { params } = props;
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  
  return {
    title: t('home.title'),
    description: t('home.description'),
  };
}

export default function Home() {
  const t = useTranslations('Home');
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <HeroCarousel />
      
      {/* Featured Destinations */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('featuredDestinations.title')}
          </h2>
          <FeaturedDestinations />
        </div>
      </section>
      
      {/* Adventure Categories */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('adventureCategories.title')}
          </h2>
          <AdventureCategories />
        </div>
      </section>
      
      {/* Popular Treks */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('popularTreks.title')}
          </h2>
          <ModernPopularTreksCarousel />
        </div>
      </section>
      
      {/* Char Dham Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('charDham.title')}
          </h2>
          <ModernCharDhamCarousel />
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('testimonials.title')}
          </h2>
          <TestimonialCarousel />
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="w-full py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </main>
  );
}
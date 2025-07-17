'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import PriceFormatter from './price-formatter';

type PackageCardProps = {
  id: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  groupSize: string;
  price: number;
  imageUrl: string;
  slug: string;
  category: string;
  showMultipleCurrencies?: boolean;
};

export default function PackageCard({
  id,
  title,
  description,
  location,
  duration,
  groupSize,
  price,
  imageUrl,
  slug,
  category,
  showMultipleCurrencies = false,
}: PackageCardProps) {
  const t = useTranslations('Common');

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
        <div className="absolute bottom-3 left-3">
          <span className="bg-orange-500 text-white text-xs font-medium px-2.5 py-1 rounded">
            {t(`categories.${category.toLowerCase()}`)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1 text-orange-500" />
          <span className="text-sm">{location}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-4 mt-auto">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-1 text-orange-500" />
            <span className="text-xs">{duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1 text-orange-500" />
            <span className="text-xs">{groupSize}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div>
            <div className="text-xs text-gray-500">{t('startingFrom')}</div>
            <PriceFormatter 
              amount={price} 
              showMultipleCurrencies={showMultipleCurrencies} 
              className="font-bold text-lg"
            />
          </div>
          
          <Link 
            href={`/${category.toLowerCase()}/${slug}`}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
          >
            {t('viewDetails')}
          </Link>
        </div>
      </div>
    </div>
  );
}
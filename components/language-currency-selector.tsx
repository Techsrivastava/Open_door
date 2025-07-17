'use client';

import { useState } from 'react';
import { useAppContext } from '@/contexts/app-context';
import { CurrencyCode, currencySymbols } from '@/lib/currency';
import { Globe, DollarSign } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export default function LanguageCurrencySelector() {
  const { locale, setLocale, currency, setCurrency } = useAppContext();
  
  // Language options
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
  ];
  
  // Currency options
  const currencies: { code: CurrencyCode; name: string }[] = [
    { code: 'INR', name: 'Indian Rupee (₹)' },
    { code: 'USD', name: 'US Dollar ($)' },
    { code: 'EUR', name: 'Euro (€)' },
    { code: 'GBP', name: 'British Pound (£)' },
  ];

  return (
    <div className="flex items-center space-x-2">
      {/* Language Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Globe className="h-4 w-4" />
            <span className="sr-only">Toggle language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLocale(lang.code as 'en' | 'hi')}
              className={locale === lang.code ? 'bg-accent' : ''}
            >
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Currency Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <span className="text-sm font-medium">{currencySymbols[currency]}</span>
            <span className="sr-only">Toggle currency</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {currencies.map((curr) => (
            <DropdownMenuItem
              key={curr.code}
              onClick={() => setCurrency(curr.code)}
              className={currency === curr.code ? 'bg-accent' : ''}
            >
              {curr.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
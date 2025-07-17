'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CurrencyCode } from '@/lib/currency';

type Locale = 'en' | 'hi';

interface AppContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Export the provider component with both names for backward compatibility
export function AppProvider({ children }: { children: ReactNode }) {
  // Initialize state from localStorage if available (client-side only)
  const [locale, setLocaleState] = useState<Locale>('en');
  const [currency, setCurrencyState] = useState<CurrencyCode>('INR');

  // Load saved preferences on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    const savedCurrency = localStorage.getItem('currency') as CurrencyCode;
    
    if (savedLocale && ['en', 'hi'].includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
    
    if (savedCurrency && ['INR', 'USD', 'EUR', 'GBP'].includes(savedCurrency)) {
      setCurrencyState(savedCurrency);
    }
  }, []);

  // Save preferences when they change
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    // Reload the page to apply the new locale
    window.location.href = `/${newLocale}`;
  };

  const setCurrency = (newCurrency: CurrencyCode) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('currency', newCurrency);
  };

  return (
    <AppContext.Provider value={{ locale, setLocale, currency, setCurrency }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

// Export AppProvider as AppContextProvider for backward compatibility
export const AppContextProvider = AppProvider;
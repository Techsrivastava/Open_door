// Currency conversion utility

// Supported currencies
export type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP';

// Currency symbols
export const currencySymbols: Record<CurrencyCode, string> = {
  INR: '₹',
  USD: '$',
  EUR: '€',
  GBP: '£',
};

// Exchange rates (relative to INR as base)
// These rates should ideally come from an API in production
export const exchangeRates: Record<CurrencyCode, number> = {
  INR: 1,
  USD: 0.012, // 1 INR = 0.012 USD (approx)
  EUR: 0.011, // 1 INR = 0.011 EUR (approx)
  GBP: 0.0095, // 1 INR = 0.0095 GBP (approx)
};

/**
 * Convert amount from INR to target currency
 * @param amount Amount in INR
 * @param targetCurrency Target currency code
 * @returns Converted amount in target currency
 */
export const convertFromINR = (amount: number, targetCurrency: CurrencyCode): number => {
  if (targetCurrency === 'INR') return amount;
  return amount * exchangeRates[targetCurrency];
};

/**
 * Convert amount from source currency to INR
 * @param amount Amount in source currency
 * @param sourceCurrency Source currency code
 * @returns Converted amount in INR
 */
export const convertToINR = (amount: number, sourceCurrency: CurrencyCode): number => {
  if (sourceCurrency === 'INR') return amount;
  return amount / exchangeRates[sourceCurrency];
};

/**
 * Format currency amount with proper symbol and locale
 * @param amount Amount to format
 * @param currencyCode Currency code
 * @param locale Locale for formatting
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number, currencyCode: CurrencyCode, locale = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: currencyCode === 'INR' ? 0 : 2,
  }).format(amount);
};

/**
 * Format price in multiple currencies
 * @param amountINR Amount in INR
 * @param targetCurrencies Array of target currencies
 * @returns Object with formatted prices in target currencies
 */
export const formatMultiCurrency = (amountINR: number, targetCurrencies: CurrencyCode[] = ['INR', 'USD']): Record<CurrencyCode, string> => {
  const result: Partial<Record<CurrencyCode, string>> = {};
  
  targetCurrencies.forEach(currency => {
    const convertedAmount = convertFromINR(amountINR, currency);
    result[currency] = formatCurrency(convertedAmount, currency);
  });
  
  return result as Record<CurrencyCode, string>;
};
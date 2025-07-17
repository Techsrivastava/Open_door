'use client';

import { useAppContext } from '@/contexts/app-context';
import { formatCurrency, formatPriceInMultipleCurrencies } from '@/lib/currency';

type PriceFormatterProps = {
  amount: number;
  showMultipleCurrencies?: boolean;
  className?: string;
};

export default function PriceFormatter({
  amount,
  showMultipleCurrencies = false,
  className = '',
}: PriceFormatterProps) {
  const { currency } = useAppContext();

  if (showMultipleCurrencies) {
    const formattedPrices = formatPriceInMultipleCurrencies(amount);
    
    return (
      <div className={`flex flex-col ${className}`}>
        <span className="font-bold text-lg">{formattedPrices[currency]}</span>
        <div className="text-xs text-gray-500 space-y-1 mt-1">
          {Object.entries(formattedPrices)
            .filter(([code]) => code !== currency)
            .map(([code, price]) => (
              <div key={code}>{price}</div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <span className={className}>
      {formatCurrency(amount, currency)}
    </span>
  );
}
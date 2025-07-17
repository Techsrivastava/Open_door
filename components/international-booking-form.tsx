'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useAppContext } from '@/contexts/app-context';
import { createBooking } from '@/lib/services/booking-service';
import { createPaymentOrder } from '@/lib/services/payment-service';
import { validateCoupon } from '@/lib/services/offer-service';
import { formatCurrency } from '@/lib/currency';
import PriceFormatter from './price-formatter';
import { Calendar, Users, Tag, CreditCard } from 'lucide-react';

type InternationalBookingFormProps = {
  packageId: string;
  packageTitle: string;
  packagePrice: number;
  packageDuration: string;
  packageLocation: string;
};

export default function InternationalBookingForm({
  packageId,
  packageTitle,
  packagePrice,
  packageDuration,
  packageLocation,
}: InternationalBookingFormProps) {
  const t = useTranslations('BookingForm');
  const { currency, locale } = useAppContext();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    numberOfTravelers: 1,
    couponCode: '',
  });
  
  // Booking state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);
  
  // Coupon state
  const [couponLoading, setCouponLoading] = useState(false);
  const [couponError, setCouponError] = useState<string | null>(null);
  const [couponSuccess, setCouponSuccess] = useState(false);
  const [discount, setDiscount] = useState(0);
  
  // Calculate total price
  const totalPrice = packagePrice * formData.numberOfTravelers;
  const discountedPrice = totalPrice - discount;
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Reset coupon if number of travelers changes
    if (name === 'numberOfTravelers') {
      setCouponSuccess(false);
      setCouponError(null);
      setDiscount(0);
    }
  };
  
  // Validate coupon code
  const handleValidateCoupon = async () => {
    if (!formData.couponCode) {
      setCouponError(t('couponRequired'));
      return;
    }
    
    setCouponLoading(true);
    setCouponError(null);
    
    try {
      const response = await validateCoupon({
        code: formData.couponCode,
        packageId,
        totalAmount: totalPrice,
      });
      
      setCouponSuccess(true);
      setDiscount(response.discountAmount);
    } catch (err) {
      console.error('Error validating coupon:', err);
      setCouponError(t('invalidCoupon'));
      setDiscount(0);
    } finally {
      setCouponLoading(false);
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setLoading(true);
    setError(null);
    
    try {
      // Create booking
      const bookingResponse = await createBooking({
        packageId,
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        travelDate: new Date(formData.travelDate).toISOString(),
        numberOfTravelers: Number(formData.numberOfTravelers),
        totalAmount: discountedPrice,
        couponCode: couponSuccess ? formData.couponCode : undefined,
        currency,
        language: locale,
      });
      
      setBookingId(bookingResponse.id);
      
      // Create payment order
      const paymentResponse = await createPaymentOrder({
        bookingId: bookingResponse.id,
        amount: discountedPrice,
        currency,
      });
      
      // In a real implementation, you would initialize Razorpay here
      // For demo purposes, we'll just show success
      setSuccess(true);
    } catch (err) {
      console.error('Error creating booking:', err);
      setError(t('bookingError'));
    } finally {
      setLoading(false);
    }
  };
  
  if (success && bookingId) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">{t('bookingSuccess')}</h3>
        <p className="text-green-700 mb-4">{t('bookingReference')}: {bookingId}</p>
        <p className="text-green-600 mb-6">{t('confirmationEmail')}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
        >
          {t('bookAnother')}
        </button>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-orange-500 p-4 text-white">
        <h3 className="text-xl font-bold">{t('bookNow')}</h3>
      </div>
      
      <div className="p-6">
        {/* Package Summary */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <h4 className="font-bold text-lg mb-3">{packageTitle}</h4>
          <div className="flex flex-col space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-orange-500" />
              <span>{packageDuration}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-orange-500" />
              <span>{t('minGroupSize')}: 2</span>
            </div>
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-2 text-orange-500" />
              <span>
                {t('price')}: <PriceFormatter amount={packagePrice} />
              </span>
            </div>
          </div>
        </div>
        
        {/* Booking Form */}
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            {/* Personal Information */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t('fullName')} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t('email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {t('phone')} *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            {/* Trip Details */}
            <div>
              <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">
                {t('travelDate')} *
              </label>
              <input
                type="date"
                id="travelDate"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label htmlFor="numberOfTravelers" className="block text-sm font-medium text-gray-700 mb-1">
                {t('travelers')} *
              </label>
              <select
                id="numberOfTravelers"
                name="numberOfTravelers"
                value={formData.numberOfTravelers}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Coupon Code */}
            <div>
              <label htmlFor="couponCode" className="block text-sm font-medium text-gray-700 mb-1">
                {t('couponCode')}
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  id="couponCode"
                  name="couponCode"
                  value={formData.couponCode}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder={t('enterCoupon')}
                />
                <button
                  type="button"
                  onClick={handleValidateCoupon}
                  disabled={couponLoading || !formData.couponCode}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors duration-300 disabled:opacity-50"
                >
                  {couponLoading ? t('validating') : t('apply')}
                </button>
              </div>
              {couponError && (
                <p className="mt-1 text-sm text-red-600">{couponError}</p>
              )}
              {couponSuccess && (
                <p className="mt-1 text-sm text-green-600">{t('couponApplied')}</p>
              )}
            </div>
            
            {/* Price Summary */}
            <div className="bg-gray-50 p-4 rounded-lg mt-6">
              <h4 className="font-medium text-gray-800 mb-3">{t('priceSummary')}</h4>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{t('basePrice')}</span>
                  <span><PriceFormatter amount={packagePrice} /></span>
                </div>
                
                <div className="flex justify-between">
                  <span>{t('travelers')}</span>
                  <span>x {formData.numberOfTravelers}</span>
                </div>
                
                <div className="flex justify-between font-medium">
                  <span>{t('subtotal')}</span>
                  <span><PriceFormatter amount={totalPrice} /></span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>{t('discount')}</span>
                    <span>- <PriceFormatter amount={discount} /></span>
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-bold text-base">
                    <span>{t('totalAmount')}</span>
                    <span><PriceFormatter amount={discountedPrice} /></span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-70"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {t('processing')}
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5 mr-2" />
                  {t('proceedToPayment')}
                </>
              )}
            </button>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              {t('securePayment')}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
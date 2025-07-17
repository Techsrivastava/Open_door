import apiClient from '../api-client';

// Types
export interface Offer {
  _id: string;
  title: string;
  description: string;
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  minPurchase: number;
  maxDiscount: number;
  validFrom: string;
  validTo: string;
  validFor: string[];
  status: 'Active' | 'Inactive' | 'Expired';
}

export interface CouponValidation {
  coupon: Offer;
  discountAmount: number;
  finalAmount: number;
}

// Service functions
export const offerService = {
  // Get all active offers
  getActiveOffers: async (validFor?: string) => {
    const response = await apiClient.get('/offers', {
      params: {
        status: 'Active',
        validFor,
      },
    });
    return response.data;
  },

  // Get offer by ID
  getOfferById: async (id: string) => {
    const response = await apiClient.get(`/offers/${id}`);
    return response.data;
  },

  // Validate and apply coupon
  validateCoupon: async (code: string, amount: number, packageId?: string) => {
    const response = await apiClient.post('/coupons/validate', {
      code,
      amount,
      packageId,
    });
    return response.data;
  },

  // Redeem offer
  redeemOffer: async (code: string) => {
    const response = await apiClient.post('/offers/redeem', { code });
    return response.data;
  },
};
import apiClient from '../api-client';

// Types
export interface Coupon {
  _id: string;
  code: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minPurchase?: number;
  maxDiscount?: number;
  validFrom: string;
  validUntil: string;
  usageLimit?: number;
  usageCount: number;
  isActive: boolean;
}

export interface CouponValidationResult {
  valid: boolean;
  coupon?: Coupon;
  message?: string;
  discountAmount?: number;
}

// Service functions
export const couponService = {
  // Validate a coupon code
  validateCoupon: async (code: string, amount: number): Promise<CouponValidationResult> => {
    try {
      const response = await apiClient.post('/coupons/validate', {
        code,
        amount,
      });
      return response.data;
    } catch (error) {
      // For demo purposes, we'll simulate coupon validation
      // In a real implementation, this would be handled by the API
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Check if the coupon exists in our sample data
      const coupon = sampleCoupons.find(c => 
        c.code.toLowerCase() === code.toLowerCase() && 
        c.isActive &&
        new Date(c.validFrom) <= new Date() &&
        new Date(c.validUntil) >= new Date() &&
        (!c.minPurchase || c.minPurchase <= amount) &&
        (!c.usageLimit || c.usageCount < c.usageLimit)
      );
      
      if (!coupon) {
        return {
          valid: false,
          message: 'Invalid or expired coupon code',
        };
      }
      
      // Calculate discount amount
      let discountAmount = 0;
      if (coupon.discountType === 'percentage') {
        discountAmount = (amount * coupon.discountValue) / 100;
        if (coupon.maxDiscount && discountAmount > coupon.maxDiscount) {
          discountAmount = coupon.maxDiscount;
        }
      } else {
        discountAmount = coupon.discountValue;
        if (discountAmount > amount) {
          discountAmount = amount;
        }
      }
      
      return {
        valid: true,
        coupon,
        discountAmount,
        message: 'Coupon applied successfully',
      };
    }
  },
  
  // Get all active coupons
  getActiveCoupons: async () => {
    try {
      const response = await apiClient.get('/coupons/active');
      return response.data;
    } catch (error) {
      // For demo purposes, we'll return sample data
      return sampleCoupons.filter(c => 
        c.isActive && 
        new Date(c.validFrom) <= new Date() && 
        new Date(c.validUntil) >= new Date()
      );
    }
  },
};

// Sample data for demonstration purposes
const sampleCoupons: Coupon[] = [
  {
    _id: '1',
    code: 'WELCOME10',
    description: '10% off on your first booking',
    discountType: 'percentage',
    discountValue: 10,
    minPurchase: 5000,
    maxDiscount: 2000,
    validFrom: '2023-01-01T00:00:00Z',
    validUntil: '2024-12-31T23:59:59Z',
    usageLimit: 1,
    usageCount: 0,
    isActive: true,
  },
  {
    _id: '2',
    code: 'SUMMER2023',
    description: '₹1000 off on summer treks',
    discountType: 'fixed',
    discountValue: 1000,
    minPurchase: 10000,
    validFrom: '2023-04-01T00:00:00Z',
    validUntil: '2023-06-30T23:59:59Z',
    usageCount: 0,
    isActive: true,
  },
  {
    _id: '3',
    code: 'MONSOON15',
    description: '15% off on monsoon treks',
    discountType: 'percentage',
    discountValue: 15,
    minPurchase: 8000,
    maxDiscount: 3000,
    validFrom: '2023-07-01T00:00:00Z',
    validUntil: '2023-09-30T23:59:59Z',
    usageCount: 0,
    isActive: true,
  },
];
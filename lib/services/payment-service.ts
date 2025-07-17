import apiClient from '../api-client';

// Types
export interface PaymentOrder {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
  status: string;
  bookingId: string;
}

export interface PaymentVerification {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

// Service functions
export const paymentService = {
  // Create a new payment order
  createPaymentOrder: async (bookingId: string, amount: number) => {
    const response = await apiClient.post('/payments/create-order', {
      bookingId,
      amount,
    });
    return response.data;
  },

  // Verify payment
  verifyPayment: async (paymentData: PaymentVerification, bookingId: string) => {
    const response = await apiClient.post('/payments/verify', {
      ...paymentData,
      bookingId,
    });
    return response.data;
  },

  // Get payment details for a booking
  getPaymentDetailsByBooking: async (bookingId: string) => {
    const response = await apiClient.get(`/payments/booking/${bookingId}`);
    return response.data;
  },
};
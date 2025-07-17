import apiClient from '../api-client';

// Types
export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  packageId?: string;
  participants: number;
  travelDate: string;
  specialRequirements?: string;
}

export interface Booking {
  _id: string;
  bookingId: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  package?: {
    _id: string;
    name: string;
    duration: string;
    location: string;
  };
  bookingDate: string;
  travelDate: string;
  participants: number;
  totalAmount: number;
  paidAmount: number;
  status: 'Pending' | 'Confirmed' | 'Cancelled' | 'Completed';
  paymentStatus: 'Pending' | 'Partial' | 'Completed';
  specialRequirements?: string;
}

// Service functions
export const bookingService = {
  // Create a new booking
  createBooking: async (bookingData: BookingFormData) => {
    const response = await apiClient.post('/bookings/create', bookingData);
    return response.data;
  },

  // Get booking by ID
  getBookingById: async (id: string) => {
    const response = await apiClient.get(`/bookings/${id}`);
    return response.data;
  },

  // Update booking status
  updateBookingStatus: async (id: string, status: string) => {
    const response = await apiClient.put(`/bookings/${id}`, { status });
    return response.data;
  },

  // Cancel booking
  cancelBooking: async (id: string, reason: string) => {
    const response = await apiClient.put(`/bookings/${id}/cancel`, { reason });
    return response.data;
  },
};
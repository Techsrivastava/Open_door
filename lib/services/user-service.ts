import apiClient from '../api-client';
import { Booking } from './booking-service';

// Types
export interface Favorite {
  _id: string;
  userId: string;
  packageId: string;
  package: {
    _id: string;
    name: string;
    location: string;
    duration: string;
    price: number;
    image?: string;
  };
  createdAt: string;
}

export interface Notification {
  _id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  createdAt: string;
  relatedTo?: {
    type: 'booking' | 'payment' | 'offer' | 'system';
    id?: string;
  };
}

export interface Invoice {
  _id: string;
  invoiceNumber: string;
  userId: string;
  bookingId: string;
  booking: Booking;
  amount: number;
  tax: number;
  discount: number;
  totalAmount: number;
  status: 'paid' | 'pending' | 'cancelled';
  paymentMethod?: string;
  paymentId?: string;
  createdAt: string;
  dueDate?: string;
}

// Service functions
export const userService = {
  // Get user's bookings
  getUserBookings: async (userId: string): Promise<Booking[]> => {
    const response = await apiClient.get(`/users/${userId}/bookings`);
    return response.data;
  },

  // Get user's favorites
  getUserFavorites: async (userId: string): Promise<Favorite[]> => {
    const response = await apiClient.get(`/users/${userId}/favorites`);
    return response.data;
  },

  // Add package to favorites
  addToFavorites: async (userId: string, packageId: string): Promise<Favorite> => {
    const response = await apiClient.post(`/users/${userId}/favorites`, { packageId });
    return response.data;
  },

  // Remove package from favorites
  removeFromFavorites: async (userId: string, favoriteId: string): Promise<void> => {
    await apiClient.delete(`/users/${userId}/favorites/${favoriteId}`);
  },

  // Get user's notifications
  getUserNotifications: async (userId: string): Promise<Notification[]> => {
    const response = await apiClient.get(`/users/${userId}/notifications`);
    return response.data;
  },

  // Mark notification as read
  markNotificationAsRead: async (userId: string, notificationId: string): Promise<Notification> => {
    const response = await apiClient.put(`/users/${userId}/notifications/${notificationId}/read`);
    return response.data;
  },

  // Mark all notifications as read
  markAllNotificationsAsRead: async (userId: string): Promise<void> => {
    await apiClient.put(`/users/${userId}/notifications/read-all`);
  },

  // Get user's invoices
  getUserInvoices: async (userId: string): Promise<Invoice[]> => {
    const response = await apiClient.get(`/users/${userId}/invoices`);
    return response.data;
  },

  // Get invoice by ID
  getInvoiceById: async (userId: string, invoiceId: string): Promise<Invoice> => {
    const response = await apiClient.get(`/users/${userId}/invoices/${invoiceId}`);
    return response.data;
  },

  // Download invoice
  downloadInvoice: async (invoiceId: string): Promise<Blob> => {
    const response = await apiClient.get(`/invoices/${invoiceId}/download`, {
      responseType: 'blob'
    });
    
    // Create a download link and trigger download
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `invoice-${invoiceId}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    
    return response.data;
  },
};
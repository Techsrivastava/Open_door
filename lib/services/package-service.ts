import apiClient from '../api-client';

// Types
export interface Package {
  _id: string;
  name: string;
  description: string;
  duration: string;
  location: string;
  price: number;
  images: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  difficulty: string;
  maxGroupSize: number;
  startDates: string[];
  status: 'Active' | 'Inactive';
}

export interface PackageFilter {
  location?: string;
  difficulty?: string;
  duration?: string;
  minPrice?: number;
  maxPrice?: number;
  status?: string;
}

// Service functions
export const packageService = {
  // Get all packages with optional filtering
  getAllPackages: async (filters?: PackageFilter) => {
    const response = await apiClient.get('/packages', { params: filters });
    return response.data;
  },

  // Get package by ID
  getPackageById: async (id: string) => {
    const response = await apiClient.get(`/packages/${id}`);
    return response.data;
  },

  // Get packages by category
  getPackagesByCategory: async (categoryId: string) => {
    const response = await apiClient.get(`/packages/category/${categoryId}`);
    return response.data;
  },
};
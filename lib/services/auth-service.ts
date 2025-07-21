import apiClient from '../api-client';

// Types
export interface UserRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
}

export interface UserLoginData {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatar?: string;
  createdAt: string;
  membershipLevel?: 'basic' | 'premium' | 'vip';
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Service functions
export const authService = {
  // Register a new user
  register: async (userData: UserRegistrationData): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/register', userData);
    if (response.data.token) {
      localStorage.setItem('auth_token', response.data.token);
    }
    return response.data;
  },

  // Login user
  login: async (credentials: UserLoginData): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('auth_token', response.data.token);
    }
    return response.data;
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('auth_token');
  },

  // Get current user profile
  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get('/auth/me');
    return response.data;
  },

  // Update user profile
  updateProfile: async (userId: string, profileData: Partial<User>): Promise<User> => {
    const response = await apiClient.put(`/users/${userId}`, profileData);
    return response.data;
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('auth_token');
  },

  // Request password reset
  requestPasswordReset: async (email: string): Promise<{ message: string }> => {
    const response = await apiClient.post('/auth/request-password-reset', { email });
    return response.data;
  },

  // Reset password with token
  resetPassword: async (token: string, newPassword: string): Promise<{ message: string }> => {
    const response = await apiClient.post('/auth/reset-password', { token, newPassword });
    return response.data;
  },
};
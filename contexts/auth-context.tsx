'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import apiService from '@/lib/services/api-service';

interface User {
  _id: string;
  customerId?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  avatar?: string;
  status?: string;
  isVerified?: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  // OTP-based authentication
  sendRegistrationOTP: (phone: string) => Promise<{ customerId: string }>;
  verifyRegistrationOTP: (customerId: string, otp: string) => Promise<User>;
  sendLoginOTP: (phone: string) => Promise<{ customerId: string }>;
  verifyLoginOTP: (customerId: string, otp: string) => Promise<User>;
  // Legacy email/password (for demo)
  login: (email: string, password: string) => Promise<void>;
  register: (firstName: string, lastName: string, email: string, password: string, phone?: string) => Promise<void>;
  logout: () => void;
  updateUserProfile: (userData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = apiService.getAuthToken();
        if (token) {
          // Try to get user profile if token exists
          // For now, we'll use localStorage to store user data
          const userData = localStorage.getItem('userData');
          if (userData) {
            setUser(JSON.parse(userData));
          }
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        // If token is invalid, clear it
        apiService.clearAuthToken();
        localStorage.removeItem('userData');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // OTP-based authentication methods
  const sendRegistrationOTP = async (phone: string) => {
    setIsLoading(true);
    try {
      const response = await apiService.sendRegistrationOTP(phone);
      toast({
        title: 'OTP Sent',
        description: 'OTP has been sent to your phone number.',
      });
      return { customerId: response.customerId };
    } catch (error: any) {
      console.error('Failed to send OTP:', error);
      toast({
        title: 'Failed to send OTP',
        description: error.message || 'Could not send OTP',
        variant: 'destructive',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyRegistrationOTP = async (customerId: string, otp: string) => {
    setIsLoading(true);
    try {
      const response = await apiService.verifyRegistrationOTP(customerId, otp);
      const userData = {
        _id: customerId,
        customerId: response.data.customerId,
        phone: response.data.phone,
        status: response.data.status,
        isVerified: response.data.isVerified,
      };
      setUser(userData);
      localStorage.setItem('userData', JSON.stringify(userData));
      toast({
        title: 'Registration successful',
        description: 'Please complete your profile.',
      });
      return userData;
    } catch (error: any) {
      console.error('Failed to verify OTP:', error);
      toast({
        title: 'Verification failed',
        description: error.message || 'Invalid OTP',
        variant: 'destructive',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const sendLoginOTP = async (phone: string) => {
    setIsLoading(true);
    try {
      const response = await apiService.sendLoginOTP(phone);
      toast({
        title: 'OTP Sent',
        description: 'OTP has been sent to your phone number.',
      });
      return { customerId: response.customerId };
    } catch (error: any) {
      console.error('Failed to send login OTP:', error);
      toast({
        title: 'Failed to send OTP',
        description: error.message || 'Could not send OTP',
        variant: 'destructive',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyLoginOTP = async (customerId: string, otp: string) => {
    setIsLoading(true);
    try {
      const response = await apiService.verifyLoginOTP(customerId, otp);
      const userData = {
        _id: customerId,
        customerId: response.data.customerId,
        name: response.data.name,
        phone: response.data.phone,
        status: response.data.status,
        isVerified: true,
      };
      setUser(userData);
      localStorage.setItem('userData', JSON.stringify(userData));
      toast({
        title: 'Login successful',
        description: `Welcome back, ${response.data.name}!`,
      });
      return userData;
    } catch (error: any) {
      console.error('Failed to verify login OTP:', error);
      toast({
        title: 'Login failed',
        description: error.message || 'Invalid OTP',
        variant: 'destructive',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Legacy demo login (for testing)
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock/demo login: only accept demo credentials
      if (email === 'demo@example.com' && password === 'demo123') {
        const mockUser = {
          _id: '1',
          customerId: 'C-1234',
          firstName: 'Demo',
          lastName: 'User',
          name: 'Demo User',
          email: 'demo@example.com',
          phone: '7999817080',
          status: 'Active',
          isVerified: true,
        };
        setUser(mockUser);
        localStorage.setItem('userData', JSON.stringify(mockUser));
        toast({
          title: 'Login successful',
          description: `Welcome back, Demo!`,
        });
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error: any) {
      console.error('Login failed:', error);
      toast({
        title: 'Login failed',
        description: error.message || 'Invalid credentials',
        variant: 'destructive',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (firstName: string, lastName: string, email: string, password: string, phone?: string) => {
    setIsLoading(true);
    try {
      // Mock registration for demo
      const mockUser = {
        _id: '2',
        customerId: 'C-5678',
        firstName,
        lastName,
        name: `${firstName} ${lastName}`,
        email,
        phone: phone || '7999817080',
        status: 'Active',
        isVerified: true,
      };
      setUser(mockUser);
      localStorage.setItem('userData', JSON.stringify(mockUser));
      toast({
        title: 'Registration successful',
        description: `Welcome, ${firstName}!`,
      });
    } catch (error: any) {
      console.error('Registration failed:', error);
      toast({
        title: 'Registration failed',
        description: error.message || 'Could not create account',
        variant: 'destructive',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    apiService.clearAuthToken();
    localStorage.removeItem('userData');
    setUser(null);
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
  };

  const updateUserProfile = async (userData: Partial<User>) => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      // For demo, just update local state
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('userData', JSON.stringify(updatedUser));
      toast({
        title: 'Profile updated',
        description: 'Your profile has been successfully updated.',
      });
    } catch (error: any) {
      console.error('Profile update failed:', error);
      toast({
        title: 'Update failed',
        description: error.message || 'Could not update profile',
        variant: 'destructive',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        sendRegistrationOTP,
        verifyRegistrationOTP,
        sendLoginOTP,
        verifyLoginOTP,
        login,
        register,
        logout,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Icons } from '@/components/icons';
import apiService from '@/lib/services/api-service';
import { useAuth } from '@/contexts/auth-context';

const bookingSchema = z.object({
  travelDate: z.string().min(1, 'Travel date is required'),
  numberOfPeople: z.number().min(1, 'At least 1 person is required').max(20, 'Maximum 20 people allowed'),
  customerDetails: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    phone: z.string().min(10, 'Valid phone number is required'),
    email: z.string().email('Valid email is required'),
    address: z.string().optional(),
    specialRequirements: z.string().optional(),
  }),
  paymentMethod: z.enum(['online', 'offline']),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  packageId: string;
  packageDetails?: {
    name: string;
    price: number;
    duration: number;
    location: string;
    description: string;
  };
}

export default function BookingForm({ packageId, packageDetails }: BookingFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [packageInfo, setPackageInfo] = useState(packageDetails);
  const [totalAmount, setTotalAmount] = useState(0);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      travelDate: '',
      numberOfPeople: 1,
      customerDetails: {
        name: user?.name || user?.firstName || '',
        phone: user?.phone || '',
        email: user?.email || '',
        address: '',
        specialRequirements: '',
      },
      paymentMethod: 'online',
    },
  });

  const numberOfPeople = form.watch('numberOfPeople');

  // Fetch package details if not provided
  useEffect(() => {
    if (!packageInfo && packageId) {
      fetchPackageDetails();
    }
  }, [packageId, packageInfo]);

  // Calculate total amount when number of people changes
  useEffect(() => {
    if (packageInfo) {
      setTotalAmount(packageInfo.price * numberOfPeople);
    }
  }, [numberOfPeople, packageInfo]);

  const fetchPackageDetails = async () => {
    try {
      const response = await apiService.getPackageById(packageId);
      setPackageInfo(response.data);
    } catch (error) {
      console.error('Failed to fetch package details:', error);
      toast({
        title: 'Error',
        description: 'Failed to load package details. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handlePayment = async (bookingId: string) => {
    try {
      // Create payment order
      const orderResponse = await apiService.createPaymentOrder(bookingId, totalAmount);
      
      // Configure Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderResponse.data.amount,
        currency: orderResponse.data.currency,
        order_id: orderResponse.data.orderId,
        name: 'Trippy India',
        description: `Payment for ${packageInfo?.name}`,
        handler: async function (response: any) {
          try {
            // Verify payment
            const verificationResult = await apiService.verifyPayment({
              ...response,
              bookingId
            });
            
            if (verificationResult.success) {
              toast({
                title: 'Payment successful!',
                description: 'Your booking has been confirmed.',
              });
              router.push('/profile/bookings');
            } else {
              toast({
                title: 'Payment verification failed!',
                description: 'Please contact support.',
                variant: 'destructive',
              });
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            toast({
              title: 'Error verifying payment',
              description: 'Please contact support.',
              variant: 'destructive',
            });
          }
        },
        prefill: {
          name: form.getValues('customerDetails.name'),
          email: form.getValues('customerDetails.email'),
          contact: form.getValues('customerDetails.phone')
        },
        theme: {
          color: '#3399cc'
        },
        modal: {
          ondismiss: function() {
            setIsLoading(false);
          }
        }
      };

      // Initialize Razorpay
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment initiation error:', error);
      toast({
        title: 'Error initiating payment',
        description: 'Please try again.',
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: BookingFormData) => {
    if (!user) {
      toast({
        title: 'Please login',
        description: 'You need to be logged in to make a booking.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      const bookingData = {
        packageId,
        customerId: user._id,
        travelDate: data.travelDate,
        numberOfPeople: data.numberOfPeople,
        totalAmount,
        customerDetails: data.customerDetails,
        paymentMethod: data.paymentMethod,
      };

      const response = await apiService.createBooking(bookingData);
      
      if (response.success) {
        const bookingId = response.data.bookingId;
        
        if (data.paymentMethod === 'online') {
          await handlePayment(bookingId);
        } else {
          toast({
            title: 'Booking created successfully',
            description: 'We will contact you for payment details.',
          });
          router.push('/profile/bookings');
        }
      }
    } catch (error: any) {
      console.error('Booking error:', error);
      toast({
        title: 'Booking failed',
        description: error.message || 'Could not create booking. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!packageInfo) {
    return (
      <Card>
        <CardContent className="flex justify-center py-10">
          <div className="flex flex-col items-center space-y-4">
            <Icons.spinner className="h-8 w-8 animate-spin text-primary" />
            <p>Loading package details...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Package Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Package Summary</CardTitle>
          <CardDescription>{packageInfo.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label className="text-sm font-medium text-muted-foreground">Location</Label>
              <p className="text-lg font-semibold">{packageInfo.location}</p>
            </div>
            <div>
              <Label className="text-sm font-medium text-muted-foreground">Duration</Label>
              <p className="text-lg font-semibold">{packageInfo.duration} days</p>
            </div>
            <div>
              <Label className="text-sm font-medium text-muted-foreground">Price per person</Label>
              <p className="text-lg font-semibold">₹{packageInfo.price.toLocaleString()}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Booking Form */}
      <Card>
        <CardHeader>
          <CardTitle>Booking Details</CardTitle>
          <CardDescription>Fill in your travel details</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="travelDate">Travel Date</Label>
                <Input
                  id="travelDate"
                  type="date"
                  {...form.register('travelDate')}
                  min={new Date().toISOString().split('T')[0]}
                />
                {form.formState.errors.travelDate && (
                  <p className="text-sm text-red-500 mt-1">{form.formState.errors.travelDate.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="numberOfPeople">Number of People</Label>
                <Input
                  id="numberOfPeople"
                  type="number"
                  min="1"
                  max="20"
                  {...form.register('numberOfPeople', { valueAsNumber: true })}
                />
                {form.formState.errors.numberOfPeople && (
                  <p className="text-sm text-red-500 mt-1">{form.formState.errors.numberOfPeople.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Customer Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" {...form.register('customerDetails.name')} />
                  {form.formState.errors.customerDetails?.name && (
                    <p className="text-sm text-red-500 mt-1">{form.formState.errors.customerDetails.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" {...form.register('customerDetails.phone')} />
                  {form.formState.errors.customerDetails?.phone && (
                    <p className="text-sm text-red-500 mt-1">{form.formState.errors.customerDetails.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...form.register('customerDetails.email')} />
                {form.formState.errors.customerDetails?.email && (
                  <p className="text-sm text-red-500 mt-1">{form.formState.errors.customerDetails.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="address">Address (Optional)</Label>
                <Textarea id="address" {...form.register('customerDetails.address')} />
              </div>

              <div>
                <Label htmlFor="specialRequirements">Special Requirements (Optional)</Label>
                <Textarea id="specialRequirements" {...form.register('customerDetails.specialRequirements')} />
              </div>
            </div>

            <div>
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Select onValueChange={(value) => form.setValue('paymentMethod', value as 'online' | 'offline')}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online">Online Payment</SelectItem>
                  <SelectItem value="offline">Offline Payment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Total Amount */}
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total Amount:</span>
                <span>₹{totalAmount.toLocaleString()}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {numberOfPeople} person(s) × ₹{packageInfo.price.toLocaleString()}
              </p>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  {form.watch('paymentMethod') === 'online' ? 'Processing Payment...' : 'Creating Booking...'}
                </>
              ) : (
                `Book Now - ₹${totalAmount.toLocaleString()}`
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
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

const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  packageId: z.string().optional(),
  preferredDate: z.string().optional(),
  numberOfPeople: z.number().min(1).max(20).optional(),
  budget: z.string().optional(),
  travelType: z.enum(['leisure', 'business', 'adventure', 'family', 'other']).optional(),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

interface InquiryFormProps {
  packageId?: string;
  packageName?: string;
  className?: string;
}

export default function InquiryForm({ packageId, packageName, className }: InquiryFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      packageId,
      preferredDate: '',
      numberOfPeople: 1,
      budget: '',
      travelType: 'leisure',
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsLoading(true);

    try {
      const inquiryData = {
        ...data,
        packageId: packageId || undefined,
        numberOfPeople: data.numberOfPeople || undefined,
      };

      const response = await apiService.createInquiry(inquiryData);
      
      if (response.success) {
        setIsSubmitted(true);
        form.reset();
        toast({
          title: 'Inquiry submitted successfully!',
          description: 'We will get back to you within 24 hours.',
        });
      }
    } catch (error: any) {
      console.error('Inquiry submission error:', error);
      toast({
        title: 'Failed to submit inquiry',
        description: error.message || 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={className}>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
            <Icons.check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">Inquiry Submitted!</h3>
          <p className="text-center text-muted-foreground mb-6">
            Thank you for your inquiry. Our travel experts will contact you within 24 hours with personalized recommendations.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Send Another Inquiry
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Get a Quote</CardTitle>
        <CardDescription>
          {packageName 
            ? `Inquire about ${packageName}`
            : 'Tell us about your travel plans and we\'ll get back to you with a personalized quote'
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" {...form.register('name')} placeholder="Enter your full name" />
              {form.formState.errors.name && (
                <p className="text-sm text-red-500 mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" {...form.register('phone')} placeholder="Enter your phone number" />
              {form.formState.errors.phone && (
                <p className="text-sm text-red-500 mt-1">{form.formState.errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" {...form.register('email')} placeholder="Enter your email" />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500 mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>

          {!packageId && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferredDate">Preferred Travel Date</Label>
                  <Input 
                    id="preferredDate" 
                    type="date" 
                    {...form.register('preferredDate')}
                    min={new Date().toISOString().split('T')[0]}
                  />
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
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select onValueChange={(value) => form.setValue('budget', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10000">Under ₹10,000</SelectItem>
                      <SelectItem value="10000-25000">₹10,000 - ₹25,000</SelectItem>
                      <SelectItem value="25000-50000">₹25,000 - ₹50,000</SelectItem>
                      <SelectItem value="50000-100000">₹50,000 - ₹1,00,000</SelectItem>
                      <SelectItem value="above-100000">Above ₹1,00,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="travelType">Type of Travel</Label>
                  <Select onValueChange={(value) => form.setValue('travelType', value as any)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select travel type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leisure">Leisure</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="adventure">Adventure</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </>
          )}

          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea 
              id="message" 
              {...form.register('message')} 
              placeholder={
                packageName 
                  ? `Tell us about your requirements for ${packageName}...`
                  : 'Tell us about your travel plans, preferences, and any special requirements...'
              }
              className="min-h-[120px]"
            />
            {form.formState.errors.message && (
              <p className="text-sm text-red-500 mt-1">{form.formState.errors.message.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Send Inquiry'
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our terms and privacy policy.
          </p>
        </form>
      </CardContent>
    </Card>
  );
} 
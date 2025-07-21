'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import ProfileInfo from '@/components/profile/profile-info';
import BookingHistory from '@/components/profile/booking-history';
import FavoritesList from '@/components/profile/favorites-list';
import InvoicesList from '@/components/profile/invoices-list';
import NotificationsList from '@/components/profile/notifications-list';

export default function ProfilePage() {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('profile');

  // Redirect to login if not authenticated
  if (!isLoading && !isAuthenticated) {
    router.push('/login');
    return null;
  }

  if (isLoading) {
    return (
      <div className="container py-10 flex justify-center items-center min-h-[calc(100vh-200px)]">
        <div className="flex flex-col items-center space-y-4">
          <Icons.spinner className="h-8 w-8 animate-spin text-primary" />
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Account</h1>
          <p className="text-muted-foreground">
            Manage your account settings, bookings, and preferences.
          </p>
        </div>

        <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-5 md:w-full w-full overflow-auto">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <ProfileInfo user={user!} />
          </TabsContent>

          <TabsContent value="bookings" className="space-y-4">
            <BookingHistory userId={user!._id} />
          </TabsContent>

          <TabsContent value="favorites" className="space-y-4">
            <FavoritesList userId={user!._id} />
          </TabsContent>

          <TabsContent value="invoices" className="space-y-4">
            <InvoicesList userId={user!._id} />
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <NotificationsList userId={user!._id} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { Booking } from '@/lib/services/booking-service';
import { userService } from '@/lib/services/user-service';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Icons } from '@/components/icons';
import { format } from 'date-fns';

interface BookingHistoryProps {
  userId: string;
}

export default function BookingHistory({ userId }: BookingHistoryProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await userService.getUserBookings(userId);
        setBookings(data);
      } catch (err) {
        console.error('Failed to fetch bookings:', err);
        setError('Failed to load your bookings. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, [userId]);

  // Filter bookings by status
  const upcomingBookings = bookings.filter(booking => 
    booking.status === 'confirmed' && new Date(booking.startDate) > new Date()
  );
  
  const pastBookings = bookings.filter(booking => 
    new Date(booking.startDate) < new Date() || booking.status === 'completed'
  );
  
  const cancelledBookings = bookings.filter(booking => 
    booking.status === 'cancelled'
  );

  // Format date
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-500">Confirmed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-500">Cancelled</Badge>;
      case 'completed':
        return <Badge className="bg-blue-500">Completed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Booking History</CardTitle>
          <CardDescription>View and manage your bookings</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="flex flex-col items-center space-y-4">
            <Icons.spinner className="h-8 w-8 animate-spin text-primary" />
            <p>Loading your bookings...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Booking History</CardTitle>
          <CardDescription>View and manage your bookings</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="flex flex-col items-center space-y-4">
            <Icons.warning className="h-8 w-8 text-destructive" />
            <p>{error}</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (bookings.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Booking History</CardTitle>
          <CardDescription>View and manage your bookings</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="flex flex-col items-center space-y-4">
            <Icons.calendar className="h-16 w-16 text-muted-foreground opacity-20" />
            <h3 className="text-xl font-medium">No Bookings Yet</h3>
            <p className="text-center text-muted-foreground">
              You haven't made any bookings yet. Explore our packages and start your adventure!
            </p>
            <Button>Explore Packages</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking History</CardTitle>
        <CardDescription>View and manage your bookings</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList>
            <TabsTrigger value="upcoming">
              Upcoming ({upcomingBookings.length})
            </TabsTrigger>
            <TabsTrigger value="past">
              Past ({pastBookings.length})
            </TabsTrigger>
            <TabsTrigger value="cancelled">
              Cancelled ({cancelledBookings.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingBookings.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No upcoming bookings</p>
              </div>
            ) : (
              upcomingBookings.map((booking) => (
                <div key={booking._id} className="border rounded-lg p-4 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{booking.package.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icons.calendar className="h-4 w-4" />
                        <span>
                          {formatDate(booking.startDate)} - {formatDate(booking.endDate)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                        <Icons.users className="h-4 w-4" />
                        <span>{booking.numberOfPeople} People</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      {getStatusBadge(booking.status)}
                      <span className="font-medium">₹{booking.totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <div className="text-sm text-muted-foreground">
                      Booking ID: {booking._id.substring(0, 8)}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      {booking.status === 'confirmed' && (
                        <Button variant="destructive" size="sm">
                          Cancel
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {pastBookings.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No past bookings</p>
              </div>
            ) : (
              pastBookings.map((booking) => (
                <div key={booking._id} className="border rounded-lg p-4 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{booking.package.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icons.calendar className="h-4 w-4" />
                        <span>
                          {formatDate(booking.startDate)} - {formatDate(booking.endDate)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                        <Icons.users className="h-4 w-4" />
                        <span>{booking.numberOfPeople} People</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      {getStatusBadge(booking.status)}
                      <span className="font-medium">₹{booking.totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <div className="text-sm text-muted-foreground">
                      Booking ID: {booking._id.substring(0, 8)}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Book Again
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </TabsContent>

          <TabsContent value="cancelled" className="space-y-4">
            {cancelledBookings.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No cancelled bookings</p>
              </div>
            ) : (
              cancelledBookings.map((booking) => (
                <div key={booking._id} className="border rounded-lg p-4 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{booking.package.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icons.calendar className="h-4 w-4" />
                        <span>
                          {formatDate(booking.startDate)} - {formatDate(booking.endDate)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                        <Icons.users className="h-4 w-4" />
                        <span>{booking.numberOfPeople} People</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      {getStatusBadge(booking.status)}
                      <span className="font-medium">₹{booking.totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <div className="text-sm text-muted-foreground">
                      Booking ID: {booking._id.substring(0, 8)}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Book Again
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
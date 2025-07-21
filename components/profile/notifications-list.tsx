'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/icons';
import { format, formatDistanceToNow } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import apiService from '@/lib/services/api-service';
import { useAuth } from '@/contexts/auth-context';

interface Notification {
  _id: string;
  title: string;
  message: string;
  type: string;
  isRead: boolean;
  createdAt: string;
  relatedTo?: {
    type: string;
  };
}

interface NotificationsListProps {
  userId?: string;
}

export default function NotificationsList({ userId }: NotificationsListProps) {
  const { toast } = useToast();
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentUserId = userId || user?._id;

  useEffect(() => {
    if (!currentUserId) {
      setIsLoading(false);
      return;
    }

    const fetchNotifications = async () => {
      try {
        const response = await apiService.getUserNotifications(currentUserId);
        setNotifications(response.data || []);
      } catch (err) {
        console.error('Failed to fetch notifications:', err);
        setError('Failed to load your notifications. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, [currentUserId]);

  const handleMarkAsRead = async (notificationId: string) => {
    if (!currentUserId) return;

    try {
      const response = await apiService.markNotificationAsRead(currentUserId, notificationId);
      setNotifications(notifications.map(notification => 
        notification._id === notificationId ? response.data : notification
      ));
    } catch (err) {
      console.error('Failed to mark notification as read:', err);
      toast({
        title: 'Error',
        description: 'Failed to mark notification as read. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleMarkAllAsRead = async () => {
    if (!currentUserId) return;

    try {
      await apiService.markAllNotificationsAsRead(currentUserId);
      setNotifications(notifications.map(notification => ({
        ...notification,
        isRead: true,
      })));
      toast({
        title: 'Success',
        description: 'All notifications marked as read.',
      });
    } catch (err) {
      console.error('Failed to mark all notifications as read:', err);
      toast({
        title: 'Error',
        description: 'Failed to mark all notifications as read. Please try again.',
        variant: 'destructive',
      });
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffInDays < 7) {
      return formatDistanceToNow(date, { addSuffix: true });
    } else {
      return format(date, 'MMM dd, yyyy');
    }
  };

  // Get notification icon
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'info':
        return <Icons.info className="h-5 w-5 text-blue-500" />;
      case 'success':
        return <Icons.check className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <Icons.warning className="h-5 w-5 text-yellow-500" />;
      case 'error':
        return <Icons.warning className="h-5 w-5 text-red-500" />;
      default:
        return <Icons.bell className="h-5 w-5 text-blue-500" />;
    }
  };

  if (!currentUserId) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Stay updated with your bookings and offers</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="flex flex-col items-center space-y-4">
            <Icons.user className="h-8 w-8 text-muted-foreground" />
            <p>Please log in to view your notifications</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Stay updated with your bookings and offers</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="flex flex-col items-center space-y-4">
            <Icons.spinner className="h-8 w-8 animate-spin text-primary" />
            <p>Loading your notifications...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Stay updated with your bookings and offers</CardDescription>
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

  const unreadCount = notifications.filter(notification => !notification.isRead).length;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Stay updated with your bookings and offers</CardDescription>
        </div>
        {unreadCount > 0 && (
          <Button variant="outline" size="sm" onClick={handleMarkAllAsRead}>
            Mark All as Read
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 space-y-4">
            <Icons.bell className="h-16 w-16 text-muted-foreground opacity-20" />
            <h3 className="text-xl font-medium">No Notifications</h3>
            <p className="text-center text-muted-foreground">
              You don't have any notifications yet. We'll notify you about your bookings, offers, and more.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification._id} 
                className={`flex items-start space-x-4 p-4 rounded-lg transition-colors ${notification.isRead ? 'bg-background' : 'bg-primary/5'}`}
              >
                <div className="flex-shrink-0">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">{notification.title}</h4>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(notification.createdAt)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                  {notification.relatedTo && (
                    <div className="text-xs text-muted-foreground">
                      {notification.relatedTo.type === 'booking' && 'Related to your booking'}
                      {notification.relatedTo.type === 'payment' && 'Related to your payment'}
                      {notification.relatedTo.type === 'offer' && 'Special offer for you'}
                      {notification.relatedTo.type === 'system' && 'System notification'}
                    </div>
                  )}
                </div>
                {!notification.isRead && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex-shrink-0"
                    onClick={() => handleMarkAsRead(notification._id)}
                  >
                    Mark as Read
                  </Button>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/icons';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import apiService from '@/lib/services/api-service';
import { useAuth } from '@/contexts/auth-context';

interface Invoice {
  _id: string;
  invoiceNumber: string;
  booking?: {
    package?: {
      name: string;
    };
  };
  totalAmount?: number;
  amount?: number;
  status: string;
  createdAt: string;
}

interface InvoicesListProps {
  userId?: string;
}

export default function InvoicesList({ userId }: InvoicesListProps) {
  const { toast } = useToast();
  const { user } = useAuth();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentUserId = userId || user?._id;

  useEffect(() => {
    if (!currentUserId) {
      setIsLoading(false);
      return;
    }

    const fetchInvoices = async () => {
      try {
        const response = await apiService.getUserInvoices(currentUserId);
        setInvoices(response.data || []);
      } catch (err) {
        console.error('Failed to fetch invoices:', err);
        setError('Failed to load your invoices. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInvoices();
  }, [currentUserId]);

  // Format date
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'overdue':
        return <Badge className="bg-red-100 text-red-800">Overdue</Badge>;
      case 'cancelled':
        return <Badge className="bg-gray-100 text-gray-800">Cancelled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const handleDownloadInvoice = async (invoiceId: string) => {
    try {
      const response = await apiService.downloadInvoice(invoiceId);
      // Handle file download
      if (response.data?.invoiceUrl) {
        window.open(response.data.invoiceUrl, '_blank');
      }
      toast({
        title: 'Success',
        description: 'Invoice downloaded successfully.',
      });
    } catch (err) {
      console.error('Failed to download invoice:', err);
      toast({
        title: 'Error',
        description: 'Failed to download invoice. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (!currentUserId) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
          <CardDescription>View and download your invoices</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="flex flex-col items-center space-y-4">
            <Icons.user className="h-8 w-8 text-muted-foreground" />
            <p>Please log in to view your invoices</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
          <CardDescription>View and download your invoices</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="flex flex-col items-center space-y-4">
            <Icons.spinner className="h-8 w-8 animate-spin text-primary" />
            <p>Loading your invoices...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
          <CardDescription>View and download your invoices</CardDescription>
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

  if (invoices.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
          <CardDescription>View and download your invoices</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="flex flex-col items-center space-y-4">
            <Icons.receipt className="h-16 w-16 text-muted-foreground opacity-20" />
            <h3 className="text-xl font-medium">No Invoices</h3>
            <p className="text-center text-muted-foreground">
              You don't have any invoices yet. They will appear here after you make a booking.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoices</CardTitle>
        <CardDescription>View and download your invoices</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice #</TableHead>
                <TableHead>Package</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice._id}>
                  <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
                  <TableCell>{invoice.booking?.package?.name || 'N/A'}</TableCell>
                  <TableCell>{formatDate(invoice.createdAt)}</TableCell>
                  <TableCell>₹{(invoice.totalAmount || invoice.amount || 0).toLocaleString()}</TableCell>
                  <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={() => handleDownloadInvoice(invoice._id)}
                    >
                      <Icons.download className="h-4 w-4" />
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
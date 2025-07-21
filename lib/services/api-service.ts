const API_BASE_URL = 'https://trippy-backend-qequ.onrender.com/api';

class ApiService {
  private token: string | null = null;
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Set auth token
  setAuthToken(token: string) {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  }

  // Get auth token
  getAuthToken(): string | null {
    if (!this.token && typeof window !== 'undefined') {
      this.token = localStorage.getItem('authToken');
    }
    return this.token;
  }

  // Clear auth token
  clearAuthToken() {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
  }

  // Generic request method
  async request(endpoint: string, options: RequestInit = {}): Promise<any> {
    const url = `${this.baseURL}${endpoint}`;
    const token = this.getAuthToken();
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
      },
      ...options
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || 'Request failed');
      }
      
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // File upload request
  async uploadRequest(endpoint: string, formData: FormData): Promise<any> {
    const url = `${this.baseURL}${endpoint}`;
    const token = this.getAuthToken();
    
    const config: RequestInit = {
      method: 'POST',
      headers: {
        ...(token && { 'Authorization': `Bearer ${token}` })
      },
      body: formData
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || 'Upload failed');
      }
      
      return data;
    } catch (error) {
      console.error('Upload Error:', error);
      throw error;
    }
  }

  // ===== CUSTOMER AUTHENTICATION =====
  
  async sendRegistrationOTP(phone: string) {
    return this.request('/customers/send-otp', {
      method: 'POST',
      body: JSON.stringify({ phone })
    });
  }

  async verifyRegistrationOTP(customerId: string, otp: string) {
    return this.request('/customers/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ customerId, otp })
    });
  }

  async sendLoginOTP(phone: string) {
    return this.request('/customers/login/send-otp', {
      method: 'POST',
      body: JSON.stringify({ phone })
    });
  }

  async verifyLoginOTP(customerId: string, otp: string) {
    return this.request('/customers/login/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ customerId, otp })
    });
  }

  // ===== CUSTOMER MANAGEMENT =====

  async getCustomerProfile(customerId: string) {
    return this.request(`/customers/profile/${customerId}`);
  }

  async updateCustomerProfile(customerId: string, profileData: FormData) {
    return this.uploadRequest(`/customers/profile/${customerId}`, profileData);
  }

  // ===== PACKAGE MANAGEMENT =====

  async getPackages(params: any = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/packages?${queryString}`);
  }

  async getFeaturedPackages() {
    return this.request('/packages/featured');
  }

  async getTrendingPackages() {
    return this.request('/packages/trending');
  }

  async getNewPackages() {
    return this.request('/packages/new');
  }

  async getTopRatedPackages() {
    return this.request('/packages/top-rated');
  }

  async getPackageById(id: string) {
    return this.request(`/packages/${id}`);
  }

  async getPackageBySlug(slug: string) {
    return this.request(`/packages/slug/${slug}`);
  }

  async getPackagesByCategory(categoryId: string) {
    return this.request(`/packages/category/${categoryId}`);
  }

  async getPackagesByTag(tag: string) {
    return this.request(`/packages/tag/${tag}`);
  }



  async applyCoupon(couponCode: string, packageId: string, amount: number) {
    return this.request('/packages/apply-coupon', {
      method: 'POST',
      body: JSON.stringify({ couponCode, packageId, amount })
    });
  }

  async getAvailableCoupons() {
    return this.request('/packages/available-coupons');
  }

  async getGoogleReviews() {
    return this.request('/packages/google-reviews');
  }

  // ===== BOOKING MANAGEMENT =====

  async createBooking(bookingData: any) {
    return this.request('/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData)
    });
  }

  async createBookingFromForm(bookingData: any) {
    return this.request('/bookings/create', {
      method: 'POST',
      body: JSON.stringify(bookingData)
    });
  }

  async getCustomerBookings(customerId: string) {
    return this.request(`/bookings/customer/${customerId}`);
  }

  async getAllBookings(params: any = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/bookings?${queryString}`);
  }

  async getBookingById(id: string) {
    return this.request(`/bookings/${id}`);
  }

  async updateBooking(id: string, bookingData: any) {
    return this.request(`/bookings/${id}`, {
      method: 'PUT',
      body: JSON.stringify(bookingData)
    });
  }

  async updateBookingStatus(id: string, status: string, remarks?: string) {
    return this.request(`/bookings/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status, remarks })
    });
  }

  async deleteBooking(id: string) {
    return this.request(`/bookings/${id}`, {
      method: 'DELETE'
    });
  }

  async addExpenseToBooking(bookingId: string, expenseData: any) {
    return this.request(`/bookings/${bookingId}/expenses`, {
      method: 'POST',
      body: JSON.stringify(expenseData)
    });
  }

  async getBookingExpenses(bookingId: string) {
    return this.request(`/bookings/${bookingId}/expenses`);
  }

  async getExpenseSummary() {
    return this.request('/bookings/expenses/summary');
  }

  async deleteExpense(bookingId: string, expenseId: string) {
    return this.request(`/bookings/${bookingId}/expenses/${expenseId}`, {
      method: 'DELETE'
    });
  }

  async updateExpense(bookingId: string, expenseId: string, expenseData: any) {
    return this.request(`/bookings/${bookingId}/expenses/${expenseId}`, {
      method: 'PUT',
      body: JSON.stringify(expenseData)
    });
  }

  async collectPayment(bookingId: string, paymentData: any) {
    return this.request(`/bookings/${bookingId}/payments`, {
      method: 'POST',
      body: JSON.stringify(paymentData)
    });
  }

  // ===== USER MANAGEMENT =====

  async getUserBookings(userId: string) {
    return this.request(`/users/${userId}/bookings`);
  }

  async getUserFavorites(userId: string) {
    return this.request(`/users/${userId}/favorites`);
  }

  async addToFavorites(userId: string, packageId: string) {
    return this.request(`/users/${userId}/favorites`, {
      method: 'POST',
      body: JSON.stringify({ packageId })
    });
  }

  async removeFromFavorites(userId: string, favoriteId: string) {
    return this.request(`/users/${userId}/favorites/${favoriteId}`, {
      method: 'DELETE'
    });
  }

  async getUserNotifications(userId: string) {
    return this.request(`/users/${userId}/notifications`);
  }

  async markNotificationAsRead(userId: string, notificationId: string) {
    return this.request(`/users/${userId}/notifications/${notificationId}/read`, {
      method: 'PUT'
    });
  }

  async markAllNotificationsAsRead(userId: string) {
    return this.request(`/users/${userId}/notifications/read-all`, {
      method: 'PUT'
    });
  }

  async getUserInvoices(userId: string) {
    return this.request(`/users/${userId}/invoices`);
  }

  async getInvoiceById(userId: string, invoiceId: string) {
    return this.request(`/users/${userId}/invoices/${invoiceId}`);
  }

  async downloadInvoice(invoiceId: string) {
    return this.request(`/invoices/${invoiceId}/download`);
  }

  async updateUserProfile(userId: string, profileData: any) {
    return this.request(`/users/${userId}/profile`, {
      method: 'PUT',
      body: JSON.stringify(profileData)
    });
  }

  // ===== INQUIRY MANAGEMENT =====

  async createInquiry(inquiryData: any) {
    return this.request('/inquiries/create', {
      method: 'POST',
      body: JSON.stringify(inquiryData)
    });
  }

  async getAllInquiries(params: any = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/inquiries?${queryString}`);
  }

  async getInquiryStats() {
    return this.request('/inquiries/stats');
  }

  async getInquiryById(id: string) {
    return this.request(`/inquiries/${id}`);
  }

  async updateInquiryStatus(id: string, status: string, notes?: string) {
    return this.request(`/inquiries/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status, notes })
    });
  }

  async deleteInquiry(id: string) {
    return this.request(`/inquiries/${id}`, {
      method: 'DELETE'
    });
  }

  // ===== PAYMENT INTEGRATION =====

  async createPaymentOrder(bookingId: string, amount: number) {
    return this.request('/payments/create-order', {
      method: 'POST',
      body: JSON.stringify({ bookingId, amount })
    });
  }

  async verifyPayment(paymentData: any) {
    return this.request('/payments/verify', {
      method: 'POST',
      body: JSON.stringify(paymentData)
    });
  }

  async getPaymentDetails(bookingId: string) {
    return this.request(`/payments/booking/${bookingId}`);
  }

  // ===== INVOICE MANAGEMENT =====

  async generateInvoice(bookingId: string) {
    return this.request(`/invoices/${bookingId}`);
  }

  async getInvoiceURL(bookingId: string) {
    return this.request(`/invoices/url/${bookingId}`);
  }

  // ===== ADMIN PANEL =====

  async adminLogin(email: string, password: string) {
    return this.request('/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  }

  async createPackage(packageData: any) {
    return this.request('/admin/packages', {
      method: 'POST',
      body: JSON.stringify(packageData)
    });
  }

  async updatePackage(id: string, packageData: any) {
    return this.request(`/admin/packages/${id}`, {
      method: 'PUT',
      body: JSON.stringify(packageData)
    });
  }

  async updateBookingStatusAdmin(id: string, status: string, remarks?: string) {
    return this.request(`/admin/bookings/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status, remarks })
    });
  }
}

export default new ApiService(); 
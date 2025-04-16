export interface Notification {
    notificationId: number;
    userId: number;
    type: 'Booking' | 'Payment' | 'Support';
    message: string;
    timestamp: string;
    status: 'Read' | 'Unread';
  }
  
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications = [
    {
      notificationID: 1,
      userID: 101,
      type: 'Booking',
      message: 'Your hotel booking has been confirmed.',
      timestamp: new Date(),
      status: 'Unread'
    },
    {
      notificationID: 2,
      userID: 101,
      type: 'Payment',
      message: 'Your payment of ₹4500 was successful.',
      timestamp: new Date(),
      status: 'Read'
    }
  ];

  markAsRead(notification: any): void {
    notification.status = 'Read';
  }
}

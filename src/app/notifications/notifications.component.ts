import { Component, OnInit } from '@angular/core';
import { NotificationService } from './../core/services/notification.service';
import { Notification } from './../models/notification.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  userId = 1; // Replace with logged-in user ID

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.loadNotifications();
  }

  loadNotifications() {
    this.notificationService.getNotifications(this.userId).subscribe(data => {
      this.notifications = data;
    });
  }

  markAsRead(notificationId: number) {
    this.notificationService.markAsRead(notificationId).subscribe(() => {
      const notification = this.notifications.find(n => n.notificationID === notificationId);
      if (notification) notification.status = 'Read';
    });
  }
}

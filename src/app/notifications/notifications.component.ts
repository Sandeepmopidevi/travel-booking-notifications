import { Component, OnInit } from '@angular/core';
import { NotificationService } from './../core/services/notification.service';
import { Notification } from './../models/notification.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class NotificationsComponent implements OnInit {
clearAll() {
this.notifications = [];
}
  notifications: Notification[] = [];
  userId = 1;

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

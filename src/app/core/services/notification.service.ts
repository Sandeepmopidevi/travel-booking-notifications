import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'https://localhost:5001/api/notifications';

  constructor(private http: HttpClient) {}

  getUserNotifications(userId: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.apiUrl}/user/${userId}`);
  }

  markAsRead(notificationId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${notificationId}/read`, {});
  }
}

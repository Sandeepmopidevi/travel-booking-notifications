import { Routes } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component';
import { NgTemplateOutlet } from '@angular/common';

export const appRoutes: Routes = [
  { path: 'notifications', component: NotificationsComponent },
  { path: '', redirectTo: 'notifications', pathMatch: 'full' }
];

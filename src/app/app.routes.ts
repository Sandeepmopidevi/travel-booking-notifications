import { Routes } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'notifications',
    pathMatch: 'full'
  },
  {
    path: 'notifications',
    loadComponent: () =>
      import('./notifications/notifications.component').then(m => m.NotificationsComponent)
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'launches/:id',
    loadComponent: () =>
      import('./pages/launch-details/launch-details.component').then(
        (m) => m.LaunchDetailsComponent
      ),
  },
];

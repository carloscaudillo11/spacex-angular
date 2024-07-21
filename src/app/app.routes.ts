import { Routes } from '@angular/router';
import { LaunchResolver } from './core/resolvers/launch.service';
import { LaunchesResolver } from './core/resolvers/launches.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Lanzamientos',
    resolve: {
      launches: LaunchesResolver,
    },
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/launch-details/launch-details.component').then(
        (m) => m.LaunchDetailsComponent
      ),
    title: 'Detalles de lanzamiento',
    resolve: {
      launch: LaunchResolver,
    },
  },
];

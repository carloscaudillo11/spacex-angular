import { Routes } from '@angular/router';
import { LaunchDetailsComponent } from './shared/components/launch-details/launch-details.component';

export const routes: Routes = [
    {
        path: '/launches/:id',
        component: LaunchDetailsComponent
    }
];

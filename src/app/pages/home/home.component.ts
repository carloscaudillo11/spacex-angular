import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../../layouts/layout/layout.component';
import { LaunchesComponent } from '../../shared/components/launches/launches.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, LaunchesComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}

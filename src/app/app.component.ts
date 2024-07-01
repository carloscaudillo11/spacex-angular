import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LaunchesComponent } from './shared/components/launches/launches.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, LaunchesComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'spacex-angular';
}

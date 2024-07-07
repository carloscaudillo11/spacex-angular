import { Component, Input } from '@angular/core';
import { LayoutComponent } from '../../layouts/layout/layout.component';
import { RouterOutlet } from '@angular/router';
import { LaunchComponent } from '../../shared/components/launch/launch.component';

@Component({
  selector: 'app-launch-details',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet, LaunchComponent],
  templateUrl: './launch-details.component.html',
})
export class LaunchDetailsComponent {
  @Input('id') id!: string;
}

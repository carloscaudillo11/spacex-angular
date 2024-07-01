import { Component, Input } from '@angular/core';
import { LayoutComponent } from '../../../layouts/layout/layout.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-launch-details',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './launch-details.component.html'
})
export class LaunchDetailsComponent {
  @Input('id') launchId!: string;
}

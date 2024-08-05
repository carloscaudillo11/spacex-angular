import { Component, input } from '@angular/core';
import { Doc } from '../../../core/types';

@Component({
  selector: 'card-launch',
  standalone: true,
  imports: [],
  templateUrl: './card-launch.component.html'
})
export class CardLaunchComponent {
  launch = input<Doc>({} as Doc);
}

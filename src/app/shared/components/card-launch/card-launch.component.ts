import { CommonModule } from '@angular/common';
import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'card-launch',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './card-launch.component.html',
})
export class CardLaunchComponent {
  id = input('');
  img = input('');
  success = input(false);
  flightNumber = input(0);
  details = input<string | null>('');

  successText = computed(() => (this.success() ? 'success' : 'failed'));

  classList = computed(() => ({
    'text-xs': true,
    'font-semibold': true,
    'mr-2': true,
    'px-2.5': true,
    'py-0.5': true,
    'rounded': true,
    'bg-green-400': this.success(),
    'text-green-900': this.success(),
    'bg-red-400': !this.success(),
    'text-red-900': !this.success(),
  }));
}

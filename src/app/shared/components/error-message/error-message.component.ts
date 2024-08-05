import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'error-message',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './error-message.component.html'
})
export class ErrorMessageComponent {
  message = input<string>('');
}

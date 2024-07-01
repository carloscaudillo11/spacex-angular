import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'header-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-button.component.html'
})
export class HeaderButtonComponent {
  @Input() link = "";
}

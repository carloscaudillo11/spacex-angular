import { Component } from '@angular/core';
import { HeaderButtonComponent } from '../../../layouts/header-button/header-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderButtonComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}

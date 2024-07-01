import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

}

import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'card-launch',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './card-launch.component.html'
})
export class CardLaunchComponent implements OnChanges {
  @Input() id = "";
  @Input() img = "";
  @Input() success = false;
  @Input() flightNumber = 0;
  @Input() details: string | null = "";

  successText: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['success']) {
      this.successText = this.success ? 'success' : 'failed';
    }
  }
}

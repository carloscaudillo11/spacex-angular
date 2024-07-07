import { Component, inject } from '@angular/core';
import { SpacexService } from '../../../core/services/spacex.service';
import { Doc } from '../../../core/types';
import { CardLaunchComponent } from '../card-launch/card-launch.component';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'launches',
  standalone: true,
  imports: [CardLaunchComponent, AsyncPipe, JsonPipe],
  templateUrl: './launches.component.html',
})
export class LaunchesComponent {
  private spacexService = inject(SpacexService);
  data$: Observable<Doc[]> = this.spacexService.getLaunches();
}

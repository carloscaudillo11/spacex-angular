import { Component, inject, OnInit } from '@angular/core';
import { SpacexService } from '../../../core/services/spacex.service';
import { Doc } from '../../../core/types';
import { CardLaunchComponent } from '../card-launch/card-launch.component';

@Component({
  selector: 'launches',
  standalone: true,
  imports: [CardLaunchComponent],
  templateUrl: './launches.component.html'
})
export class LaunchesComponent implements OnInit {
  private spacexService = inject(SpacexService);

  launches: Doc[] = [];

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe(launches => {
      this.launches = launches;
    });
  }

}

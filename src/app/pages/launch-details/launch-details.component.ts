import { Component, inject, Input, OnInit } from '@angular/core';
import { LayoutComponent } from '../../layouts/layout/layout.component';
import { RouterOutlet } from '@angular/router';
import { Doc } from '../../core/types';
import { SpacexService } from '../../core/services/spacex.service';

@Component({
  selector: 'app-launch-details',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './launch-details.component.html',
})
export class LaunchDetailsComponent implements OnInit {
  @Input('id') launchId!: string;
  private spacexService = inject(SpacexService);

  launch: Doc = {} as Doc;

  ngOnInit(): void {
    this.spacexService.getLauncheById(this.launchId).subscribe((launch) => {
      this.launch = launch;
    });
  }
}

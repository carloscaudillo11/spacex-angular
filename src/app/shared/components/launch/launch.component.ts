import { Component, inject, input, OnInit } from '@angular/core';
import { SpacexService } from '../../../core/services/spacex.service';
import { Observable } from 'rxjs';
import { Doc } from '../../../core/types';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'launch',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './launch.component.html'
})
export class LaunchComponent implements OnInit {
  id = input('');
  private spacexService = inject(SpacexService);
  data$: Observable<Doc> = new Observable();

  ngOnInit(): void {
    this.data$ = this.spacexService.getLauncheById(this.id());
  }
}

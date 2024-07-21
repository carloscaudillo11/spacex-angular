import { Component, inject, OnInit } from '@angular/core';
import { LayoutComponent } from '../../layouts/layout/layout.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Doc } from '../../core/types';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-launch-details',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet, AsyncPipe],
  templateUrl: './launch-details.component.html',
})
export class LaunchDetailsComponent implements OnInit {
  data$!: Observable<Doc>;
  private activeRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.data$ = this.activeRoute.data.pipe(
      map((data) => data['launch'] as Doc)
    );
  }
}

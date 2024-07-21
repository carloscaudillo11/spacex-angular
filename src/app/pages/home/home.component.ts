import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../../layouts/layout/layout.component';
import { map, Observable } from 'rxjs';
import { Doc } from '../../core/types';
import { AsyncPipe } from '@angular/common';
import { CardLaunchComponent } from '../../shared/components/card-launch/card-launch.component';
import { AreaComponent } from '../../shared/components/area/area.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutComponent,
    AsyncPipe,
    CardLaunchComponent,
    AreaComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  data$!: Observable<Doc[]>;
  private activeRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.data$ = this.activeRoute.data.pipe(
      map((data) => data['launches'] as Doc[])
    );
  }
}

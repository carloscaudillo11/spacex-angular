import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../../layouts/layout/layout.component';
import { map, Observable } from 'rxjs';
import { Doc } from '../../core/types';
import { AsyncPipe } from '@angular/common';
import { CardLaunchesComponent } from '../../shared/components/card-launches/card-launches.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutComponent,
    AsyncPipe,
    CardLaunchesComponent,
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

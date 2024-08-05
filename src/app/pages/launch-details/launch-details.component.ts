import { Component, inject, OnInit } from '@angular/core';
import { LayoutComponent } from '../../layouts/layout/layout.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Doc } from '../../core/types';
import { AsyncPipe } from '@angular/common';
import { CardLaunchComponent } from '../../shared/components/card-launch/card-launch.component';
import { ErrorMessageComponent } from '../../shared/components/error-message/error-message.component';

@Component({
  selector: 'launch-details',
  standalone: true,
  imports: [
    LayoutComponent,
    RouterOutlet,
    AsyncPipe,
    CardLaunchComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './launch-details.component.html',
})
export class LaunchDetailsComponent implements OnInit {
  data$!: Observable<Doc>;
  errorMessage!: string;
  private activeRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.data$ = this.activeRoute.data.pipe(
      map((data) => data['launch'] as Doc),
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }
}

import { ResolveFn } from '@angular/router';
import { type Doc } from '../types';
import { inject } from '@angular/core';
import { SpacexService } from '../services/spacex.service';
import { catchError, throwError } from 'rxjs';

export const LaunchResolver: ResolveFn<Doc> = (route) => {
  const id = route.paramMap.get('id');
  if (!id) return Promise.reject('No id provided');
  return inject(SpacexService).getLauncheById(id).pipe(
    catchError((error: string) => {
      return throwError(() => error);
    })
  );
};

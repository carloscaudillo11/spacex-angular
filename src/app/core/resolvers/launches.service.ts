import { ResolveFn } from '@angular/router';
import { type Doc } from '../types';
import { inject } from '@angular/core';
import { SpacexService } from '../services/spacex.service';

export const LaunchesResolver: ResolveFn<Doc[]> = () => {
  return inject(SpacexService).getLaunches();
};

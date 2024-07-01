import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { type APISpaceXResponse, type Doc } from '../types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpacexService {
  private http = inject(HttpClient);

  getLaunches(): Observable<Doc[]> {
    return this.http
      .post<APISpaceXResponse>('https://api.spacexdata.com/v5/launches/query', {
        query: {},
        options: {
          sort: {
            date_unix: 'asc',
          },
          limit: 12,
        },
      })
      .pipe(map((response: APISpaceXResponse) => response.docs));
  }

  getLauncheById(id: string): Observable<Doc> {
    return this.http.get<Doc>(`https://api.spacexdata.com/v5/launches/${id}`);
  }
}

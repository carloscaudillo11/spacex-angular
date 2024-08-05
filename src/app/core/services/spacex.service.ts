import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { type APISpaceXResponse, type Doc } from '../types';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SpacexService {
  private http = inject(HttpClient);

  getLaunches(): Observable<Doc[]> {
    return this.http
      .post<APISpaceXResponse>(`${environment.apiUrl}/query`, {
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
    return this.http.get<Doc>(`${environment.apiUrl}/${id}`);
  }
}

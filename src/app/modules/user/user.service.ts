import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { Page } from '../../shared/model/page';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from 'src/app/app-config.module';
import { PaginationRequest } from 'src/app/shared/model/pagination-request';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
    ) { }

  getUsers(paginationRequest: PaginationRequest = new PaginationRequest()): Observable<Page<User>> {

    const page = paginationRequest.page || '1';
    const limit = paginationRequest.limit || '20';
    const sort = paginationRequest.sort || 'id,ASC';

    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit)
      .set('sort', sort);

    return this.http.get<Page<User>>(`${this.config.apiEndpoint}users`, {params});
  }
}

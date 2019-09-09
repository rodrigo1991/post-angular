import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { Page } from '../../shared/model/page';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from 'src/app/app-config.module';
import { PaginationRequest } from 'src/app/shared/model/pagination-request';
import { MyCustomHttpUrlEncodingCodec } from 'src/app/shared/components/utils/mycustomhttpurlencodingcodec';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
    ) { }

  getUsers(pr: PaginationRequest = new PaginationRequest()): Observable<Page<User>> {

    const page = pr.page || '1';
    const limit = pr.limit || '20';
    const sort = pr.sort || 'id,ASC';

    let params = new HttpParams({encoder: new MyCustomHttpUrlEncodingCodec()})
      .set('page', page)
      .set('limit', limit)
      .set('sort', sort);
    pr.join.forEach(data =>{
      params = params.append('join[]', data);
    });
    return this.http.get<Page<User>>(`${this.config.apiEndpoint}users`, {params});
  }
}

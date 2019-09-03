import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from 'src/app/app-config.module';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
    ) { }

  getUsers(options: any = undefined): Observable<User[]> {
    let params = new HttpParams();
    if(options && options.order){    
      params = params.append('order', JSON.stringify(options.order)); //Create new HttpParams
      params = params.append('where', undefined); //Create new HttpParams
    }
    console.log(params);

    return this.http.get<User[]>(`${this.config.apiEndpoint}users`, {params});
  }
}

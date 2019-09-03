import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://127.0.0.1:3000/api/users?relations[]=group&relations[]=posts');
  }
}

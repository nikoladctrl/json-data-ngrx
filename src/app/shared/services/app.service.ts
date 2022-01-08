import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { environment } from 'src/environments/environment';
import { User } from '../../modules/users/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${environment.baseUrl}`);    
  }

  getUser(id: number) {
    return this.http.get<User>(`${environment.baseUrl}/${id}`);
  }
}

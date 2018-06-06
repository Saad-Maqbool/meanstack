import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  signup(user) {
    return this.http.post('/auth/signup', user);
  }

  signin(user) {
    return this.http.post('/auth/login', user);
  }
}


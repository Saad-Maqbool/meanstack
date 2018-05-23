import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tokenKey} from '@angular/core/src/view';
import {Token} from '@angular/compiler';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }


  signup(user) {

    return this.http.post('/users/register', user);
  }

  signin(user) {
    const req = this.http.post('/users/login', user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('Token', res['token']);
        }
      );
  }
}


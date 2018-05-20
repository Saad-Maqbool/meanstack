import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tokenKey} from '@angular/core/src/view';
import {Token} from '@angular/compiler';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }


  signup(user) {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post('http://localhost:3000/users/register', user, requestOptions);
  }
  signin(user) {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    const req = this.http.post('http://localhost:3000/users/login', user, requestOptions)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('Token', res['token']);
        }
      );
  }
}


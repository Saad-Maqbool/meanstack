import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Token} from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private http: HttpClient) { }
    create(user) {
    console.log(localStorage.getItem('token'))
      return this.http.post('/income?token=' + localStorage.getItem('token'), user);
    }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private http: HttpClient) { }
  getbalance() {
    return this.http.get('/balance/' + localStorage.getItem('user_id') + '?token=' + localStorage.getItem('token'));
  }
}

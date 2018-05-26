import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) {
  }

  create(user) {
    return this.http.post('/expense/?token=' + localStorage.getItem('token'), user);
  }

  getallexpense() {
    return this.http.get('/expense/' + localStorage.getItem('user_id') + '?token=' + localStorage.getItem('token'));
  }
}

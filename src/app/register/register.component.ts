import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserService} from '../Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    username: '',
    email: '',
    password: ''
  };
  constructor(private http: HttpClient, private controllerService: UserService) {

  }

  ngOnInit() {

  }
  signup() {
    this.controllerService.signup( this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('Token', res['token']);
      }
    );
  }
}

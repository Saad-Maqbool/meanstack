import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  constructor(private controllerService: UserService) {
  }

  ngOnInit() {
  }
  signin() {
    this.controllerService.signin(this.user);
  }
}

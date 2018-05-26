import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../Services/user.service';

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

  constructor(private controllerService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  signin() {
    this.controllerService.signin(this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res['token']);
        localStorage.setItem('user_id', res['userId']);
        this.goback();
      }
    );
  }

  goback() {
    this.router.navigate(['/options']);
  }
}

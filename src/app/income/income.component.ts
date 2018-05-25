import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../Services/user.service';
import {IncomeService} from '../Services/income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  user = {
    category: '',
    date: '',
    amount: '',
    comment: '',
    user_id: localStorage.getItem('user_id')
  };
  constructor(private controllerService: IncomeService, private router: Router) { }

  ngOnInit() {
  }
    create() {
  this.controllerService.create(this.user).subscribe(
    res => {
      console.log(res);
    }
  );
  }
}

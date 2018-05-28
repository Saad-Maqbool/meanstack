import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {ExpenseService} from '../Services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expense = {
    category: '',
    date: '',
    amount: '',
    comment: '',
    user_id: localStorage.getItem('user_id')
  };

  constructor(private controllerService: ExpenseService, private router: Router) {
  }

  ngOnInit() {
  }

  create() {
    this.controllerService.create(this.expense).subscribe(
      res => {
        console.log(res);
        this.controllerService.getallexpense();
      }
    );
  }
}

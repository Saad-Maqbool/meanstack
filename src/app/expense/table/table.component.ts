import {Component, OnInit} from '@angular/core';
import {ExpenseService} from '../../Services/expense.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private controllerService: ExpenseService) {
  }

  expenses;

  ngOnInit() {
    this.getallexpense();
  }

  getallexpense() {
    this.controllerService.getallexpense().subscribe(
      res => {
        console.log(res);
        this.expenses = res;
      }
    );
  }
}

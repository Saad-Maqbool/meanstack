import { Component, OnInit } from '@angular/core';
import {ExpenseService} from '../Services/expense.service';
import {BalanceService} from '../Services/balance.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor(private controllerService: BalanceService) { }
balances;
  ngOnInit() {
    this.getbalance();
  }
  getbalance() {
    this.controllerService.getbalance().subscribe(
      res => {
        console.log(res);
        this.balances = res;
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import {IncomeService} from '../../Services/income.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
   Income = {
  category: 'string',
  amount: 'string',
  date: 'string',
  comment: 'string'
};

displayedColumns = ['category', 'amount', 'date', 'comment'];
  constructor(private controllerService: IncomeService) { }

  ngOnInit() {
  }
getall() {
  this.controllerService.getall().subscribe(
    res => {

    }
  );
}
}

import {Component, OnInit} from '@angular/core';
import {IncomeService} from '../../Services/income.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


  constructor(private controllerService: IncomeService) {
  }

  incomes;

  ngOnInit() {
    this.getall();
  }

  getall() {
    this.controllerService.getall().subscribe(
      res => {
        console.log(res);
        this.incomes = res;
      }
    );
  }
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserService} from './Services/user.service';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {IncomeComponent} from './income/income.component';
import {IncomeService} from './Services/income.service';

import {ReportComponent} from './income/report/report.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OptionsComponent} from './options/options.component';
import {ExpenseComponent} from './expense/expense.component';
import {TableComponent} from './expense/table/table.component';
import {BalanceComponent} from './balance/balance.component';
import {ExpenseService} from './Services/expense.service';
import {BalanceService} from './Services/balance.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    IncomeComponent,
    ReportComponent,
    OptionsComponent,
    ExpenseComponent,
    TableComponent,
    BalanceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'income',
        component: IncomeComponent
      },
      {
        path: 'options',
        component: OptionsComponent
      },
      {
        path: 'expense',
        component: ExpenseComponent
      },
      {
        path: 'balance',
        component: BalanceComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ])
  ],
  providers: [UserService, IncomeService, ExpenseService, BalanceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

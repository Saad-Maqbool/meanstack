import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {UserService} from './Services/user.service';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { IncomeComponent } from './income/income.component';
import {IncomeService} from './Services/income.service';
import { MatTableModule } from '@angular/material';
import { ReportComponent } from './income/report/report.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    IncomeComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    RouterModule.forRoot([
      {path: 'login',
        component:  LoginComponent
      },
      {path: 'home',
        component:  HomeComponent
      },
      {path: 'income',
        component:  IncomeComponent
      },
      {path: 'register',
        component:  RegisterComponent
      }
      ])
  ],
  providers: [UserService, IncomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { DepositComponent } from './pages/deposit/deposit.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { WithdrawComponent } from './pages/withdraw/withdraw.component';
import { CheckBalanceComponent } from './pages/check-balance/check-balance.component';
import { ViewAccountsComponent } from './pages/view-accounts/view-accounts.component';
//import { WelcomeComponent } from './pages/welcome/welcome.component';
// import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    TransferComponent,
    DepositComponent,
    TransactionsComponent,
    NotFoundComponent,
    CreateAccountComponent,
    WithdrawComponent,
    CheckBalanceComponent,
    ViewAccountsComponent
      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

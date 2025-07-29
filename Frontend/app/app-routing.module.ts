import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { WithdrawComponent } from './pages/withdraw/withdraw.component';
import { CheckBalanceComponent } from './pages/check-balance/check-balance.component';
import { ViewAccountsComponent } from './pages/view-accounts/view-accounts.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // ✅ Use `loadComponent` for standalone WelcomeComponent
  {
    path: 'welcome',
    loadComponent: () => import('./pages/welcome/welcome.component')
      .then(m => m.WelcomeComponent)
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'view-accounts', component: ViewAccountsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'check-balance', component: CheckBalanceComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Component } from '@angular/core';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  userId: number = 0;
  transactions: any[] = [];
  errorMsg: string = '';

  constructor(private bankService: BankService) {}

  fetchTransactions() {
    this.bankService.getTransactions(this.userId).subscribe({
      next: (data) => {
        this.transactions = data;
        this.errorMsg = '';
      },
      error: (err) => {
        this.errorMsg = 'Failed to load transaction history.';
      }
    });
  }
}

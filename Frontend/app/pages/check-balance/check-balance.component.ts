import { Component } from '@angular/core';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent {
  userId: number = 0;
  balance: number | null = null;
  errorMsg: string = '';

  constructor(private bankService: BankService) {}

  checkBalance() {
    this.bankService.getBalance(this.userId).subscribe({
      next: (data: any) => {
        this.balance = data;
        this.errorMsg = '';
      },
      error: (err) => {
        this.errorMsg = 'User not found or error occurred.';
      }
    });
  }
}

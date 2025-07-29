import { Component } from '@angular/core';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  accountHolderName: string = '';
  accountType: string = 'SAVINGS'; // Default type
  balance: number = 0;

  successMsg: string = '';
  errorMsg: string = '';

  constructor(private bankService: BankService) {}

  createAccount() {
    const newAccount = {
      accountHolderName: this.accountHolderName,
      accountType: this.accountType,
      balance: this.balance
    };

    this.bankService.createAccount(newAccount).subscribe({
      next: (response) => {
        this.successMsg = 'Account created successfully!';
        this.errorMsg = '';
        this.accountHolderName = '';
        this.accountType = 'SAVINGS';
        this.balance = 0;
      },
      error: (err) => {
        this.errorMsg = 'Failed to create account. Please try again.';
        this.successMsg = '';
        console.error(err);
      }
    });
  }
}

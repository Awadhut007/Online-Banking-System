import { Component } from '@angular/core';
import { BankService } from '../../services/bank.service';


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  userId: number = 0;
  amount: number = 0;
  successMsg: string = '';
  errorMsg: string = '';

  constructor(private bankService: BankService) {}

  deposit() {
  this.bankService.deposit(this.userId, this.amount).subscribe({
    next: res => {
      this.successMsg = 'Deposit successful!';
      this.errorMsg = '';
    },
    error: err => {
      this.errorMsg = 'Deposit failed. Please check User ID';
      this.successMsg = '';
    }
  });
}

}

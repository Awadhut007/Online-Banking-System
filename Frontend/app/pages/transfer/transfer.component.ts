import { Component } from '@angular/core';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  fromUserId: number = 0;
  toUserId: number = 0;
  amount: number = 0;

  successMsg: string = '';
  errorMsg: string = '';

  constructor(private bankService: BankService) {}

  transferMoney() {
    this.bankService.transferFunds(this.fromUserId, this.toUserId, this.amount).subscribe({
      next: (res) => {
        this.successMsg = res;
        this.errorMsg = '';
        this.fromUserId = 0;
        this.toUserId = 0;
        this.amount = 0;
      },
      error: (err) => {
        this.errorMsg = err.error || 'Transfer failed. Please check user IDs and balance.';
        this.successMsg = '';
      }
    });
  }
}

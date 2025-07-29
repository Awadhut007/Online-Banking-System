import { Component } from '@angular/core';
import { BankService } from '../../services/bank.service';


@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  userId: number = 0;
  amount: number = 0;
  message: string = '';
  isSuccess: boolean = false;

  constructor(private bankService: BankService) {}

  withdrawFunds() {
    this.bankService.withdraw(this.userId, this.amount).subscribe({
      next: (res) => {
        this.message = 'Withdrawal successful.';
        this.isSuccess = true;
      },
      error: (err) => {
        this.message = 'Withdrawal failed. ' + (err.error?.message || '');
        this.isSuccess = false;
      }
    });
  }
}

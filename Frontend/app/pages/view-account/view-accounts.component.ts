import { Component, OnInit } from '@angular/core';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrls: ['./view-accounts.component.css']
})
export class ViewAccountsComponent implements OnInit {
  accounts: any[] = [];
  errorMsg: string = '';

  constructor(private bankService: BankService) {}

  ngOnInit(): void {
    this.fetchAccounts();
  }

  fetchAccounts() {
    this.bankService.getAllAccounts().subscribe({
      next: (data: any) => {
        this.accounts = data;
        this.errorMsg = data.length === 0 ? 'No accounts found.' : '';
      },
      error: () => {
        this.errorMsg = 'Failed to fetch accounts.';
        this.accounts = [];
      }
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private baseUrl = 'http://localhost:8080/api/bank'; // Update this if your backend is hosted elsewhere

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
   createAccount(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, user);
  }


  deposit(userId: number, amount: number): Observable<any> {
  return this.http.post(`http://localhost:8080/api/bank/deposit?accountId=${userId}&amount=${amount}`, {});
}

  
  withdraw(userId: number, amount: number) {
  return this.http.post(`${this.baseUrl}/withdraw?accountId=${userId}&amount=${amount}`, {});
}


 register(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/register`, data);
}


  getBalance(accountId: number) {
  return this.http.get(`${this.baseUrl}/balance?accountId=${accountId}`);
}


  transferFunds(fromUserId: number, toUserId: number, amount: number): Observable<any> {
  return this.http.post(`${this.baseUrl}/transfer`, null, {
    params: {
      fromId: fromUserId,
      toId: toUserId,
      amount: amount
    },
    responseType: 'text' // if you return a string
  });
}


  getTransactions(userId: number): Observable<any> {
  return this.http.get(`http://localhost:8080/api/bank/transactions?accountId=${userId}`);
}


getAllAccounts() {
  return this.http.get(`${this.baseUrl}/accounts`);
}


}

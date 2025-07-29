import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient, private router: Router) {}

  register(user: { username: string; password: string }) {
  return this.http.post(`${this.baseUrl}/register`, user);
}

  login(user: { username: string; password: string }) {
  return this.http.post('http://localhost:8080/api/bank/login', user, {
    responseType: 'text', // <--- Important!
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  saveUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}

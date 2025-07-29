import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const payload = {
      username: this.username.trim(),
      password: this.password.trim()
    };

    if (!payload.username || !payload.password) {
      this.errorMsg = 'Both fields are required.';
      return;
    }

    this.http.post('http://localhost:8080/api/bank/register', payload).subscribe({
      next: () => this.router.navigate(['/login']),
      error: err => {
        if (err.status === 409) {
          this.errorMsg = 'Username already exists.';
        } else {
          this.errorMsg = 'Something went wrong. Please try again.';
        }
      }
    });
  }
}

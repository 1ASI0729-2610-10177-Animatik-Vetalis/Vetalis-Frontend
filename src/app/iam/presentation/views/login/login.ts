import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AuthStore } from '../../../application/auth.store';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatIconModule, TranslatePipe],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private auth      = inject(AuthStore);
  private router    = inject(Router);
  private translate = inject(TranslateService);

  email    = signal('');
  password = signal('');
  showPassword = signal(false);
  submitted = signal(false);

  loading = this.auth.loading;
  error   = this.auth.error;
  currentLang = signal('es');

  demoAccounts = [
    { label: 'Veterinario', email: 'test.vetalis@vetalis.com', password: 'Vetalis123' },
  ];

  get emailInvalid(): boolean {
    const v = this.email().trim();
    return this.submitted() && (!v || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
  }

  get passwordInvalid(): boolean {
    return this.submitted() && !this.password();
  }

  useDemo(account: { email: string; password: string }): void {
    this.email.set(account.email);
    this.password.set(account.password);
  }

  handleLogin(): void {
    this.submitted.set(true);
    if (this.emailInvalid || this.passwordInvalid) return;

    this.auth.login({ email: this.email(), password: this.password() }).subscribe(ok => {
      if (ok) {
        const target = this.auth.hasRole('admin') ? '/admin' : '/dashboard';
        this.router.navigate([target]);
      }
    });
  }

  switchLang(lang: string): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
  }
}

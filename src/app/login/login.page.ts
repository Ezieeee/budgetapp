import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public showLogin: boolean = true;
  public loginData = { username: '', password: '' };
  public registerData = { username: '', email: '', password: '' };
  public loginError: boolean = false;
  public registerError: boolean = false;
  constructor() {
    console.log(this.showLogin);
  }

  ngOnInit() {}

  toggleView() {
    this.showLogin = !this.showLogin;
    this.loginError = false;
    this.registerError = false;
  }

  login() {
    // Bejelentkezési logika
    if (
      this.loginData.username === 'username' &&
      this.loginData.password === 'password'
    ) {
      // Sikeres bejelentkezés
      console.log('Sikeres bejelentkezés');
    } else {
      // Sikertelen bejelentkezés
      this.loginError = true;
    }
  }

  register() {
    // Regisztrációs logika
    // ...
    // A példa egyszerűségéért itt nincs külön regisztrációs logika
    console.log('Sikeres regisztráció');
  }
}

import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import {User} from './user.model';
import {AuthData} from './auth-data.model';
import {Injectable} from '@angular/core';
//import { AngularFireAuth, AngularFireDatabase, FirebaseAuthState, AuthProviders, AuthMethods, AngularFire } from "angularfire2";

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  isAuthentification = false;
  private user: User;

  constructor(private router: Router) {}

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authSuccessfully();
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authSuccessfully();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return {...this.user};
  }

  isAuth() {
    return this.user == null;
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/user-search']);
  }
}

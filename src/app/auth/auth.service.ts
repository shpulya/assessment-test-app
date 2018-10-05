import {Subject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  user: Observable<firebase.User>;
  userDetails: any;
  isAuth = false;

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
    this.user = afAuth.authState;
    if (this.user) {
      this.user.subscribe((user) => {
        if (user) {
          this.userDetails = user;
        }
      });
    }
  }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuth = true;
        this.userDetails = user;
        this.authChange.next(true);
        this.router.navigate(['/user-search'])
      } else {
        this.authChange.next(false);
        this.userDetails = null;
        this.router.navigate(['/login']);
        this.isAuth = false;
      }
    });
  }
  getProfile() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then( responce => {
        this.userDetails = responce.additionalUserInfo;
        }
      );
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((responce) => {
        this.isAuth = true;
        this.userDetails = responce.additionalUserInfo.username;
        this.router.navigate(['user-search']);
        localStorage.setItem('auth_user_login', JSON.stringify((<any> responce).additionalUserInfo.profile.login));
      })
      .catch((err) => console.log(err));

  }
  isLoggedIn() {
    return this.isAuth;
  }
  logout() {
    this.afAuth.auth.signOut()
      .then((responce) => this.router.navigate(['/login']))
      .catch((err) => console.log(err));;
  }
}

import {Subject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  user: Observable<firebase.User>;
  userDetails: firebase.User = null;

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
  getProfile() {
    return this.userDetails;
  }
  login() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
    //console.log(this.userDetails);
    //console.log(this.isLoggedIn());
  }
  isLoggedIn() {
    return !!this.userDetails;
  }
  logout() {
    this.afAuth.auth.signOut()
      .then((res) => this.router.navigate(['/login']))
      .catch((err) => console.log(err));;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserDetailService {

  private userInfoSource = new BehaviorSubject(localStorage.getItem('auth_user_profile'));
  currentUserInfo = this.userInfoSource.asObservable();

  constructor() { }

  changeUserInfo(userInfo: string) {
    this.userInfoSource.next(userInfo);
  }

  newUserInfo(userInfo) {
    this.changeUserInfo(userInfo);
  }

}

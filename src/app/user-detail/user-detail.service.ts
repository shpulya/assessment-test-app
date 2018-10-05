import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UserSearchService} from '../user-search/user-search.service';
import {User} from '../user-search/user-search.model';


@Injectable()
export class UserDetailService {
  userInfo: any;

  private userInfoSource = new BehaviorSubject(localStorage.getItem('auth_user_login'));
  currentUserInfo = this.userInfoSource.asObservable();

  constructor(private userSearchService: UserSearchService) {
  }

  changeUserInfo(userInfo: string) {
    this.userInfoSource.next(userInfo);
  }

  newUserInfo(login) {
    this.userSearchService.getUserByName(login.replace(/['"]+/g, '')).subscribe(userInfo => {
      this.userInfo = userInfo;
      this.changeUserInfo(JSON.stringify(this.userInfo));
      console.log(this.userInfo);
    });
  }

}

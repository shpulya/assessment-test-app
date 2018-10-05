import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {AuthService} from '../../auth/auth.service';
import {UserDetailService} from '../../user-detail/user-detail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;
  userInfo: any;

  constructor(private authService: AuthService, private userDetailService: UserDetailService) {

  }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
    this.userInfo = JSON.parse(localStorage.getItem('auth_user_profile'));
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  setUserInfo() {
    this.userDetailService.newUserInfo(localStorage.getItem('auth_user_login'));
  }

}

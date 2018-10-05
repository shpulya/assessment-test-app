import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {UserDetailService} from '../../user-detail/user-detail.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>();
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

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.authService.logout();
    this.onClose();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  setUserInfo() {
    this.userDetailService.newUserInfo(localStorage.getItem('auth_user_profile'));
  }
}

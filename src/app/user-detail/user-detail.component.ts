import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userInfo: any;

  constructor() { }

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('auth_user_profile'));
  }

}

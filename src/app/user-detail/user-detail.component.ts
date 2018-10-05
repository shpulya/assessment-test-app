import { Component, OnInit } from '@angular/core';
import {UserDetailService} from './user-detail.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userInfo: any;

  constructor(private userDetailService: UserDetailService) { }

  ngOnInit() {
    this.userDetailService.currentUserInfo.subscribe(userInfo => this.userInfo = JSON.parse(userInfo));
  }

}

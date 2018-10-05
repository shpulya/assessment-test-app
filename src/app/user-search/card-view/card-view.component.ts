import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User, Response, Item } from '../user-search.model';
import 'rxjs/add/observable/of';
import {UserDetailService} from '../../user-detail/user-detail.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  @Input() dataSourceCardView: Item[];

  constructor(private userDetailService: UserDetailService) {
  }

  ngOnInit() {
  }

  setNewUserInfo(userInfo) {
    this.userDetailService.newUserInfo(JSON.stringify(userInfo));
  }

}

import {Component, OnInit, Input} from '@angular/core';
import {Item} from '../user-search.model';
import 'rxjs/add/observable/of';
import {UserDetailService} from '../../user-detail/user-detail.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  @Input() dataSourceCardView: Item[];
  @Input() usersCount: any;

  constructor(private userDetailService: UserDetailService) {
  }

  ngOnInit() {
  }

  setNewUserInfo(login) {
    this.userDetailService.newUserInfo(login);
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../user-search.model';
import { UserSearchService } from '../user-search.service';
import {UserDataSource} from '../user-data-source';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  dataSource = new UserDataSource(this.userSearchService);

  constructor(private userSearchService: UserSearchService) { }

  ngOnInit() {
    // this.data = this.userSearchService.getSearchUsers('kkk');
  }

}

import {Component, OnInit} from '@angular/core';
import {UserSearchService} from './user-search.service';
import {MatTableDataSource} from '@angular/material';
import {Users} from './user-search.model';

import * as _ from 'lodash';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  searchInfoResult: any;
  responseSearchUsers: Response[];
  dataSource = new MatTableDataSource<Users>();

  data: any;
  constructor(private userSearchService: UserSearchService) {
  }

  ngOnInit() {
  }

  onSearchUsers(form) {
    this.data = this.userSearchService.getSearchUsers(form.value.userInputDataSearch);

  }
}

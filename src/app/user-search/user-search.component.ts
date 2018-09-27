import {Component, OnInit} from '@angular/core';
import {UserSearchService} from './user-search.service';
import {MatTableDataSource} from '@angular/material';
import {User} from './user-search.model';

import * as _ from 'lodash';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  searchInfoResult: any;
  responseSearchUsers: Response[];
  dataSource = new MatTableDataSource<User>();

  data: any;
  searchData: string;
  constructor(private userSearchService: UserSearchService) {
  }

  ngOnInit() {}

  onSearchUsers(form) {
    this.searchData = form.value.userInputDataSearch;
  }
}

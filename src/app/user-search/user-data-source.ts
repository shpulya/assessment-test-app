import {MatPaginator, MatSort} from '@angular/material';
import {Input} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {UserSearchService} from './user-search.service';
import {Response, User} from './user-search.model';

export class UserDataSource extends DataSource<any> {
  @Input() searchData: string;
  constructor(private userService: UserSearchService) {
    super();
  }

  connect(): Observable<User[]> {
    //if (!!this.searchData) {
      return this.userService.getSearchUsers(this.searchData);
    //}
  }

  disconnect() {
  }

  getUsers() {

  }
}

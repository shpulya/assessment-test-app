import {MatPaginator, MatSort} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {UserSearchService} from './user-search.service';
import {Users} from './user-search.model';

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserSearchService) {
    super();
  }
  connect(): Observable<Users[]> {
    return this.userService.getSearchUsers('tt');
  }
  disconnect() {}
}

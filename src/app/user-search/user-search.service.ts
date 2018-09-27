import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import {Response, Users} from './user-search.model';
import {MatTableDataSource} from '@angular/material';

interface ResponseSearchApiInterface {
  total_count: number;
  incomplete_results: boolean;
  items: Array<any>;
}

@Injectable()
export class UserSearchService {
  searchInfoResult: any;
  responseSearchUsers: Response[];
  dataSource = new MatTableDataSource<Users>();

  constructor(private http: HttpClient) {}

  getSearchUsers(InputDataSearch: string): Observable<any[]> {
    return this.http.get<any>('https://api.github.com/search/users?q=' + InputDataSearch);
  //  .subscribe(response => {
    //     this.searchInfoResult = response;
    //     this.responseSearchUsers = this.searchInfoResult.items;
    //     this.dataSource.data = this.responseSearchUsers.map(item => new Users(item)) ;
    //     return this.dataSource.data;
    //     // this.dataSource.data = _.map(this.searchInfoResult.items, _.partialRight(_.pick, ['login', 'url']));
    //   },
    //   error => {
    //      console.log(error);
    //   });
  }

  getUsers(InputDataSearch: string): Observable<Response> {
    const url = 'https://api.github.com/search/users?q=' + InputDataSearch;
    return this.http.get<Response>(url);
  }
}

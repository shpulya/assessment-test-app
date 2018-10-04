import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import {Response, User} from './user-search.model';
import {MatTableDataSource} from '@angular/material';
import {map} from 'rxjs/operators';

interface ResponseSearchApiInterface {
  total_count: number;
  incomplete_results: boolean;
  items: Array<any>;
}

@Injectable()
export class UserSearchService {
  searchInfoResult: any;
  responseSearchUsers: Response[];
  dataSource = new MatTableDataSource<Response>();

  constructor(private http: HttpClient) {
  }

  getSearchUsers(InputDataSearch: string): Observable<User[]> {
    const url = 'https://api.github.com/search/users?q=' + InputDataSearch;
    console.log(url);
    return this.http.get<User[]>(url).pipe(map(data => {
      const usersList = data['items'];
      return usersList.map(function (user: any) {
        return {login: user.login, url: user.url};
      });
    }));
  }

  getSearchUsersAllData(InputDataSearch: string): Observable<Response> {
    const url = 'https://api.github.com/search/users?q=' + InputDataSearch;
    console.log(url);
    return this.http.get<Response> (url);
  }
      // return this.http.get<User[]>(this.serviceUrl);
      //  .subscribe(response => {
      //     this.searchInfoResult = response;
      //     this.responseSearchUsers = this.searchInfoResult.items;
      //     this.dataSource.data = this.responseSearchUsers.map(item => new User(item)) ;
      //     return this.dataSource.data;
      //     // this.dataSource.data = _.map(this.searchInfoResult.items, _.partialRight(_.pick, ['login', 'url']));
      //   },
      //   error => {
      //      console.log(error);
      //   });

    // getUsers(InputDataSearch: string): Observable<Response> {
    //   const url = 'https://api.github.com/search/users?q=' + InputDataSearch;
    //   return this.http.get<Response>(url);//.map(res => res.json()).items;
    // }
  }

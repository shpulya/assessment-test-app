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
  constructor(private http: HttpClient) {
  }


  getSearchUsersAllData(inputDataSearch: string): Observable<Response> {
    const url = 'https://api.github.com/search/users?q=' + inputDataSearch;
    return this.http.get<Response>(url);
  }

  getUserByName(name: string): Observable<User> {
    const url = 'https://api.github.com/users/' + name;
    return this.http.get<User>(url);
  }
}

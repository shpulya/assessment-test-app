import {Component, Input, OnInit, Output} from '@angular/core';
import {UserSearchService} from './user-search.service';
import {MatTableDataSource} from '@angular/material';
import {User, Item, Response} from './user-search.model';
import {CardViewComponent} from './card-view/card-view.component';
import * as _ from 'lodash';
import {UserDataSource} from './user-data-source';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

// @ts-ignore
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  dataSourceItems = new MatTableDataSource<Item>();
  responseSearchUsers: any;
  dataSourceCardView: Item[]; // = new MatTableDataSource<User>();
  searchInput: FormControl = new FormControl('');
  data: any;
  searchData: string;
  showTabs: boolean;
  constructor(private userSearchService: UserSearchService) {
    this.searchInput.valueChanges
      .debounceTime(200)
      .switchMap(userName => this.userSearchService.getSearchUsersAllData(userName))
      .subscribe(
        res => {
          console.log(res);
          this.showTabs = true;
          this.responseSearchUsers = res;
          this.dataSourceCardView = res.items;
          this.dataSourceItems.data = res.items;
          this.data = res.total_count;
          console.log(this.dataSourceCardView);
          console.log(this.responseSearchUsers);
          console.log(this.data);
        },
        err => {
          console.log ("Can't get user data. Error code: %s, URL: %s", err.message, err.url);
          this.showTabs = false;
          },
        () => {
          console.log(this.dataSourceCardView);
          console.log(this.responseSearchUsers);
        }
      );
  }

  ngOnInit() {}

  onSearchUsers(form) {
    this.showTabs = true;
    this.searchData = form.value.userInputDataSearch;
    console.log(this.searchData);
    //this.dataSource = new UserDataSource(this.userSearchService);
    this.userSearchService.getSearchUsersAllData(this.searchData).subscribe(users => {
      this.responseSearchUsers = users;
      this.dataSourceCardView = users.items;});
    console.log(this.dataSourceCardView);
    console.log(this.responseSearchUsers);
  }
}

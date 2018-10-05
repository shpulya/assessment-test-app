import {Component, OnInit,} from '@angular/core';
import {UserSearchService} from './user-search.service';
import {MatTableDataSource} from '@angular/material';
import {Item, Response} from './user-search.model';
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
  usersCount: any;
  dataSourceCardView: Item[]; // = new MatTableDataSource<User>();
  showTabs: boolean;

  constructor(private userSearchService: UserSearchService) {
  }

  ngOnInit() {}

  onSearchUsers(form) {
    this.userSearchService.getSearchUsersAllData(form.value.userInputDataSearch)
    .subscribe(
        res => {
          this.showTabs = true;
          this.usersCount = res.total_count;
          this.dataSourceCardView = res.items;
          this.dataSourceItems.data = res.items;
        },
        err => {
          console.log ("Can't get user data. Error code: %s, URL: %s", err.message, err.url);
          this.showTabs = false;
        },
        () => {
        }
      );
  }
}


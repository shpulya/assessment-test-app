import {Component, OnInit, Input, ErrorHandler} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {User} from '../user-search.model';
import {UserSearchService} from '../user-search.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';

import {UserDataSource} from '../user-data-source';
import {UserSearchComponent} from '../user-search.component';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  displayedColumns: string[] = ['login', 'url'];
  dataSource = new UserDataSource(this.userSearchService);

  constructor(private userSearchService: UserSearchService) {
  };

  ngOnInit() {
    //this.userSearchService.getSearchUsers('res').subscribe((res) => {
    //  this.dataSource = new UserDataSource(res.items);
  }
}

import {Component, OnInit, Input, ErrorHandler, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Item} from '../user-search.model';
import 'rxjs/add/observable/of';
import {UserDetailService} from '../../user-detail/user-detail.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  displayedColumns: string[] = ['login', 'url'];
  @Input() dataSourceItems = new MatTableDataSource<Item>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userDetailService: UserDetailService) {
  }

  ngOnInit() {
  }

  setNewUserInfo(userInfo) {
    this.userDetailService.newUserInfo(JSON.stringify(userInfo));
  }
}

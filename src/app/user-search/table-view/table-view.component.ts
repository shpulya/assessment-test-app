import {Component, OnInit, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
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
  @Input() usersCount: any;

  constructor(private userDetailService: UserDetailService) {
  }

  ngOnInit() {
  }

  setNewUserInfo(login) {
    this.userDetailService.newUserInfo(login);
  }
}

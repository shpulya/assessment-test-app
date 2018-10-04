import {Component, OnInit, Input, ErrorHandler, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Item} from '../user-search.model';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  displayedColumns: string[] = ['login', 'url'];
  @Input() dataSourceItems = new MatTableDataSource<Item>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
  }

  ngOnInit() {
  }
}

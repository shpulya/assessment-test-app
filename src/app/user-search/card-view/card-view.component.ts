import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User, Response, Item } from '../user-search.model';
import { UserSearchService } from '../user-search.service';
import {UserDataSource} from '../user-data-source';
import 'rxjs/add/observable/of';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  @Input() dataSourceCardView: Item[];

  constructor(private userSearchService: UserSearchService) {

  }

  ngOnInit() {
  }

}

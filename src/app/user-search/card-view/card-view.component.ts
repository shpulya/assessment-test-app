import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../user-search.model';
import { UserSearchService } from '../user-search.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  data: Observable<User[]>;

  constructor(private userSearchService: UserSearchService) { }

  ngOnInit() {
    // this.data = this.userSearchService.getSearchUsers('kkk');
  }

}

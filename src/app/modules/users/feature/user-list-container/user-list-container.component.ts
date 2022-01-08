import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';

import * as fromUserSelectors from '../../data/user.selectors';
import * as UserActions from '../../data/user.actions';
import { User } from '../../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.css']
})
export class UserListContainerComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
    this.store.dispatch(UserActions.getUsers());
   }

  ngOnInit(): void {
    this.users$ = this.store.select(fromUserSelectors.selectAllUsers);
  }

  onOutputUser() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}

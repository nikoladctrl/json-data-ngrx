import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../model/user.model';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromUserSelectors from '../../data/user.selectors';
import * as UserActions from '../../data/user.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail-container',
  templateUrl: './user-detail-container.component.html',
  styleUrls: ['./user-detail-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailContainerComponent implements OnInit {

  user$: Observable<User>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.store.dispatch(UserActions.getUser({ id: this.route.snapshot.params.id }));
    this.user$ = this.store.select(fromUserSelectors.selectCurrentUser(+this.route.snapshot.params.id));
  }

}

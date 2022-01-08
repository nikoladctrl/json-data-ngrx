import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store';

import * as UserActions from '../../modules/users/data/user.actions';
import * as fromUserSelectors from '../../modules/users/data/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<boolean> {

  constructor(private store: Store<AppState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(UserActions.getUser({ id: +route.params.id }));
    return this.store.select(fromUserSelectors.selectCurrentUser).pipe(user => user ? of(true) : of(false));
  }
}

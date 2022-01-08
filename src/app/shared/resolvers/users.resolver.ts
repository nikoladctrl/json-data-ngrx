import { selectIsLoaded } from './../../modules/users/data/user.selectors';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import * as UserActions from '../../modules/users/data/user.actions';
import * as fromUserSelectors from '../../modules/users/data/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<boolean> {

  constructor(private store: Store<AppState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(UserActions.getUsers());
    return this.store.select(fromUserSelectors.selectIsLoaded).pipe(filter(isLoaded => isLoaded));
  }
}

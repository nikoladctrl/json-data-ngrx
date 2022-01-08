import { AppService } from '../../../shared/services/app.service';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, catchError, filter, switchMap, tap } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import * as UserActions from './user.actions';
import * as fromUserSelectors from './user.selectors';
import { ActivatedRoute, Router } from '@angular/router';



@Injectable()
export class UserEffects {

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUsers),
      concatLatestFrom(() => this.store.select(fromUserSelectors.selectLoadStatus)),
      filter(([, loadStatus]) => loadStatus === 'NOT_LOADED'),
      map(() => UserActions.loadUsers())
    )
  );

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      switchMap(() => this.appService.getUsers()),
      map(users => UserActions.loadUsersSuccess({ users })),
      catchError(error => of(UserActions.loadUsersFailure({ error })))
    )
  );

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUser),
      concatLatestFrom(() => this.store.select(fromUserSelectors.selectCurrentUser)),
      filter(([, currentUser]) => currentUser === null),
      map(() => UserActions.loadUser({ id: +this.router.routerState.snapshot.url.substring(this.router.routerState.snapshot.url.lastIndexOf('/')+1) }))
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      switchMap((action) => this.appService.getUser(action.id)),
      map(user => UserActions.loadUserSuccess({ user })),
      catchError(error => of(UserActions.loadUserFailure({ error })))
    )
  );

  constructor(
    private actions$: Actions, 
    private store: Store<AppState>, 
    private appService: AppService, 
    private router: Router,
    private route: ActivatedRoute) {}

}

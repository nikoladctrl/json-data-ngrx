import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as ErrorActions from '../actions/error.actions';



@Injectable()
export class ErrorEffects {

  loadErrors$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ErrorActions.loadErrors),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => ErrorActions.loadErrorsSuccess({ data })),
          catchError(error => of(ErrorActions.loadErrorsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}

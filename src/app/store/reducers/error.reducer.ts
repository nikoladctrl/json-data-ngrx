import { Action, createReducer, on } from '@ngrx/store';
import * as ErrorActions from '../actions/error.actions';

export const errorFeatureKey = 'error';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(ErrorActions.loadErrors, state => state),
  on(ErrorActions.loadErrorsSuccess, (state, action) => state),
  on(ErrorActions.loadErrorsFailure, (state, action) => state),

);

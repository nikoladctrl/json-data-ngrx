import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from '../modules/users/data/user.reducer';
import * as fromError from './reducers/error.reducer';


export interface AppState {

  [fromUser.usersFeatureKey]: fromUser.State;
  [fromError.errorFeatureKey]: fromError.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromUser.usersFeatureKey]: fromUser.reducer,
  [fromError.errorFeatureKey]: fromError.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

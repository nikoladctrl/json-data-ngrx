import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from '../modules/users/data/user.reducer';


export interface AppState {

  [fromUser.usersFeatureKey]: fromUser.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromUser.usersFeatureKey]: fromUser.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

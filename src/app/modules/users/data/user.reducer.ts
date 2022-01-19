import { Action, createReducer, on, Store } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../model/user.model';
import * as UserActions from './user.actions';
import * as fromUserSelectors from './user.selectors';

export const usersFeatureKey = 'users';

export interface State extends EntityState<User> {
  // additional entities state properties
  loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
  error: Error;


}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  loadStatus: 'NOT_LOADED',
  error: null,
});

export const reducer = createReducer(
  initialState,
  on(UserActions.addUser,
    (state, action) => adapter.addOne(action.user, state)
  ),
  on(UserActions.upsertUser,
    (state, action) => adapter.upsertOne(action.user, state)
  ),
  on(UserActions.addUsers,
    (state, action) => adapter.addMany(action.users, state)
  ),
  on(UserActions.upsertUsers,
    (state, action) => adapter.upsertMany(action.users, state)
  ),
  on(UserActions.updateUser,
    (state, action) => adapter.updateOne(action.user, state)
  ),
  on(UserActions.updateUsers,
    (state, action) => adapter.updateMany(action.users, state)
  ),
  on(UserActions.deleteUser,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(UserActions.deleteUsers,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(UserActions.loadUsers, (state) => {
    return {
      ...state,
      loadStatus: 'LOADING'
    };
  }),
  on(UserActions.loadUsersSuccess,
    (state, action) => adapter.setAll(action.users, {
      ...state,
      loadStatus: 'LOADED',
    })
  ),
  on(UserActions.loadUserSuccess,
    (state, action) => adapter.addOne(action.user, {
      ...state,
      currentUser: action.user
    })
  ),
  on(UserActions.clearUsers,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

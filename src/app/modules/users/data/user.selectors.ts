import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUser from '../data/user.reducer';
import { User } from '../model/user.model';


export const selectUserState = createFeatureSelector<fromUser.State>(
    fromUser.usersFeatureKey
);

export const selectLoadStatus = createSelector(
    selectUserState,
    (state: fromUser.State) => state.loadStatus
);

export const selectIsLoaded = createSelector(
    selectUserState,
    (state: fromUser.State) => state.loadStatus === 'LOADED'
);

export const selectCurrentUser = (id: number) => createSelector(
    selectAllUsers,
    (users: User[]) => users.find(u => u.id === id)
);

export const selectAllUsers = createSelector(
    selectUserState,
    fromUser.selectAll
);
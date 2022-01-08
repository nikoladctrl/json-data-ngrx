import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUser from '../data/user.reducer';


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

export const selectCurrentUser = createSelector(
    selectUserState,
    (state: fromUser.State) => state.currentUser
);

export const selectAllUsers = createSelector(
    selectUserState,
    fromUser.selectAll
);
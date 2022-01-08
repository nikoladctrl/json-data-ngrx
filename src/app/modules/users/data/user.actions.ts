import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { User } from '../model/user.model';

export const getUsers = createAction(
  '[Users List Container] Get Users'
);

export const loadUsers = createAction(
  '[User Effect] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User Effect] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User Effect] Load Users Failure',
  props<{ error: Error }>()
);

export const getUser = createAction(
  '[User Detail Container] Get User',
  props<{ id: string }>()
);

export const loadUser = createAction(
  '[User Effect] Load User',
  props<{ id: number }>()
);

export const loadUserSuccess = createAction(
  '[User Effect] Load User Success',
  props<{ user: User }>()
);

export const loadUserFailure = createAction(
  '[User Effect] Load User Failure',
  props<{ error: Error }>()
);

export const addUser = createAction(
  '[User New Container Component] Add User',
  props<{ user: User }>()
);

// export const addUserSuccess = createAction(
//   '[User Effect] Add User Success',
//   props<{ user: User }>()
// );

// export const addUserFailure = createAction(
//   '[User Effect] Add User Failure',
//   props<{ error: Error }>()
// );

export const upsertUser = createAction(
  '[User/API] Upsert User',
  props<{ user: User }>()
);

export const addUsers = createAction(
  '[User/API] Add Users',
  props<{ users: User[] }>()
);

export const upsertUsers = createAction(
  '[User/API] Upsert Users',
  props<{ users: User[] }>()
);

export const updateUser = createAction(
  '[User/API] Update User',
  props<{ user: Update<User> }>()
);

export const updateUsers = createAction(
  '[User/API] Update Users',
  props<{ users: Update<User>[] }>()
);

export const deleteUser = createAction(
  '[User/API] Delete User',
  props<{ id: string }>()
);

export const deleteUsers = createAction(
  '[User/API] Delete Users',
  props<{ ids: string[] }>()
);

export const clearUsers = createAction(
  '[User/API] Clear Users'
);

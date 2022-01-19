import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromError from '../reducers/error.reducer';

export const selectErrorState = createFeatureSelector<fromError.State>(
  fromError.errorFeatureKey
);

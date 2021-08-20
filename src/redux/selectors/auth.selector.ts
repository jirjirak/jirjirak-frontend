// types
import type IRootState from 'models/IRootState';
import { createSelector } from 'reselect';

export const isLoadingSelector = createSelector(
  (state: IRootState) => state.app,
  (app) => app.isLoading,
);

export const userSelector = createSelector(
  (state: IRootState) => state.auth,
  (auth) => auth.user,
);

export const roleSelector = createSelector(
  (state: IRootState) => state.auth,
  (auth) => auth.role,
);

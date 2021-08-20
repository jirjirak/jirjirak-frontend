// types
import type IRootState from 'models/IRootState';
import { createSelector } from 'reselect';

export const isLoadingSelector = createSelector(
  (state: IRootState) => state.app,
  (app) => app.isLoading,
);

export const dialogSelector = createSelector(
  (state: IRootState) => state.app,
  (app) => app.dialog,
);

export const notificationsSelector = createSelector(
  (state: IRootState) => state.app,
  (app) => app.notifications,
);

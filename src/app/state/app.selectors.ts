import { BaseState } from './app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectApp = createFeatureSelector('app');

export const selectCurrentPage = createSelector(selectApp, (state: BaseState) => state.currentPage);
export const selectFilter = createSelector(selectApp, (state: BaseState) => state.filterBy);
export const selectOrder = createSelector(selectApp, (state: BaseState) => state.orderBy);
export const selectFilterAndOrder = createSelector(
  selectFilter,
  selectOrder,
  (filterBy, orderBy) => ({ filterBy, orderBy })
);

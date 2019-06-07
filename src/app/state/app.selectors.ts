import { BaseState } from './app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TvChannelsOrder } from '../models/types';

export const selectApp = createFeatureSelector('app');

export const selectCurrentPage = createSelector(selectApp, (state: BaseState) => state.currentPage);
export const selectFilter = createSelector(selectApp, (state: BaseState) => state.filterBy);
export const selectOrder = createSelector(selectApp, (state: BaseState) => state.orderBy);
export const selectAllTvChannels = createSelector(selectApp, (state: BaseState) => state.tvChannels);
export const selectFilterAndOrder = createSelector(
  selectFilter,
  selectOrder,
  (filterBy, orderBy) => ({ filterBy, orderBy })
);
export const selectTvChannels = createSelector(
  selectFilterAndOrder,
  selectAllTvChannels,
  ({ filterBy, orderBy }, tvChannels) => {
    if (filterBy) {
      tvChannels = tvChannels.filter(c => c.hasGenre(filterBy.id));
    }

    if (orderBy) {
      tvChannels = tvChannels.slice().sort((a, b) => {
        if (orderBy === TvChannelsOrder.ASC) {
          return a.name.localeCompare(b.name);
        } else if (orderBy === TvChannelsOrder.DESC) {
          return b.name.localeCompare(a.name);
        }

        return 0;
      });
    }

    return tvChannels;
  }
);


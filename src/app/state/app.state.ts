import { CurrentPage, TvChannelsFilter, TvChannelsOrder } from '../models/types';
import { TvChannel } from '../models/tv-channel';

export interface AppState {
  app: BaseState;
}

export interface BaseState {
  tvChannels: TvChannel[];
  currentPage: CurrentPage;
  filterBy: TvChannelsFilter;
  orderBy: TvChannelsOrder;
}

export const initialState: BaseState = {
  tvChannels: [],
  currentPage: CurrentPage.SECOND,
  filterBy: null,
  orderBy: null
};

import { createAction, props } from '@ngrx/store';
import { CurrentPage, TvChannelsFilter, TvChannelsOrder } from '../models/types';
import { TvChannel } from '../models/tv-channel';

export enum AppActionsTypes {
  NAVIGATION = '[Header Tabs] Navigation',
  CLEAR_FILTER = '[Header Controls] Filters cleared',
  SET_FILTER = '[Header Controls] Filter set',
  SET_ORDER = '[Header Controls] Order set',
  SET_CHANNELS = '[TV Channels Service] Set new channels'
}

export const navigation = createAction(AppActionsTypes.NAVIGATION, props<{ currentPage: CurrentPage }>());
export const clearFilter = createAction(AppActionsTypes.CLEAR_FILTER);
export const setFilter = createAction(AppActionsTypes.SET_FILTER, props<{ filterBy: TvChannelsFilter }>());
export const setOrder = createAction(AppActionsTypes.SET_ORDER, props<{ orderBy: TvChannelsOrder }>());
export const setChannels = createAction(AppActionsTypes.SET_CHANNELS, props<{ channels: TvChannel[] }>());

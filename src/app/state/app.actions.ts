import { createAction, props } from '@ngrx/store';
import { CurrentPage } from '../models/types';

export enum AppActionsTypes {
  NAVIGATION = '[Header Tabs] Navigation',
  CLEAR_FILTER = '[Header Controls] Filters cleared',
  SET_FILTER = '[Header Controls] Filter set',
  SET_ORDER = '[Header Controls] Order set'
}

export const navigation = createAction(AppActionsTypes.NAVIGATION, props<{ currentPage: CurrentPage }>());
export const clearFilter = createAction(AppActionsTypes.CLEAR_FILTER);
export const setFilter = createAction(AppActionsTypes.SET_FILTER, props<{ filterBy: string }>());
export const setOrder = createAction(AppActionsTypes.SET_ORDER, props<{ orderBy: string }>());

export type AppActionsUnion = AppActionsTypes.NAVIGATION |
  AppActionsTypes.CLEAR_FILTER |
  AppActionsTypes.SET_FILTER |
  AppActionsTypes.SET_ORDER;

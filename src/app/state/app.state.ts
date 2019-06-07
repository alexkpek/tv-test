import { CurrentPage } from '../models/types';

export interface AppState {
  app: BaseState;
}

export interface BaseState {
  currentPage: CurrentPage;
  filterBy: string;
  orderBy: string;
}

export const initialState: BaseState = {
  currentPage: CurrentPage.SECOND,
  filterBy: null,
  orderBy: null
};

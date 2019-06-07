import { Action, createReducer, on } from '@ngrx/store';

import { clearFilter, navigation, setFilter, setOrder } from './app.actions';
import { BaseState, initialState } from './app.state';

const baseReducer = createReducer(
  initialState,
  on(navigation, (state: BaseState, { currentPage }) => {
    return { ...state, currentPage };
  }),
  on(clearFilter, state => {
    return { ...state, filterBy: null };
  }),
  on(setFilter, (state: BaseState, { filterBy }) => {
    return { ...state, filterBy };
  }),
  on(setOrder, (state: BaseState, { orderBy }) => {
    return { ...state, orderBy };
  })
);

export function reducer(state: BaseState | undefined, action: Action) {
  return baseReducer(state, action);
}

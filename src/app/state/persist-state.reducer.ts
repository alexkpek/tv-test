import { Action, ActionReducer } from '@ngrx/store';

import { AppState } from './app.state';
import { LOCAL_STORAGE_STATE_KEY } from '../constants/constants';

export function persistStateReducer(reducer: ActionReducer<AppState>) {
  const localStorageKey = LOCAL_STORAGE_STATE_KEY;
  return (state: AppState | undefined, action: Action) => {
    if (state === undefined) {
      const persisted = localStorage.getItem(localStorageKey);
      return persisted ? JSON.parse(persisted) : reducer(state, action);
    }

    const newState = reducer(state, action);

    localStorage.setItem(localStorageKey, JSON.stringify(newState));

    return newState;
  };
}

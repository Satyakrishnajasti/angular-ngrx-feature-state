import { createReducer, on } from '@ngrx/store';
import { ITEMS } from 'src/app/models/model';
import {
  loadItems,
  loadItemsFailure,
  loadItemsSuccess,
} from '../action/feature.action';

export const featureKey = 'feature';

export interface State {
  items: ITEMS[];
  error: string | null;
  loading: boolean;
}

export const initialState: State = {
  items: [],
  error: null,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(loadItemsSuccess, (state, action) => {
    return {
      ...state,
      items: action.items,
      loading: false,
    };
  }),
  on(loadItemsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loading: false,
    };
  })
);

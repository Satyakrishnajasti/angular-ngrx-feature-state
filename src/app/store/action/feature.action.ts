import { createAction, props } from '@ngrx/store';
import { ITEMS } from 'src/app/models/model';

export const loadItems = createAction('[Feature]load items');
export const loadItemsSuccess = createAction(
  '[Feature] load items success',
  props<{ items: ITEMS[] }>()
);
export const loadItemsFailure = createAction(
  '[Feature] load items failure',
  props<{ error: string }>()
);

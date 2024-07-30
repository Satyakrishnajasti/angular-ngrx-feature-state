// selectors/feature.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFeature from '../reducer/feature.reducer';

export const selectFeatureState = createFeatureSelector<fromFeature.State>(
  fromFeature.featureKey
);

export const selectItems = createSelector(
  selectFeatureState,
  (state: fromFeature.State) => state.items
);

export const selectLoading = createSelector(
  selectFeatureState,
  (state: fromFeature.State) => state.loading
);

export const selectError = createSelector(
  selectFeatureState,
  (state: fromFeature.State) => state.error
);

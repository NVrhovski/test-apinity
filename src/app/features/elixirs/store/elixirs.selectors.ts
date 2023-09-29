import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromElixirs from './elixirs.reducers';

export const selectElixirsState = createFeatureSelector<fromElixirs.State>(
    fromElixirs.elixirsFeatureKey
);

export const selectElixirsArray = createSelector(
    selectElixirsState,
    (state) => state.elixirs
)

export const selectElixirById = createSelector(
    selectElixirsState,
    (state) => state.selectedElixir
)

export const selectLoadingElixirs = createSelector(
    selectElixirsState,
    (state) => state.loading
)
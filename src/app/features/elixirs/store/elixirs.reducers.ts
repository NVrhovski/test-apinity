import { createReducer, on } from "@ngrx/store";
import { elixir } from "src/app/interfaces/elixir";
import { loadElixirById, loadElixirByIdError, loadElixirByIdSuccess, loadElixirs, loadElixirsError, loadElixirsSuccess } from "./elixirs.actions";

export const elixirsFeatureKey = 'elixirs';

export interface State {
    elixirs: elixir[] | null,
    selectedElixir: elixir | null,
    loading: boolean
}

export const initialState: State = {
    elixirs: null,
    selectedElixir: null,
    loading: false
}

export const reducer = createReducer(
    initialState,
    on(loadElixirs, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(loadElixirsSuccess, (state, data) => {
        return {
            ...state,
            loading: false,
            elixirs: data.elixirs
        }
    }),
    on(loadElixirsError, (state) => {
        return {
            ...state,
            loading: false
        }
    }),
    on(loadElixirById, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(loadElixirByIdSuccess, (state, data) => {
        return {
            ...state,
            loading: false,
            selectedElixir: data.elixir
        }
    }),
    on(loadElixirByIdError, (state) => {
        return {
            ...state,
            loading: false
        }
    })
)
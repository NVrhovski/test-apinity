import { createAction, props } from "@ngrx/store";
import { elixir } from "src/app/interfaces/elixir";

export const loadElixirs = createAction(
    '[Elixirs] Load Elixirs',
    props<{name: string}>()
)
export const loadElixirsSuccess = createAction(
    '[Elixirs] Load Elixirs Success',
    props<{elixirs: elixir[]}>()
)
export const loadElixirsError = createAction(
    '[Elixirs] Load Elixirs Error',
    props<{error: any}>()
)

export const loadElixirById = createAction(
    '[Elixirs] Load Elixirs By Id',
    props<{id: string}>()
)

export const loadElixirByIdSuccess = createAction(
    '[Elixirs] Load Elixirs By Id Success',
    props<{elixir: elixir}>()
)

export const loadElixirByIdError = createAction(
    '[Elixirs] Load Elixirs By Id Error',
    props<{error: any}>()
)
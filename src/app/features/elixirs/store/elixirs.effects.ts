import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ElixirService } from 'src/app/services/elixirs/elixirs.service';
import { loadElixirById, loadElixirByIdError, loadElixirByIdSuccess, loadElixirs, loadElixirsError, loadElixirsSuccess } from './elixirs.actions';

@Injectable()
export class ElixirsEffects {

  constructor(private actions$: Actions, private _elixir: ElixirService) {}

  loadElixirs$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(loadElixirs),
      concatMap((data) =>
        this._elixir.getElixirs(data.name).pipe(
          map(data => loadElixirsSuccess({ elixirs: data })),
          catchError(error => of(loadElixirsError({ error }))))
      )
    );
  });

  loadElixirById$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(loadElixirById),
      concatMap((data) =>
        this._elixir.getElixirById(data.id).pipe(
          map(data => loadElixirByIdSuccess({ elixir: data })),
          catchError(error => of(loadElixirByIdError({ error }))))
      )
    );
  });
}

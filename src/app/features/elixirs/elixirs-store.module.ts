import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { elixirsFeatureKey, reducer } from './store/elixirs.reducers';
import { ElixirsEffects } from './store/elixirs.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(elixirsFeatureKey, reducer),
    EffectsModule.forFeature([ElixirsEffects])
  ]
})
export class ElixirsStoreModule { }

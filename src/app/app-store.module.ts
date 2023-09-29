import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ElixirsStoreModule } from './features/elixirs/elixirs-store.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    ElixirsStoreModule
  ]
})
export class AppStoreModule { }

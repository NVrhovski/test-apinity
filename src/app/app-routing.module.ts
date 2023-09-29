import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'elixirs', loadChildren: () => import('./features/elixirs/elixirs.module').then(m => m.ElixirsModule)},
  {path: '**', loadChildren: () => import('./features/elixirs/elixirs.module').then(m => m.ElixirsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

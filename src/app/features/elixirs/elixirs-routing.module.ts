import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElixirListComponent } from './pages/elixir-list/elixir-list.component';
import { ElixirDetailComponent } from './pages/elixir-detail/elixir-detail.component';

const routes: Routes = [
  {path: '', component: ElixirListComponent},
  {path: ':id', component: ElixirDetailComponent},
  {path: '**', component: ElixirListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElixirsRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElixirsRoutingModule } from './elixirs-routing.module';
import { ElixirCardComponent } from './components/elixir-card/elixir-card.component';
import { ElixirListComponent } from './pages/elixir-list/elixir-list.component';
import { LoaderComponent } from 'src/app/core/components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 
import { ElixirDetailComponent } from './pages/elixir-detail/elixir-detail.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ElixirCardComponent,
    ElixirListComponent,
    LoaderComponent,
    ElixirDetailComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    ElixirsRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    ElixirCardComponent
  ]
})
export class ElixirsModule { }

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { elixir } from 'src/app/interfaces/elixir';
import { loadElixirs } from '../../store/elixirs.actions';
import { selectElixirsArray, selectLoadingElixirs } from '../../store/elixirs.selectors';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-elixir-list',
  templateUrl: './elixir-list.component.html',
  styleUrls: ['./elixir-list.component.scss']
})
export class ElixirListComponent implements OnInit, OnDestroy{

  elixirs: elixir[];
  $elixirs: Subscription;
  loading: boolean;
  $loading: Subscription

  constructor(
    private _store: Store,
    private _title: Title
    )
  {
  
  }

  ngOnInit(): void {
    this._title.setTitle('Test Apinity | Dashboard')
    this._store.dispatch(loadElixirs({name: ''}));
    this.$loading = this._store.select(selectLoadingElixirs).subscribe((res) => {
      this.loading = res
    });
    this.$elixirs = this._store.select(selectElixirsArray).subscribe((res) => {
      this.elixirs = res;
    })
  }

  ngOnDestroy(): void {
    this.$loading.unsubscribe();
    this.$elixirs.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { elixir } from 'src/app/interfaces/elixir';
import { loadElixirById } from '../../store/elixirs.actions';
import { selectElixirById, selectLoadingElixirs } from '../../store/elixirs.selectors';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-elixir-detail',
  templateUrl: './elixir-detail.component.html',
  styleUrls: ['./elixir-detail.component.scss']
})
export class ElixirDetailComponent implements OnInit, OnDestroy{

  elixirId: string;
  elixir: elixir;
  $elixir: Subscription;
  loading: boolean;
  $loading: Subscription
  
  constructor(
    private _route: ActivatedRoute,
    private _store: Store,
    private _title: Title
  ){
    this.elixirId = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this._store.dispatch(loadElixirById({id: this.elixirId}));
    this.$loading = this._store.select(selectLoadingElixirs).subscribe((res) => {
      this.loading = res
    });
    this.$elixir = this._store.select(selectElixirById).subscribe((res) => {
      this.elixir = res;
      this._title.setTitle(`Test Apinity | ${res.name}`)
    })
  }

  ngOnDestroy(): void {
    this.$loading.unsubscribe();
    this.$elixir.unsubscribe();
  }
}

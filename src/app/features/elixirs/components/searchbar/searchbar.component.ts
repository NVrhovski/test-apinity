import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadElixirs } from '../../store/elixirs.actions';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _store: Store
  )
  {
    this.form = this._fb.group({
      name: ['']
    })
  }

  handleSubmit(): void
  {
    this._store.dispatch(loadElixirs({name: this.form.get('name').value}))
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { elixir } from 'src/app/interfaces/elixir';

@Injectable({
  providedIn: 'root'
})
export class ElixirService {

  baseUrl: string;

  constructor(
    private _http: HttpClient
  ) {
    this.baseUrl = 'https://wizard-world-api.herokuapp.com/Elixirs'
  }

  getElixirs(name: string): Observable<elixir[]>{
    return this._http.get<elixir[]>(this.baseUrl, {params: {name: name || ''}})
  }

  getElixirById(id: string): Observable<elixir>{
    return this._http.get<elixir>(`${this.baseUrl}/${id}`)
  }

}

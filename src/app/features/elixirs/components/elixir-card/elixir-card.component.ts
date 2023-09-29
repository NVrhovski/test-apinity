import { Component, Input } from '@angular/core';
import { elixir } from 'src/app/interfaces/elixir';

@Component({
  selector: 'app-elixir-card',
  templateUrl: './elixir-card.component.html',
  styleUrls: ['./elixir-card.component.scss']
})
export class ElixirCardComponent {

  @Input() elixir: elixir;
  
  constructor(){

  }
}

import { Component, Input } from '@angular/core';
/* import { getPokemonImage, getPokemonNumber, Pokemon } from '../../_model/Pokemon'; */
import { getPokemonImage, getPokemonNumber, Pokemon } from '../../_model/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input()
  public pokemon!: Pokemon;

  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;
}
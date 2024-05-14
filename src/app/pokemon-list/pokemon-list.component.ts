import { Component } from '@angular/core';
import { Pokemon } from '../../_model/pokemon';
import { Type } from '../../_model/type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {

  public pokemons: Pokemon[] = [
    {
      image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
      number: 1,
      name: 'Bulbasaur',
      types: [
        Type.Grass,
        Type.Poison,
      ]
    },
    {
      image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png',
      number: 2,
      name: 'Ivysaur',
      types: [
        Type.Grass,
        Type.Poison,
      ]
    },
    {
      image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png',
      number: 3,
      name: 'Venosaur',
      types: [
        Type.Grass,
        Type.Poison,
      ]
    },
    {
      image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
      number: 4,
      name: 'Charmander',
      types: [
        Type.Fire,
      ]
    }
  ]
}



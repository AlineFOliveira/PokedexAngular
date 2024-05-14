import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, map, mergeMap, from } from 'rxjs';
import { Pokemon } from '../_model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemons: Pokemon[] = [];
  constructor(
    private httpClient: HttpClient
  ) { 
    const pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/';

    this.httpClient.get<any>(pokemonsUrl).pipe(
      map(value => value.results),
      map((value: any) =>{
        return from(value).pipe(
          mergeMap((v: any) => this.httpClient.get(v.url))
        );
      }),
      mergeMap(value => value),
    ).subscribe(result => {
      const pokemon: Pokemon = {
        image: result.sprites.front_default,
        number: result.id,
        name: result.name,
        types: result.types.map(t => t.type.name)
        
      };

      this.pokemons[result.id] = pokemon;
    });
    }
}

import { Component, Input } from '@angular/core';
import { Pokemon } from '../../_model/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {

  @Input()
  public pokemon: Pokemon = {
    image: '', // Valor padrão para a propriedade image
    number: 0, // Valor padrão para a propriedade number
    name: '', // Valor padrão para a propriedade name
    types: [] // Valor padrão para a propriedade types
  };

  //faz ficar com tres digitos, como 001
  leadingZero(str: string | number, size: number) {
    let s = String(str);
    while (s.length < (size || 2)){
      s = '0' + s;
    }    
    return s;
  }

}

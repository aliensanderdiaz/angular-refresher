import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  Pokemons: any = [];

  constructor(
    private pokeAPIService: PokeAPIService
  ) { }

  ngOnInit(): void {
    this.getAllPokemons()
  }

  getAllPokemons() {
    this.pokeAPIService.getPokemons()
      .subscribe((data: any) => {
        this.Pokemons = data.results;
        console.log({
          Pokemons: this.Pokemons
        })
      })
  }

}

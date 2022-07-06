import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeAPIService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-poke-description',
  templateUrl: './poke-description.component.html',
  styleUrls: ['./poke-description.component.scss']
})
export class PokeDescriptionComponent implements OnInit {

  pokemonName: string = ''

  constructor(
    private pokeApiService: PokeAPIService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.params['pokemonName']
    this.getPokemon()
    // console.log({
    //   'this.route': this.route
    // })
  }

  getPokemon() {
    this.pokeApiService.getPokemon( this.pokemonName )
      .subscribe((data: any) => {
        console.log({ data })
      })
  }

}

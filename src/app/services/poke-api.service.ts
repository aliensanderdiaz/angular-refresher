import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeAPI } from 'src/environments/PokeAPI';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPokemons() {
    return this.httpClient.get(PokeAPI.url + 'pokemon')
  }

  getPokemon(pokemonName: string) {
    return this.httpClient.get(PokeAPI.url + 'pokemon/' + pokemonName)
  }
}

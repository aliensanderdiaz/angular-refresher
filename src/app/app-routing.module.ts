import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokeDescriptionComponent } from './components/poke-description/poke-description.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'pokemons', component: PokemonsComponent
  },
  {
    path: 'pokemons/:pokemonName', component: PokeDescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BaseStats } from "./components/BaseStatsBox";

export interface PokemonData {
  name: string;
  id: number;
  speciesId: number;
  types: string[];
  image: string;
  height: number;
  weight: number;
  eggGroup: string[];
  baseStats: BaseStats;
  abilities: string[];
}

const Pokedex = require('pokedex');
const pokedex = new Pokedex();
const PokedexJs = require('pokedex.js');
const pokedexJs = new PokedexJs('en');

// Function for list of the first 151 Pokemon.
export const getAllPokemon = () => {
  const pokemonList: PokemonData[] = [];
  for (let pokemonNumber = 1; pokemonNumber <= 151; pokemonNumber++) {
    const pokedexEntry = pokedex.pokemon(pokemonNumber);
    const pokedexJsEntry = JSON.parse(pokedexJs.id(pokemonNumber).get())[0];
    // debugger
    pokemonList.push({
      name: pokedexEntry.name,
      id: parseInt(pokedexEntry.id),
      speciesId: parseInt(pokedexEntry.species_id),
      types: pokedexJsEntry.type,
      image: pokedexEntry.sprites.normal,
      height: parseInt(pokedexEntry.height),
      weight: parseInt(pokedexEntry.weight),
      eggGroup: pokedexJsEntry.eggGroup,
      baseStats: {
        attack: parseInt(pokedexJsEntry.baseStats.A),
        defense: parseInt(pokedexJsEntry.baseStats.B),
        specialAttack: parseInt(pokedexJsEntry.baseStats.C),
        specialDefense: parseInt(pokedexJsEntry.baseStats.D),
        healthpoints: parseInt(pokedexJsEntry.baseStats.H),
        speed: parseInt(pokedexJsEntry.baseStats.S),
      },
      abilities: pokedexJsEntry.ability.map((ability: any) => {
        return ability.name;
      }),
    });
  }
  return pokemonList;
};
export const pokemonList = getAllPokemon();


export const pokemonTypes = [
  "Electric",
  "Fire",
  "Water",
  "Grass",
  "Ghost",
  "Poison",
  "Normal",
  "Fighting",
  "Rock",
  "Psychic",
  "Ground",
  "Ice",
  "Bug",
  "Dragon",
  "Fairy",
  "Flying",
];
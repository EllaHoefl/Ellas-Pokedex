import React from 'react';
import { PokemonData, pokemonList } from '../helpers';
import { evolutionData } from '../evolutionData';

export interface PokemonEvolutionsProps {
	pokemon: PokemonData;
}

export const PokemonEvolutions = (props: PokemonEvolutionsProps) => {
	const pokemon = props.pokemon;
	const pokemonId = pokemon.id;
	const pokemonEvolutionData = evolutionData[pokemonId];

	if (!pokemonEvolutionData || !pokemonEvolutionData.to) {
		return null;
	}

	const evolutionDivs = pokemonEvolutionData.to!.map((evolutionEntry) => {
		const idPokemonEvolvesTo = evolutionEntry.id;
		let evolutionCondition = '';
		if (evolutionEntry.level) {
			evolutionCondition = `Level: ${evolutionEntry.level}`
		} else if (evolutionEntry.item) {
			evolutionCondition = `${evolutionEntry.item}`
		} else {
			evolutionCondition = "Trade"
		}
		const evolutionPokemon = pokemonList[idPokemonEvolvesTo - 1];
			return <div className="evolutionBox">
					<div className="evolutionPokemonBox">
						<div className="evolutionId">
							<b>#{pokemonId} {pokemon.name}</b>
						</div>
						<div className="evolutionImage">
							<img 
								src={pokemon.image} 
								alt={pokemon.name} />
						</div>
					</div>
					<div className="evolutionLevelBox">
						<div className="evolutionArrow">&#10140;</div>
						<div>{evolutionCondition}</div>
					</div>
					<div className="evolutionPokemonBox">
						<div className="evolutionId"><b>#{idPokemonEvolvesTo} {evolutionPokemon.name}</b></div>
						<div className="evolutionImage">
							<img 
								src={evolutionPokemon.image} 
								alt={evolutionPokemon.name} />
						</div>
					</div>
				</div>;
	});
	return <div>{evolutionDivs}</div>
}
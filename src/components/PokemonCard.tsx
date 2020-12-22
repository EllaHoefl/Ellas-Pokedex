import React from 'react';
import { PokemonData } from '../helpers';
import { BaseStatsBox } from './BaseStatsBox';
import { PokemonEvolutions } from './PokemonEvolutions';

export interface PokemonCardProps {
	pokemon: PokemonData;
}

export const PokemonCard = (props: PokemonCardProps) => {
	const pokemon = props.pokemon;
	return (
		<div 
			className={`card type${pokemon.types[0]}`}
			key={pokemon.id}>
			<div className="cardHeader">
				<h2>#{pokemon.id} - {pokemon.name}</h2>
			</div>
			<div className="cardImage">
				<img 
					src={pokemon.image} 
					className="pokemonSprite" 
					alt={pokemon.name} />
			</div>
			<div className="cardText">
				<ul>
					<li><b>ID</b>: {pokemon.speciesId}</li>
					<li><b>Type{pokemon.types.length >= 2 ? "s" : ""}</b>: 
						<div className="cardPokemonTypes">
						{pokemon.types.map((pokemonType) => {
							return <div 
								className={`button type${pokemonType}`}
								key={pokemonType}>
									{pokemonType}
							</div>;
						})}
						</div>
					</li>
					<li><b>Base-Stats</b>:
						<BaseStatsBox 
							stats={pokemon.baseStats}/>
					</li>
					<li><div className="cardpokemonabilitiesBox">
						<div className="cardPokemonAbilitesHeadline"> <b>Abilities</b>:</div>
						<div className="cardPokemonAbilites">
							{pokemon.abilities.map((pokemonAbility) => {
								return <div 
									className="cardpokemonabilitiesButton"
									key={pokemonAbility}>
										{pokemonAbility}
								</div>;
							})}
						</div>
					</div>
					</li>
					<li><b>General Data</b>:
						<ul>
							<li>Height: {pokemon.height / 10} m</li>
							<li>Weight: {pokemon.weight / 10} kg</li>
						</ul>
					</li>
					<li><b>Breeding</b>:
						<ul>
							<li>
								Egg-Group{pokemon.eggGroup.length >= 2 ? "s" : ""}: {pokemon.eggGroup.join(", ")}
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<PokemonEvolutions pokemon={pokemon} />
		</div>
	);
}
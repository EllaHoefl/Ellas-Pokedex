import React from 'react';
import './App.css';
import './types.css';
import { BaseStatsBox } from './components/BaseStatsBox';
import { TypeButton } from './components/TypeButton';
import { evolutionData } from './evolutionData';
import { pokemonList, pokemonTypes } from './helpers';


interface AppState {
  selectedType?: string;
}

class App extends React.Component {
  state: AppState = {
    selectedType: undefined
  };
  selectPokemonType(pokemonType: string) {
    console.log('Select aufgerufen ')
    if (this.state.selectedType === pokemonType) {
      this.setState({selectedType: undefined})
    } else {
      this.setState({selectedType: pokemonType})
    }
  }

  renderEvolution(pokemonId: number) {
    if (evolutionData[pokemonId]) {
      if (evolutionData[pokemonId].to) {
        const evolutionDivs = evolutionData[pokemonId].to!.map((evolutionEntry) => {
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
                  <div className="evolutionId"><b>#{pokemonId} {pokemonList[pokemonId - 1].name}</b></div>
                  <div className="evolutionImage">
                    <img 
                      src={pokemonList[pokemonId - 1].image} 
                      alt={pokemonList[pokemonId - 1].name} />
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
      } else {
        return;
      }
    } else {
      return;
    }
  }

  render() {
    console.log(`rerendering with state ${this.state.selectedType}`)
    const data = pokemonList.filter((pokemon) => {
      if (this.state.selectedType === undefined) {
        return true;
      }
      return pokemon.types.includes(this.state.selectedType);
    })

    return (
      <div className="App">
        <header className="pokedexHeader">
          <p style={{fontSize: '3rem'}}> You are looking for a Pokémon?</p>
          <p>Great, then this awesome pokedex is the right one for you! We provide you with 
            information about the original 151 pokémon, such as basic stats and evolution options.</p>
        </header>
        <div className="filterSequence">
          <p>You want to filter your pokemon? Sure, just select the type you are looking for and 
            this pokédex will find the according pokémon for you.</p>
          <div className="pokemonTypes">
            {pokemonTypes.map((pokemonType) => {
              return <TypeButton
                pokemonType={pokemonType}
                active={this.state.selectedType === pokemonType}
                onClick={() => {
                  console.log('Clicked ')
                  this.selectPokemonType(pokemonType)
                }} />
            })}
          </div>
        </div>
        <h1>The Pokédex</h1>
        <div className="cardSequence">
          {data.map(pokemon => (
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
                      <li>Egg-Group{pokemon.eggGroup.length >= 2 ? "s" : ""}: {pokemon.eggGroup.join(", ")}</li>
                    </ul>
                  </li>
                </ul>
              </div>
              {this.renderEvolution(pokemon.id)}
            </div> 
          ))}
        </div>
      </div>
    );
  }
}

export default App;
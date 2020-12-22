import React from 'react';
import { TypeButton } from './components/TypeButton';
import { pokemonList, pokemonTypes } from './helpers';
import { PokemonCard } from './components/PokemonCard';

import './App.css';
import './types.css';

interface AppState {
  selectedType?: string;
  windowWidth: number;
}

class App extends React.Component {
  state: AppState = {
    selectedType: undefined,
    windowWidth: window.innerWidth
  };

  updateDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  selectPokemonType(pokemonType: string) {
    console.log('Select aufgerufen ')
    if (this.state.selectedType === pokemonType) {
      this.setState({selectedType: undefined})
    } else {
      this.setState({selectedType: pokemonType})
    }
  }

  render() {
    console.log(`rerendering with state ${this.state.selectedType}`)
    const data = pokemonList.filter((pokemon) => {
      if (this.state.selectedType === undefined) {
        return true;
      }
      return pokemon.types.includes(this.state.selectedType);
    });

    const contentColumns: JSX.Element[][] = [];
    const numColumns = Math.max(1, Math.floor(this.state.windowWidth / 350));
    for (let i = 0; i < numColumns; i++) {
      contentColumns[i] = [];
    }

    data.forEach((pokemon, index) => {
      const columnIndex = index % numColumns;
      contentColumns[columnIndex].push(
        <PokemonCard pokemon={pokemon} />
      );
    });

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
          {contentColumns.map((content) => 
            <div className="cardColumn">{content}</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
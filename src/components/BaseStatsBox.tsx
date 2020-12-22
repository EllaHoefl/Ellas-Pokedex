import './BaseStatsBox.css';

export interface BaseStats {
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  healthpoints: number;
  speed: number;
}

interface BaseStatsBoxProps {
  stats: BaseStats;
}

const getWidth = (value: number) => {
  const normalizedWidth = Math.min(100, (value / 160) * 100);
  return `${normalizedWidth}%`;
}

export const BaseStatsBox = (props: BaseStatsBoxProps) => {
  return <div className="cardPokemonBaseStatsChartBox">
    <div className="cardPokemonBaseStatsChartStats">
      <div className="cardPokemonBaseStatsChartsStatsNames">AT</div>
      <div className="cardPokemonBaseStatsChartsStatsNames">DE</div>
      <div className="cardPokemonBaseStatsChartsStatsNames">SA</div>
      <div className="cardPokemonBaseStatsChartsStatsNames">SD</div>
      <div className="cardPokemonBaseStatsChartsStatsNames">HP</div>
      <div className="cardPokemonBaseStatsChartsStatsNames">SP</div>
    </div>
    <div className="cardPokemonBaseStatsChartGrid">
      <div
        className="cardPokemonBaseStatsBar barAttack"
        style={{width: getWidth(props.stats.attack)}}
        title="Attack"
      >{props.stats.attack}</div>
      <div
        className="cardPokemonBaseStatsBar barDefense"
        style={{width: getWidth(props.stats.defense)}}
        title="Defense"
      >{props.stats.defense}</div>
      <div
        className="cardPokemonBaseStatsBar barSpecialAttack"
        style={{width: getWidth(props.stats.specialAttack)}}
        title="Special Attack"
      >{props.stats.specialAttack}</div>
      <div
        className="cardPokemonBaseStatsBar barSpecialDefense"
        style={{width: getWidth(props.stats.specialDefense)}}
        title="Special Defense"
      >{props.stats.specialDefense}</div>
      <div
        className="cardPokemonBaseStatsBar barHealthpoints"
        style={{width: getWidth(props.stats.healthpoints)}}
        title="HP"
      >{props.stats.healthpoints}</div>
      <div
        className="cardPokemonBaseStatsBar barSpeed"
        style={{width: getWidth(props.stats.speed)}}
        title="Speed"
      >{props.stats.speed}</div>
    </div>
  </div>
}

interface TypeButtonProps {
  active?: boolean;
  pokemonType: string;
  onClick?: () => void;
}

export const TypeButton = (props: TypeButtonProps) => {
  return <div 
    key={props.pokemonType}
    className={`button type${props.pokemonType}` + 
    `${props.active ? " active" : ""}`}
      onClick={props.onClick}>
      {props.pokemonType}
  </div>;
}
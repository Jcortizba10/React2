export function PokemonItem({ pokemonData }) {
  const { name, id, sprites, types } = pokemonData; // Agrega "types" a la destructuración
  return (
    <div className="card">
      <div className="photo">
        <img
          src={sprites.other["official-artwork"].front_default}
          alt="pokemon photo"
        />
      </div>
      <div className="info">
        <div className="id">N° {id}</div>
        <div className="name">{name}</div>
        <div className="types">Tipos: {types.map(type => (
          <div key={type.type.name} className={type.type.name}>
            {type.type.name}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

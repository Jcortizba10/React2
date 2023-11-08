/*import { useParams } from "react-router-dom";
import { BackButton } from "../BackButton/BackButton"

export function PokemonDetail() {
  const { name, id } = useParams();
  return (
    <div className="card">
      <div className="photo">
        <img
          /* src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" */
 /*         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="pokemon photo"
        />
      </div>
      <div className="info">
        <div className="id">N° {id}</div>
        <div className="name">{name}</div>
        <div className="types">
          <div className="grass">Grass</div>
          <div className="poison">Poison</div>
        </div>
      </div>
      <div>
        <BackButton />
      </div>
    </div>
  );
}*/

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../BackButton/BackButton";
import "./PokemonDetail.css";
export function PokemonDetail() {
  const { name, id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Realiza una solicitud a la API de Pokémon para obtener información adicional del Pokémon
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id]);

  if (error) {
    return <div>Error al cargar los datos del Pokémon.</div>;
  }

  if (!pokemonData) {
    return <div>Cargando...</div>;
  }

  const types = pokemonData.types.map((type) => type.type.name).join(", ");
  const description = pokemonData.species.name; // Puedes obtener la descripción de la especie desde la API
  const stats = pokemonData.stats;

  return (
    <div className="card">
      <div className="photo">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="pokemon photo"
        />
      </div>
      <div className="info">
        <div className="id">N° {id}</div>
        <div className="name">{name}</div>
        <div className="types">Tipo(s): {types}</div>
        <div className="description">Descripción: {description}</div>
        <div className="stats">
          Estadísticas:
          {stats.map((stat) => (
            <div key={stat.stat.name} className="stat">
              <div className="stat-name">{stat.stat.name}:</div>
              <div className="stat-value">{stat.base_stat}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <BackButton />
      </div>
    </div>
  );
}

import React from 'react';
import Abilities from "./Abilities";

function Pokemons({ data }) {
    return (
        <ul className="inner-container">
            { data.map( (item) => {
                return <li className="pokemon-card">
                    <h2>{item.name}</h2>
                    {/*<img className="image" src={item.sprites.front_default} alt={item.name}/>*/}
                    <h3>Moves: <span className="default-text">{item.moves.length}</span></h3>
                    <h3>Weight: <span className="default-text">{item.weight}</span></h3>
                    <h3>Abilities:</h3>
                    <Abilities
                        abilities={item.abilities}
                    />
                </li>
            } ) }
        </ul>
    );
}

export default Pokemons;
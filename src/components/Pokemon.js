import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Abilities from "./Abilities";

function Pokemon({ endpoint }) {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        console.log("Pokemon " + endpoint);

        async function fetchData() {
            try {
                const { data } = await axios.get(endpoint);
                setPokemon(data);
            } catch (e) {
                console.error(e);
            }
        }
        if (endpoint) {
            fetchData();
        }
    }, [endpoint]);

    return (
        <section className="pokemon-card">
            {Object.keys(pokemon).length > 0 &&
                <>
                    <h2>{pokemon.name}</h2>
                    <img className="image" src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    <h3>Moves: <span className="default-text">{pokemon.moves.length}</span></h3>
                    <h3>Weight: <span className="default-text">{pokemon.weight}</span></h3>
                    <h3>Abilities:</h3>
                    <Abilities
                        abilities={pokemon.abilities}
                    />
                </>
            }
        </section>
    );
}
export default Pokemon;
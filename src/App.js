import React, {useEffect, useState} from 'react';
import './App.css';
import axios, {isCancel} from "axios";
import Pokemon from "./components/Pokemon";
import Button from "./components/Button";

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    const [abilities, setAbilities] = useState({});

    useEffect(() => {
        toggleLoading(true)
        setError(false)
        const fetchData = async () => {
            try {
                const {data} = await axios.get(endpoint);
                console.log(data);
                setPokemons(data)
                setAbilities(data.abilities)
            } catch (e) {
                if(axios.isCancel(e)) {
                    console.log('The axios request was cancelled')
                } else {
                    console.error(e);
                    setError(true)
                }
            }
        }
        fetchData()
        toggleLoading(false)

    }, [endpoint]);

    return (
        <>
            <header className="outer-container">
                <div className="inner-header">
                    {loading && <p>Loading...</p>}
                    {error && <p>Er is iets mis gegaan.</p>}
                    {pokemons &&
                    <>
                    <img className="pokemon-logo"
                         src="https://cdn.mos.cms.futurecdn.net/nJqzZf3iyhawJfofUMicFV-1920-80.jpg" alt="pokemon logo"/>
                    <div className="buttons">
                        <Button
                            disabled={!pokemons.previous}
                            clickHandler={() => setEndpoint(pokemons.previous)}
                        >
                            Vorige
                        </Button>
                        <Button
                            disabled={!pokemons.next}
                            clickHandler={() => setEndpoint(pokemons.next)}
                        >
                            Volgende
                        </Button>
                    </div>
                    </>
                    }
                </div>
            </header>
            <main className="outer-container">
                <div className="inner-container">
                    {pokemons.results && pokemons.results.map((pokemon) => {
                        return <Pokemon key={pokemon.name} endpoint={pokemon.url}/>
                    })}
                </div>
            </main>
        </>
    );
}

export default App;

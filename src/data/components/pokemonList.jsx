import React, {useState, useEffect} from 'react';
import {PokemonCard} from "./pokemonCard";
import {Pagination} from "./functions/pagination";
import {NumberOfPokemon} from "./functions/numberOfPokemon";
import Axios from "axios";
import {observer} from "mobx-react";

export const PokemonList = observer(() => {

    const [pokemon, setPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextPage, setNextPage] = useState(currentPage);
    const [prevPage, setPrevPage] = useState(currentPage);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        Axios.get(currentPage)
            .then(response => {
                setLoading(false);
                setNextPage(response.data.next);
                setPrevPage(response.data.previous);
                setPokemon(response.data.results.map(pokemon => pokemon))
            });

    },[currentPage]);

    if (loading) return (
        <div className='loading jumbotron'>
            <h1 className='container' style={{marginLeft : '42%'}}>Loading...</h1>
        </div>
    );

    const buttonNext = () => {
        setCurrentPage(nextPage)
    };

    const buttonPrev = () => {
        setCurrentPage(prevPage);
    };

    const filter = limit => {
        setCurrentPage(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    };

    return(
        <div>
            <section className='jumbotron' style={{
                marginBottom : '65px'
            }}><h1 style={{
                display : 'flex',
                justifyContent : 'center'
            }} className='display-4'>Navigation</h1>
                <Pagination left={buttonPrev} right={buttonNext}/>
                <NumberOfPokemon filter={filter}/>
            </section>

            <section className='row'>
                {pokemon.map((pokemon) =>
                    <PokemonCard
                        key={pokemon.id}
                        name = {pokemon.name}
                        url = {pokemon.url}
                    />)}
            </section>
        </div>
    )
});
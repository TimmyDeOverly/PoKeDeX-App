import React from 'react';
import {PokemonList} from "../pokemonList";

export const Home = () => (
    <div>
        <div className="container">
            <div className='row'>
                <div className='col'>
                    <PokemonList/>
                </div>
            </div>
        </div>
    </div>
);

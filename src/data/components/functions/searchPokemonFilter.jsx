import React, {useState} from 'react';
import Axios from "axios";
import {observer} from "mobx-react";

export const SearchPokemonFilter = observer(() => {

    const [pokemonId, setPokemonId] = useState('');
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonIconFront, setPokemonIconFront] = useState(null);
    const [pokemonIconBack, setPokemonIconBack] = useState(null);
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonAbilities, setPokemonAbilities] = useState([]);
    const [pokemonWeight, SetPokemonWeight] = useState('');
    const [pokemonHeight, SetPokemonHeight] = useState('');

    const PokemonSearch = input => {
        input.preventDefault();
        const pokemon = input.target.elements.input.value;
        Axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
            .then(response => {
                const id = response.data.id;
                const name = response.data.name;
                const iconFront = response.data.sprites.front_default;
                const iconBack = response.data.sprites.back_default;
                const type = response.data.types.map(type => type.type.name);
                const abilities = response.data.abilities.map(abilities => abilities.ability.name);
                const weight = response.data.weight;
                const height = response.data.height;
                setPokemonId(id);
                setPokemonName(name);
                setPokemonIconFront(iconFront);
                setPokemonIconBack(iconBack);
                setPokemonType(type);
                setPokemonAbilities(abilities);
                SetPokemonWeight(weight);
                SetPokemonHeight(height)
            })
            .catch(error => console.log(error));
    };
    return(
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">Search Pokemon</a>
                <form className="form-inline" onSubmit={PokemonSearch}>
                    <input className="form-control mr-sm-2" type="search" name='input' placeholder="Enter name or id" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search!</button>
                </form>
            </nav>
            <div style={{
                display : 'flex',
                justifyContent : 'center',
                marginTop : '2%'
            }}>
                {PokemonSearch ?
                    <div className='pokeName col-md-3 col-sm-6 mb-5'>
                        <div className='card bg-success'>
                            <div className='card-header'>
                                {`id : ${pokemonId}`}
                            </div>
                            <div className='card-title mx-auto'>
                                <img src={pokemonIconFront}/>
                                |
                                |
                                <img src={pokemonIconBack}/>
                            </div>
                            <div className='card-body mx-auto'>
                                {`NAME : ${pokemonName}`}
                            </div>
                            <div className='card-body mx-auto'>
                                {`TYPE : ${pokemonType}`}
                            </div>
                            <div className='card-body mx-auto'>
                                {`ABILITIES : ${pokemonAbilities}`}
                            </div>
                            <div className='card-body mx-auto'>
                                {`HEIGHT : ${pokemonHeight}`}
                            </div>
                            <div className='card-body mx-auto'>
                                {`WEIGHT : ${pokemonWeight}`}
                            </div>
                        </div>
                    </div> : <div>..</div>}
            </div>
        </div>
    )
});
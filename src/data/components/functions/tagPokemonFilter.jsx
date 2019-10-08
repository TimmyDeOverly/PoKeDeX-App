import React, {useState, useEffect} from 'react';
import Axios from "axios";

export const TagPokemonFilter = () => {

    const [type, setType] = useState([]);
    const [types] = useState('https://pokeapi.co/api/v2/type');
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        Axios
            .get(types)
            .then(response => {
                setType(response.data.results)
            });
    });

    const FilteredPokemonList = url => {
        Axios
            .get(url)
            .then(response => {
                setPokemon(response.data.pokemon)
            })
            .catch(error => console.log(error));
    };

    return(
        <div>
            <section>
                <ul className='btn-group' style={{
                    display : 'flex',
                    justifyContent: 'center',
                    marginRight : '3.5%'
                }}>
                    {type.map(type => <button className='btn btn-danger' onClick={event => FilteredPokemonList(type.url)}>{type.name}</button>)}
                </ul>
            </section>
            <section>
                {FilteredPokemonList ?
                    <div className='row' style={{
                        marginTop : '2.5%'
                    }}>
                        {pokemon.map(data => <div className='col-md-3 col-sm-6 mb-5'>
                            <div className='jumbotron card'>
                                <div className='card-body mx-auto'>
                                    <h5>{data.pokemon.name}</h5>
                                </div>
                                <div className='card-img'>

                                </div>
                            </div>
                        </div>)}
                    </div> : <div>...</div>}
            </section>
        </div>
    )
};
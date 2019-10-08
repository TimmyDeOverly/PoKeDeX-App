import React, {useState, useEffect} from 'react';

export const PokemonCard = ({name, url}) => {

    const [index, setIndex] = useState('');
    const [img, setImg] = useState(null);

    useEffect(() => {
        const index = url.split("/")[url.split("/").length - 2];
        const img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`;
        setIndex(index);
        setImg(img);
    }, [url]);

    return(
        <div className='col-md-3 col-sm-6 mb-5'>
            <div className='jumbotron card'>
                <div className='card-body mx-auto'>
                    <h5 className='pokeName'>{name}</h5>
                </div>
                <div className='card-body mx-auto'>
                    <img src={img}/>
                </div>
            </div>
        </div>
    )
};
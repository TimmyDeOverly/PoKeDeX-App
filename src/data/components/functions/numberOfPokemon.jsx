import React from 'react';

export const NumberOfPokemon = ({filter}) => {
    return(
        <section className='buttonsNum btn-group'>
            <button type="button" className="btn btn-outline-secondary" onClick={() => filter(10)}>10 Cards</button>
            <button type="button" className="btn btn-outline-secondary" onClick={() => filter(20)}>20 Cards</button>
            <button type="button" className="btn btn-outline-secondary" onClick={() => filter(50)}>50 Cards</button>
        </section>
    )
};
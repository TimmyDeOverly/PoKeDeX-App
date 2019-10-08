import React from 'react';

export const Pagination = ({left, right}) => {
    return(
        <section className='buttons'>
            <button className="btn btn-outline-secondary" onClick={left}>
                <h3 className='title'>Prev page</h3>
            </button>
            <button className="btn btn-outline-secondary" onClick={right} style={{
            }}>
                <h3 className='title'>Next page</h3>
            </button>
        </section>
    )
};
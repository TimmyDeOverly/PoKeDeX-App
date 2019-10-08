import React from 'react';
import {NavLink} from "react-router-dom";

export const NavBar = () => (

    <nav className='navbar navbar-dark navbar-expand-lg bg-secondary'>
        <section>
            <div className='navbar navbar-brand mb-0 h1'>
                PoKeDeX @pp
            </div>
        </section>

        <section>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/' exact>
                        Home
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/search'>
                        Search
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/types'>
                        Types
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/about'>
                        About/Info
                    </NavLink>
                </li>
            </ul>
        </section>
    </nav>
);
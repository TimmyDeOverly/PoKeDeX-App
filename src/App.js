import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.scss';
import {NavBar} from "./data/components/nav-bar";
import {Home} from "./data/components/pages/home";
import {Search} from "./data/components/pages/search";
import {Types} from "./data/components/pages/types";
import {About} from "./data/components/pages/about";

export default function App () {
    return(
        <BrowserRouter>
            <NavBar/>
            <section className='container pt-4'>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/search'} component={Search}/>
                    <Route path={'/types'} component={Types}/>
                    <Route path={'/about'} component={About}/>
                </Switch>
            </section>
        </BrowserRouter>
    )
};


import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import MoviesDetails from './pages/MovieDetails';


function Routes () {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/movies" component={MoviesDetails}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Teachers from '../pages/Teachers';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Teachers} />
            </Switch>
        </BrowserRouter>
    );
}

export default hot(module)(App);

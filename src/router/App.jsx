import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Teachers from '../pages/Teachers';
import { createGlobalStyle } from 'styled-components';
import Feed from '../pages/Feed';
import Diary from '../pages/Diary';
import User from '../pages/User';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/consulting" component={Teachers} />
                <Route exact path="/feed" component={Feed} />
                <Route exact path="/diary" component={Diary} />
                <Route exact path="/user" component={User} />
            </Switch>
        </BrowserRouter>
    );
}

export default hot(module)(App);

const GlobalStyle = createGlobalStyle`
    body, p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }
`;

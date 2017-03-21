import 'core-js/fn/object/assign';
import 'normalize.css/normalize.css';
import 'styles/app.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Home from './components/Pages/Home.jsx';
import About from './components/Pages/About.jsx';
import Training from './components/Pages/Training.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/About" component={About} />
        <Route path="/Training" component={Training} />
    </Router>,
    document.getElementById('app')
);

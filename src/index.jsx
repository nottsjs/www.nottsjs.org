import 'core-js/fn/object/assign';
import 'normalize.css/normalize.css';
import 'styles/app.css';

import 'react-mdl/extra/css/material.yellow-indigo.min.css';
import 'react-mdl/extra/material.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Pages/Home.jsx';
import About from './components/Pages/About.jsx';
import Training from './components/Pages/Training.jsx';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Training" component={Training} />
      </div>
    </Router>,
    document.getElementById('app')
);

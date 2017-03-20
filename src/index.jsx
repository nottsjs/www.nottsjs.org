import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// Import routing components
import { Router, Route, browserHistory } from 'react-router';

var data = [
	{
	info1: 'Tired',
	info2: 'More Awake'
	},
	{
	info1: 'Very Tired',
	info2: 'Even More Awake'
	},
	{
	info1: 'Sleeping',
	info2: 'Buzzin'
	}]

import Home from './components/Pages/Home.jsx';
import About from './components/Pages/About.jsx';
import Training from './components/Pages/Training.jsx';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/About" component={About} data={data}/>
        <Route path="/Training" component={Training} data={data}/>
    </Router>,
    document.getElementById('app')
);

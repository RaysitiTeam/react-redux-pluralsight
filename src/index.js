import 'babel-polyfill'; //There are few ES6 which babel cannot transpile, so there's babel polyfill
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
//Styles
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


render(
    <Router history={browserHistory} routes={routes}/>, document.getElementById('app')    
);
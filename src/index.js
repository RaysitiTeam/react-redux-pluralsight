//#5: Wrap the configure store as store object and assign it to the Provider component from react-redux
import 'babel-polyfill'; //There are few ES6 which babel cannot transpile, so there's babel polyfill
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
//Redux Provider component
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
//Styles
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(); //We can pass initial state here too or in courseReducer function.
render(
    <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
    </Provider>, document.getElementById('app')    
);
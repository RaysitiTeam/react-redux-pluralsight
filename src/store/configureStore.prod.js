//#4: Create a Store function by wiring the rootReducer with - createStore and applyMiddleware functions of redux
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers'; // This will look for reducers/index.js
//OPTIONAL - Need to add a validation check to see if the state is mutating or not.
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';


//Sort of IIFE - This function will run as default when this script is called - export default function
export default function configureStore(initialState){
    // return createStore(rootReducer,initialState, applyMiddleware(reduxImmutableStateInvariant()));
    return createStore(rootReducer,initialState);
}//end:configureStore

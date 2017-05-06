//#3: Register the courseReducer in a redux rootReducer package
import {combineReducers} from 'redux'; //will combine multiple reducers inside one root reducer package.
import courses from './courseReducer';

//We are using a - SHORT HAND PROPERTY NAME
const rootReducer = combineReducers({
    courses:courses
});

export default rootReducer;
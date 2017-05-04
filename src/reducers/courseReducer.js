//#2: Second script to run
export default function courseReducer(state=[],action){
    switch(action.type){
        case 'CREATE_COURSE':
            // state.push(action.course); //State is immutable, I shouldn't be mutating the state.
            return [...state,Object.assign({},action.course)]; // This way we are passing a copy of state, not the mutated state.            
        default: 
            return state; //Any other action, we can just return the current state.
    }//end:switch
}
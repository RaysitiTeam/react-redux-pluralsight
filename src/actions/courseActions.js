//#1: First script to run
export function createCourse(course){    
    return{
        type:'CREATE_COURSE', //This is the default mandatory property of any action object in Redux
        course:course // The rest of the object can be styled in any manner. In ES6 we can omit RHS if LHS name equals RHS
    };
}//end:createCourse
import React, {Component} from 'react';
import {Link} from 'react-router';

class Aboutpage extends Component{
    render(){
        return(
            <div>
                <h1>About Us</h1>
                <p>This is the about us page, uses the React, Router and redux technologies</p>
                <Link to="/" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }//end:render
}//end:class-Aboutpage

export default Aboutpage;
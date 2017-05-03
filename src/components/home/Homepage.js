import React, {Component} from 'react';
import {Link} from 'react-router';

class Homepage extends Component{
    render(){
        return(
          <div className="jumbotron">
              <h1>Pluralsight Administration</h1>
              <p>React, Redux and other technologies</p>
              <Link to="/about" className="btn btn-primary btn-lg">Learn More</Link>
          </div>  
        );//end:return
    }//end:render
}//end:class-Homepage

export default Homepage;
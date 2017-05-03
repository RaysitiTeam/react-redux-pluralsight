import React, {Component, PropTypes} from 'react';
import Header from './common/Header';


class App extends Component{
    render(){
        return(
            <div className="container-fluid">                
                <Header/>
                <p>{this.props.children}</p>
            </div>
        );
    }//end:render
}//end:class-App

App.propTypes = {
    children:PropTypes.object.isRequired
};//end:propTypes validation

export default App;
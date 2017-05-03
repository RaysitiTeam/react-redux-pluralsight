import React, {Component, PropTypes} from 'react';


class App extends Component{
    render(){
        return(
            <div>
                <h1>Main Application</h1>
                <p>{this.props.children}</p>
            </div>
        );
    }//end:render
}//end:class-App

App.propTypes = {
    children:PropTypes.object.isRequired
};//end:propTypes validation

export default App;
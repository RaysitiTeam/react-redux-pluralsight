import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends Component{
    constructor(props,context){
        super(props,context);

    }//end:constructor

    render(){
        return(
            <div>

            </div>
        );
    }//end:render
}//end:class-ManageCoursePage

ManageCoursePage.propTypes = {
    courses:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
    return{
        courses:state.courses
    };
}//end:mapStateToProps

function mapDispatchToProps(dispatch){
    return{
        courseAction:bindActionCreators(courseActions,dispatch)
    };
}//end:mapDispatchToProps   

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
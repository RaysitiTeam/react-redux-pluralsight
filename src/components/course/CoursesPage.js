import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
//If you add - export default in courseActions.js, then you will not be able to use the alias - courseActions
import * as courseActions from '../../actions/courseActions'; //Import all exported functions

class CoursePage extends Component{    

    constructor(props,context){
        super(props,context);
        this.state = {course:{title:""}};

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        
    }//end:constructor

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course:course});        
    }//end:onTitleChange

    onClickSave(){
        // alert(`Saving: ${this.state.course.title}`);
        this.props.actions.createCourse(this.state.course); //This is because we havent invoked - mapDispatchToProps
        const course = {title:""};
        this.setState({course:course}); //Clear the input field
    }//end:onClickSave

    courseRow(course,index){
        return <div key={index}>{course.title}</div>;
    }//end:courseRow


    render(){
        return(
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add a Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value = {this.state.course.title}/>
                    &nbsp;
                <input
                    type="submit"
                    value="Save"
                    className="btn btn-success btn-sm"
                    onClick={this.onClickSave}/>
            </div>
        );
    }//end:render
}//end:class-CoursePage

CoursePage.propTypes = {    
    courses:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return{
        courses:state.courses //Now our component CoursePage has a new props - courses
    };
}//end:mapStateToProps

//without the dispatch, the function will just return the object
function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(courseActions,dispatch) // Now we have a common action object for all the actions - AWESOME
    };
}//end:mapDispatchToProps

export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursePage);

// export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
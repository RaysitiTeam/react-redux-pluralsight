import React,{Component} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Header = (props)=>{
    const {courses} = props;
    return(
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink> {" | "}
            <Link to="/about" activeClassName="active">About</Link> {" | "}
            <Link to="/course" activeClassName="active">Courses</Link> {" | "}
            {courses.map((course,index)=><Link key={index} to="/course" activeClassName="active">{course.title}</Link>)}
            <LoadingDots dots={10} interval={100}/>
        </nav>        
    );
};//end:Header

Header.propTypes = {
    courses:PropTypes.array.isRequired
};//end:validation

function mapStateToProps(state,ownProps){
    return{
        courses:state.courses //Now our component CoursePage has a new props - courses
    };
}//end:mapStateToProps

export default connect(mapStateToProps)(Header);
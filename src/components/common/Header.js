import React,{Component} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = ()=>{
    return(
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink> {" | "}
            <Link to="/about" activeClassName="active">About</Link> {" | "}
            <Link to="/course" activeClassName="active">Courses</Link>
        </nav>
    );
}//end:Header

export default Header;
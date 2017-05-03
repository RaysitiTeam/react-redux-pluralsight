import React,{Component} from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/Homepage';
import AboutPage from './components/about/Aboutpage';
import CoursesPage from './components/course/CoursesPage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="course" component={CoursesPage}/>
    </Route>
);//end:export default function
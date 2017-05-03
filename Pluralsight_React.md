# Lynda React

 ## Useful Links
- [Schema Store for Web Development](http://schemastore.org/json/)
- [React Icons Website](https://gorangajic.github.io/react-icons/fa.html)
- [React Proptypes In Typeschecking](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
- [Mounting Lifecycle reference](https://goo.gl/f6rL3C)
- [Random User Website](https://www.randomuser.me)
- [Understanding ECMASCRIPT 6 arrow functions](https://www.nczonline.net/blog/2013/09/10/understanding-ecmascript-6-arrow-functions/)
- [React Scaffolding application setup](https://github.com/coryhouse/react-slingshot)
- [React Pluralsight github repo](https://github.com/coryhouse/pluralsight-redux-starter)
 ## Table of Contents
- [Intalling Web Pack](#installing-web-pack)
- [Importing React Components](#importing-react-components)
- [Creating a Simple Custom Loader using React](#creating-a-simple-custom-loader-using-react)
- [React Basic Dos and Donts](#react-basic-dos-and-donts)
- [Three ways of Creating React Components](#three-ways-of-creating-react-components)
- [Difference between Container and Presentational Component](#difference-between-container-and-presentational-component)
- [Package Json for the project](#package-json-for-the-project)
- [Using Default Props in React](#using-default-props-in-react)
- [Using Proptypes A feature similar to TypeScript](#using-proptypes-a-feature-similar-to-typescript)
- [Using React Router](#using-react-router)
- [React Forms](#react-forms)
- [Using Refs with Forms](#using-refs-with-forms)
- [Understanding the Component Lifecycle](#understanding-the-component-lifecycle)
 ## React Inline Styling using Radium (Pluralsight)
- [Introduction to radium](#introduction-to-radium)
- [Radium Styling Video on Pluralsight](https://app.pluralsight.com/player?course=react-styling-components&author=jake-trent&name=react-styling-components-m3&clip=2&mode=live)
 ## Using Webpack for CSS Styling
- [Introduction to Webpack Asset building](#introduction-to-webpack-asset-building)
 ## React and Redux
 - [React Redux Versions](#react-redux-versions)
 - [Hot Reloading](#hot-reloading)
 - [Babel configuration](#babel-configuration)
 - [Package Json file](#package-json-file)
 ## Introduction to Redux
 - [Introduction to Redux](#introduction-to-redux)
 - [Detailed Redux](#detailed-redux)
 - [Ecmascript 6 Object Assign](#ecmascript-6-object-assign)
 - [Handling Immutability in different versions of Javascript](#handling-immutability-in-different-versions-of-javascript)
 - [Reducer Detailed](#reducer-detailed)



 # Installing Web Pack

 ```sh
 npm install webpack babel-loader webpack-dev-server --save-dev
 npm install -g webpack
 npm install react react-dom --save
 npm install axios --save
 ```
>NOTE: If you prefer not to use global command `webpack`

 ```sh
 ./node_modules/.bin/webpack
 ```


 We then create a `Web pack config js` file

 ```js
 var webpack = require("webpack");
 module.exports = {
    entry:"./src/index.js",
    output:{
        path: "dist/assets",
        filename:"bundle.js",
        publicPath: "assets",
    },
    devServer:{
        inline:true,
        contentBase:"./dist",
        port:3000
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                loader:["babel-loader"],
                query:{
                    presets:["latest", "state-0", "react"]
                }
            }
        ]
    }
 }
 ```

 ---

 # Importing React Components

 You can import React, JQuery, Axios in this package by simply using the `import` key word and asking for the component

 ```js
 import React, {Component} from 'react'; //Imports React and React.Component
import Axios from 'axios'; //Imports the Axios library
import $ from 'jquery'; //Imports the jQuery library, mighty cool
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //imports Bootstrap CSS file, even cooler
 ```

 ---

 # Creating a Simple Custom Loader using React

 This is a basic Loader which uses the following libraries

 - Bootstrap
 - jQuery (Optional, but not required)
 - classnames (Another React supporting library)

The following is the sudo-code

```js
import React, {Component} from 'react';
import ClassNames from 'classnames';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import './styles/Loader.css';

class Loader extends Component{
    state = {
        isVisible:this.props.isLoading
    };

    // toggleLoader=()=>{
    //     this.setState(prevState=>({
    //         isVisible:!prevState.isVisible
    //     }));//end:setState
    // };//end:toggleLoader

    render(){
        const {isVisible} = this.state;

        // switch(this.props.isLoading){
        //     case true:
        //         this.toggleLoader();
        //         break;
        //     case false:
        //         this.toggleLoader();
        //         break;
        // }//end:switch

        let liClasses = ClassNames({
                            'loader-div': true,
                            'loader-active': this.state.isVisible,
                            'loader-inactive': !this.state.isVisible
                        });
        return(
            <div className={liClasses}>
                <div className="loader-box">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Loading...</p>
                </div>
            </div>
        );//end:return
    }//end:render    
}//end-class:Loader

export default Loader;
```

And it's corresponding CSS files is as follows:

```css
.loader-div{
    width: 100%;
 
 text-align: center;   
}

.loader-box{    
    color:#fff;
    border-radius: 15px;
    background: rgba(34,34,34,0.8);
    text-align: center;
    margin: 0 auto;
    border: 1px solid #4C4C4C;
    width: 150px;
    height: auto;
}

.loader-active{
    animation: Opacity-fade-in .4s linear;
    opacity: 1;
}

.loader-inactive{
    animation: Opacity-fade-out .4s linear;
    opacity: 0;
}

@keyframes Opacity-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes Opacity-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}
```

---

# React Basic Dos and Donts

Note the following Rules when writing Props in a React component
- `props` in a `Class component` can be simply accessed using `this.props.propName`
- `props` in a `function component` need to sent as an arguement when defining the function component

```js
const Button = (props)=>{
    //...Component logic
}
```

- When assigning props values, if the value is a string, then simply pass using double quotes
- When the value is anything other than string type, then pass using the curly braces

```js
<Button stringValue = "This is a string" numberInput = {this.inputValue} />
```

# Three ways of Creating React Components

There are three ways of Creating React Components so far (based on all the examples that I have seen)...

## 1. Primitive React Component (might be deprecated)...
```js
export const PrimitiveComponent = React.createClass({
    methodOne(param1){}, methodTwo(param1,param2){}, methodThree(param3){},
    render(){
        return(
            <div>This is a primitive Component </div>
        );//end:return
    }//end:render
});//end:createClass
```

## 2. Function Component (for stateless Components)...

This is supported in the EcmaScript 6 / 2015 format..

```js
const FunctionalComponent = (props) =>{
    return(
        <div>This is a functional Component </div>
    );//end:return
}//end:functionComponent

export default FunctionComponent
```

## 3. Class Component (for statehandling and setState and prevState features)

This is also supported in the Ecmascript 6 / 2015 format...

```js
class ClassComponent extends React.Component{
    state = {simpleState:"HelloWorld"}
    render(){
        return(
            <div>This is a Class component</div>
        );//end:return
    }//end:render
}//end-class:ClassComponent

export default ClassComponent
```


# Difference between Container and Presentational Component
[top](#)

|Container|Presentational|
|:-------------------:|:--------------:|
|Little or no markup|Nearly all Markup|
|Everything is communicated to their children using `props.children`|Everything is communciated via `props`|
|Pass data and actions down|Receive data and actions via `props`|
|Knows about `Redux`|Doesn't know about `Redux`|
|Often Stateful|Typically functional components- without states|

## When to replace Presentational Components with Container Components

> when you notice that some components dont use props they receive but merely forward them down. It's a good time to introduce Container components
- Dan Abramov


# Package Json for the project
[top](#)

The following is the `package.json` for the project: 

```js
{
  "name": "react-basics",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "axios": "^0.16.1",
    "bootstrap": "^3.3.7",
    "classnames": "^2.2.5",
    "jquery": "^3.2.1",
    "react": "^15.5.4",
    "react-dom": "^15.5.4",
    "react-icons": "^2.2.3"
  },
  "devDependencies": {
    "react-scripts": "0.9.5"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}

```

# Using Default Props in React
[top](#)

We can assign default property values to React Components. However, `this is achieved in different ways` to different components.

## Using React.createClass component

In this type of component, we can assign the defaultValues using a simple `static` method.

>NOTE: If we use this in any other component style, React will throw an error.
- `warning.js:36 Warning: getDefaultProps is only used on classic React.createClass definitions. Use a static property named 'defaultProps' instead.`

```js
//Giving defaullt values to Components
    static getDefaultProps = () =>{
        return{
            total:50,
            powder:50,
            backCountry:15,
            goal:100
        };
    };//end:getDefaultProps
```

## Using React Ecmascript extends Class Component style

In this we need to create an `instance of the class` component, then assign a value:

```js
ACounter.defaultProps = {    
            total:50,
            powder:50,
            backCountry:15,
            goal:100
    
};//end:defaultProps
```

## Using Function components style

In this case, we can bank on the Ecmascript 6 standard of assigning default values to functions.

```js
const ACRow = ({date='01/01/2017',resort=10,powder=10,backcountry=10}) =>{
        let currDate = new Date(date);
    return(
    <tr>
        <td>{currDate.getDate() + `/` + currDate.getMonth() + `/` + currDate.getFullYear()}</td>
        <td>{resort}</td>
        <td>{(powder)?<Snowflake/>:null}</td>
        <td>{(backcountry)?<Terrain/>:null}</td>
    </tr>
    );
};//end:ACRow
```

# Using Proptypes A feature similar to TypeScript

Another enhancement is, Proptypes: Proptypes allow us to supply a `Property Type` to all our properties, so that it will validate to make sure we are supplying the right type of values.

[React Proptypes Documentation link](#https://facebook.github.io/react/docs/typechecking-with-proptypes.html)

## Using in Class Components

In `React.createClass({....})` style, we can assign the Property definitions as follows:

>NOTE: As of React version 15.5 and above, proptypes are a separate package of their own:
- npm install --save prop-types

```js
import Proptypes from 'prop-types';
...
.
...
.
.
.
export const ACounter = createClass({
    propTypes:{
        total:PropTypes.number.isRequired,
        powder:PropTypes.number,
        backCountry:PropTypes.number,
        goal:PropTypes.number
    },
    getDefaultProps(){
        ...
    }
})
```

## Using in ES6 style extends Class component

```js
import Proptypes from 'prop-types';
...
.
.
.
.
.
.
.
.
//Type definition - React's style
ACounter.propTypes = {
    total:PropTypes.number.isRequired,
    powder:PropTypes.number,
    backCountry:PropTypes.number,
    goal:PropTypes.number
};
```

# Using React Router

>NOTE: As of `react-router@4.1.1 and above`, the `hashHistory` component has been moved to it's own package.

>`npm install --save react-router-dom`
>import ReactRouter,{hashHistory} from 'react-router-dom';


>NOTE: Use the `react-router@3.0.0` which has the `hashHistory` part of the module.


```js
{
  "name": "react-basics",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "axios": "^0.16.1",
    "bootstrap": "^3.3.7",
    "classnames": "^2.2.5",
    "jquery": "^3.2.1",
    "prop-types": "^15.5.8",
    "react": "^15.5.4",
    "react-dom": "^15.5.4",
    "react-icons": "^2.2.3",
    "react-router": "^3.0.0"
  },
  "devDependencies": {
    "react-scripts": "0.9.5"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

## Configuring the React Router

Configuring the React Router, is very simple

```js
//React Libraries
import React from 'react';
//react-router@4.1.1 has some major changes, so using the react-router@3.0.0
import {Router, Route, hashHistory} from 'react-router'; 
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
//Custom Components
import App from './App';
import ACounter from './ACounter';
import ACList from './ACList';
import ACRow from './ACRow';
import Whoops404 from './Whoops404';
//Styles
import './styles/index.css';

//Router has a ppty called history to which we assign hashHistory, to keep track for URL's address history
const MainApp = (props)=>{
    return(
        <div>
            <Router history={hashHistory}>
                <Route path="/" component={App}/>            
                <Route path="/form" component={App}/>            
                <Route path="/count" component={ACounter}/>            
                <Route path="/list" component={ACList}/>
                <Route path="*" component={Whoops404}/>
            </Router>
        </div>
    );//end:return
};//end:MainApp

ReactDOM.render(<MainApp />,document.getElementById('root')); //ReactDOM
```

## Using the same component and using props.location.pathname to change states

You can even call the same component, over and over again, and inside that Component, you can configure nested components by making use of the `props.location.pathname` property.

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddDayForm from './AddDayForm';

class App extends Component {
  state={
    title:'',
    message:''
  };

  getJson=()=>{
    // Axios.get(`https://api.github.com/users/${this.state.userName}`)
    Axios.get(`json/simple.json`)
    .then(response => {
    	//console.log('Returned response is: ', response);      
      this.setState({title:response.data.title});
      this.setState({message:response.data.message});
    });
  };//end:getJson
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {this.state.title}</h2>
        </div>
        {(this.props.location.pathname === '/')?
        <div><button className="btn btn-primary simple-button" onClick={this.getJson}>click Me !</button><p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p></div>
        :(this.props.location.pathname === '/form')?<AddDayForm/>:null
        }        
      </div>
    );//end:return
  }//end:render
}//end-class:App

export default App;
```

## Using the Link component inbuilt of react-router

`React Router` *(Atleast `react-router@3.0.0`)* ships with the inbuild `Link` component:

```js
import React, {Component} from 'react';
import {Link} from 'react-router';
import HomeIcon from 'react-icons/lib/fa/home';
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o';
import ListDayIcon from 'react-icons/lib/fa/table';

const Menu = (props) =>{
    return(
        <nav className="navbar">
            <Link to="/" activeClassName="selected">
                <HomeIcon/> Home /
            </Link>
            <Link to="/form" activeClassName="selected">
                <AddDayIcon/> Add /
            </Link>
            <Link to="/list" activeClassName="selected">
                <ListDayIcon/> List /
            </Link>
        </nav>
    );
};//end:Menu

export default Menu;
```

# React Forms

## Assigning Default Values to Form elements

This can be achieved by the following:

1. Assigning Property validation using PropTypes

```js
AddDayForm.propTypes = {
    resort: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    powder:PropTypes.bool.isRequired,
    backcountry:PropTypes.bool.isRequired
}//end:propTypes
```

2. Assign defaultValues to Components

```js
AddDayForm.defaultProps = {
    resort: 3,
    date: '02/01/2017',
    powder:false,
    backcountry:false
}//end:defaultProps
```

3. Use the keywords `defaultValues` or `defaultChecked` for different form input elements

```js
//AddDayForm - function component
import React,{Component} from 'react';
import PropTypes from 'prop-types';

/*const AddDayForm = (props) =>{
    return(
        <div className="container">
            <h1>This is a simple Form</h1>
            <form className="form form-group">                
                <input type="text" name="userName" id="userName" placeholder="Enter your name"/>
            </form>
        </div>
    )
};//end:AddDayForm*/

class AddDayForm extends Component{
    render(){
        const {resort,date,powder,backcountry} = this.props;
        return(
        <div className="container">
            <h1>This is a simple Form</h1>
            <form className="form form-group">                
                <p>
                    <label htmlFor="userName">Enter Name</label>
                    <input type="text" name="userName" id="userName" placeholder="Enter your name" required defaultValue = {resort}/>
                </p>
                <p>
                    <label htmlFor="userDate">Enter Date</label>
                    <input type="text" name="userDate" id="userDate" placeholder="Enter date" required defaultValue = {date}/>
                </p>
                <p><input type="checkbox" name="powder" id="powder" defaultChecked={powder}/> Powder</p>
                <p><input type="checkbox" name="backcountry" id="backcountry" defaultChecked={backcountry}/>Backcountry</p>
            </form>
        </div>
    )
    };//end:render
}//end:class-AddDayForm

//Adding Type check and required ppty to Component's proptypes

AddDayForm.propTypes = {
    resort: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    powder:PropTypes.bool.isRequired,
    backcountry:PropTypes.bool.isRequired
}//end:propTypes

AddDayForm.defaultProps = {
    resort: 3,
    date: '02/01/2017',
    powder:false,
    backcountry:false
}//end:defaultProps

export default AddDayForm;
```

# Using Refs with Forms

Refs can be used with both Class Components and Function Components for `one way data binding`

## Using Refs with Class Components

```js
//AddDayForm - function component
import React,{Component} from 'react';
import PropTypes from 'prop-types';

class AddDayForm extends Component{

    //Whenever we invoke a function using this.submit or this.customMethod, we need to expose it/bind it
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }//end:constructor
    submit = (e)=>{
        e.preventDefault();
        console.log('Resort value is:', this.refs.resort.value);
        console.log('Entered Date is:', this.refs.date.value);
        console.log('is Powder checked?', this.refs.powder.checked);
        console.log('is Backcountry checked?', this.refs.backcountry.checked);
    };//end:submit

    render(){
        const {resort,date,powder,backcountry} = this.props;
        return(
        <div className="container">
            <h1>This is a simple Form</h1>
            <form className="form form-group" onSubmit={this.submit}>                
                <p>
                    <label htmlFor="userName">Enter Name</label>
                    <input ref="resort" type="text" name="userName" id="userName" placeholder="Enter your name" required defaultValue = {resort}/>
                </p>
                <p>
                    <label htmlFor="userDate">Enter Date</label>
                    <input ref="date" type="text" name="userDate" id="userDate" placeholder="Enter date" required defaultValue = {date}/>
                </p>
                <p><input ref="powder" type="checkbox" name="powder" id="powder" defaultChecked={powder}/> Powder</p>
                <p><input ref="backcountry" type="checkbox" name="backcountry" id="backcountry" defaultChecked={backcountry}/>Backcountry</p>
                <p>
                    <button className="btn btn-info" type="submit">Submit</button>
                </p>
            </form>
        </div>
    )
    };//end:render
}//end:class-AddDayForm

//Adding Type check and required ppty to Component's proptypes

AddDayForm.propTypes = {
    resort: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    powder:PropTypes.bool.isRequired,
    backcountry:PropTypes.bool.isRequired
}//end:propTypes

AddDayForm.defaultProps = {
    resort: 3,
    date: '02/01/2017',
    powder:false,
    backcountry:false
}//end:defaultProps

export default AddDayForm;
```

## Using Refs with Functional Components vs Class Components

There are two pirmary differences when using refs with `Class Components` & using refs with `Functional Components`:

|Class Components|Functional Component|  
|:--------------------------|------------------------------------:|
|ref takes a string value|ref takes in a Javascript expression|
|`ref="referenceValue"`|`ref ={input=>_referenceValue=input}`|
|`this.refs.referenceValue.value`|`let _referenceValue;``_referenceValue.value`|


# Understanding the Component Lifecycle

Each component has several `"lifecycle methods"` that you can override to run code at particular times in the process. Methods prefixed with will are called right before something happens, and methods prefixed with did are called right after something happens.

## Mounting
These methods are called when an instance of a component is being created and inserted into the DOM:

- constructor()
- componentWillMount()
- render()
- componentDidMount()

# Updating
An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

- componentWillReceiveProps()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- componentDidUpdate()

## Unmounting
This method is called when a component is being removed from the DOM:

- componentWillUnmount()

## Other APIs
Each component also provides some other APIs:

- setState()
- forceUpdate()

## Class Properties
- defaultProps
- displayName

## Instance Properties
- props
- state


# Introduction to radium

Radium is a third party library developed by `Formidabble Labs` which is nothing but `inlineStyles++`

`radium = inlineStyles + mediaQueries + pseudoSelectors + keyframes`

Radium provides a React component that wraps all your Radium styles components. This component even takes care of interesting things like tracking hover states..etc.,

```js
{
  "name": "react-basics",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "axios": "^0.16.1",
    "bootstrap": "^3.3.7",
    "classnames": "^2.2.5",
    "jquery": "^3.2.1",
    "prop-types": "^15.5.8",
    "radium": "^0.18.2",
    "react": "^15.5.4",
    "react-dom": "^15.5.4",
    "react-icons": "^2.2.3",
    "react-router": "^3.0.0"
  },
  "devDependencies": {
    "react-scripts": "0.9.5"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

##Using Radium as a Style Property

Radium is an inlinestyling library which supports React components. We can use Radium in two different places

1. Using for existing Components, with the `<Style rules= {styleVariable}/>`
2. Wrapping an existing Component with Radium and exporting it - `export default Radium(Frame)` 

##Pros of using Radium

- `Global Namespace` -  Global styles are not the defaults.
- `Dependencies` - It checks out on the dependencies section.
- `Dead Code Elimination` - Is possible with Radium.
- `Minification` - Since it is pure Javascript, it can be easily minified.
- `Sharing Constants` - you can use `import` keyword to import another style within your style object.
- `Non-deterministic Resolution` - You can define using media-queries.
- `Media Queries support` - It can support Media Queries.
- `Pseudo Selectors` - It can support pseudo selectors.
- `Keyframe Animations` - It can even support Keyframe Animations

# Introduction to Webpack Asset building
[top](#)

The details, of how the webpack would work, are stored in a configuration JS file called - `webpack.config.js`

- `webpack.config.dev.js` - The `.dev` suffix denotes this project only has configuration that allows to run the project locally, not production
- `webpack.config.js` - This will support production ready modules.

>webpack.config.js
```js
var path = require('path');
var webpack = require('webpack');

module.exports = {
    //These are the places, where the execution of your program begins, from these starting point, modules are imported defining dependencies
    entry:['./filenames.js'], // the entry attribute will contain one or more entry points to your app
    output:{  // When bundles are produced, they are put into place specified by this attribute
        path:path.join(__dirname,'/dist'), //using the PATH library and the nodeJS __dirname
        filename:'my-bundle.js', //name of the specific file, or we can use wildcards like - *.js
        publicPath:'/app-path/' //this attr indicates, the path that should be used within your code when referencing the bundle
    },
    //This is the real magic of the webpack module loaders
    module:{
        loaders:[{ //
            test:/\.js$/, //this is a regex expression saying target all files ending with .js files extension
            loaders:['babel'], //A babel compiles for ES6 to native ES5. NOTE: this is using the babel-loader plugin
            include:path.join(__dirname,'src')
        },{
          test:/\.jpg/, // This is regex expression saying target all files ending with .jpg files extension
          loader:'file'  //NOTE: this is using the file-loader plugin
        }]
    }//end:module
}//end:webpack-config

```

# React Redux Versions
[top](#)

The following are some of the versions and are available on github

- [Pluralsight Redux Github link](https://github.com/coryhouse/pluralsight-redux-starter)

- react:`^15.0.2`,
- redux:`3.5.2`,
- reactRouter:`2.4.0`,
- webpack:`1.13`,
- babel:`^6.x`,

# Hot Reloading
[top](#)

We will be using the following `package.json`

NPM versus Gulp [Link](https://bit.ly/npmvsgulp)

- babel-preset-react-hmre

```js
{
  "name": "pluralsight-redux-starter",
  "version": "1.0.0",
  "description": "Starter kit for React and Redux Pluralsight course by Cory House",
  "scripts": {
    "prestart": "babel-node tools/startMessage.js",
    "start": "npm-run-all --parallel test:watch open:src lint:watch",
    "open:src": "babel-node tools/srcServer.js",
    "lint": "node_modules/.bin/esw webpack.config.* src tools",
    "lint:watch": "npm run lint -- --watch",
    "test": "mocha --reporter progress tools/testSetup.js \"src/**/*.test.js\"",
    "test:watch": "npm run test -- --watch"
  },
  "author": "Cory House",
  "license": "MIT",
  "dependencies": {
    "babel-polyfill": "6.8.0",
    "bootstrap": "3.3.6",
    "jquery": "2.2.3",
    "react": "15.0.2",
    "react-dom": "15.0.2",
    "react-redux": "4.4.5",
    "react-router": "2.4.0",
    "react-router-redux": "4.0.4",
    "redux": "3.5.2",
    "redux-thunk": "2.0.1",
    "toastr": "2.1.2"
  },
  "devDependencies": {
    "babel-cli": "6.8.0",
    "babel-core": "6.8.0",
    "babel-loader": "6.2.4",
    "babel-plugin-react-display-name": "2.0.0",
    "babel-preset-es2015": "6.6.0",
    "babel-preset-react": "6.5.0",
    "babel-preset-react-hmre": "1.1.1",
    "babel-register": "6.8.0",
    "cheerio": "0.22.0",
    "colors": "1.1.2",
    "compression": "1.6.1",
    "cross-env": "1.0.7",
    "css-loader": "0.23.1",
    "enzyme": "2.2.0",
    "eslint": "2.9.0",
    "eslint-plugin-import": "1.6.1",
    "eslint-plugin-react": "5.0.1",
    "eslint-watch": "2.1.11",
    "eventsource-polyfill": "0.9.6",
    "expect": "1.19.0",
    "express": "4.13.4",
    "extract-text-webpack-plugin": "1.0.1",
    "file-loader": "0.8.5",
    "jsdom": "8.5.0",
    "mocha": "2.4.5",
    "nock": "8.0.0",
    "npm-run-all": "1.8.0",
    "open": "0.0.5",
    "react-addons-test-utils": "15.0.2",
    "redux-immutable-state-invariant": "1.2.3",
    "redux-mock-store": "1.0.2",
    "rimraf": "2.5.2",
    "style-loader": "0.13.1",
    "url-loader": "0.5.7",
    "webpack": "1.13.0",
    "webpack-dev-middleware": "1.6.1",
    "webpack-hot-middleware": "2.10.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/coryhouse/pluralsight-redux-starter"
  }
}
```

# Configuring webpack for React,Babel
[top](#)

The following is the code snippet for Webpack

```js
import webpack from 'webpack';
import path from 'path'; //from npm

//We will create an object literal
export default { 
  debug: true, // enables displaying of errors
  devtool: 'cheap-module-eval-source-map', //cheap-module-eval-source-map / inline-source-map - one of many option for devtool
  noInfo: false, //webpack will display a list of all the files that it is bundling,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index') //app's actual entry point, the ORDER is critical
  ],
  target: 'web', //This is a webpack for web application
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js' //This is strange, webpack will not generate physical files, but create bundles in memory
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src') // Tell webpack devServer where our source code is
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //Replace modules without full browser refresh
    new webpack.NoErrorsPlugin() //Keep errors from breaking, display errors on the browser
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      //Jargon for bootstrap to handle fonts 
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
```


# Babel Configuration
[top](#)

The following is the preset for Babel configuration for react ecmascript 2015 / ecmascript 6

```js
{
  "presets": ["react", "es2015"],
  "env": {
    "development": {
      "presets": ["react-hmre"] //This preset bundles up many of hot reloading, this is experimental plugin
    }
  }
}
```

# Package JSON file
[top](#)

This is the backup Package.json file

```js
{
  "name": "pluralsight-redux-starter",
  "version": "1.0.0",
  "description": "Starter kit for React and Redux Pluralsight course by Cory House",
  "scripts": {
    "prestart": "babel-node tools/startMessage.js",
    "start": "npm-run-all --parallel test:watch open:src lint:watch",
    "open:src": "babel-node tools/srcServer.js",
    "lint": "node_modules/.bin/esw webpack.config.* src tools",
    "lint:watch": "npm run lint -- --watch",
    "test": "mocha --reporter progress tools/testSetup.js \"src/**/*.test.js\"",
    "test:watch": "npm run test -- --watch"
  },
  "author": "Cory House",
  "license": "MIT",
  "dependencies": {
    "babel-polyfill": "6.8.0",
    "axios": "^0.16.1",
    "classnames": "^2.2.5",
    "radium": "^0.18.2",
    "prop-types": "^15.5.8",
    "bootstrap": "3.3.6",
    "jquery": "2.2.3",
    "react": "15.0.2",
    "react-dom": "15.0.2",
    "react-redux": "4.4.5",
    "react-router": "2.4.0",
    "react-router-redux": "4.0.4",
    "redux": "3.5.2",
    "redux-thunk": "2.0.1",
    "toastr": "2.1.2"
  },
  "devDependencies": {
    "babel-cli": "6.8.0",
    "babel-core": "6.8.0",
    "babel-loader": "6.2.4",
    "babel-plugin-react-display-name": "2.0.0",
    "babel-preset-es2015": "6.6.0",
    "babel-preset-react": "6.5.0",
    "babel-preset-react-hmre": "1.1.1",
    "babel-register": "6.8.0",
    "cheerio": "0.22.0",
    "colors": "1.1.2",
    "compression": "1.6.1",
    "cross-env": "1.0.7",
    "css-loader": "0.23.1",
    "enzyme": "2.2.0",
    "eslint": "2.9.0",
    "eslint-plugin-import": "1.6.1",
    "eslint-plugin-react": "5.0.1",
    "eslint-watch": "2.1.11",
    "eventsource-polyfill": "0.9.6",
    "expect": "1.19.0",
    "express": "4.13.4",
    "extract-text-webpack-plugin": "1.0.1",
    "file-loader": "0.8.5",
    "jsdom": "8.5.0",
    "mocha": "2.4.5",
    "nock": "8.0.0",
    "npm-run-all": "1.8.0",
    "open": "0.0.5",
    "react-addons-test-utils": "15.0.2",
    "redux-immutable-state-invariant": "1.2.3",
    "redux-mock-store": "1.0.2",
    "rimraf": "2.5.2",
    "style-loader": "0.13.1",
    "url-loader": "0.5.7",
    "webpack": "1.13.0",
    "webpack-dev-middleware": "1.6.1",
    "webpack-hot-middleware": "2.10.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/coryhouse/pluralsight-redux-starter"
  }
}
```

This is the actual package.json file

```js
{
  "name": "pluralsight-redux-starter",
  "version": "1.0.0",
  "description": "Starter kit for React and Redux Pluralsight course by Cory House",
  "scripts": {
    "prestart": "babel-node tools/startMessage.js", //This script runs before starting the start script
    "start": "babel-node tools/srcServer.js", //babel-node is required as it is written in Ecmascript 6
    "open:src": "babel-node tools/srcServer.js",
    "lint": "node_modules/.bin/esw webpack.config.* src tools",
    "lint:watch": "npm run lint -- --watch",
    "test": "mocha --reporter progress tools/testSetup.js \"src/**/*.test.js\"",
    "test:watch": "npm run test -- --watch"
  },
  "author": "Cory House",
  "license": "MIT",
  "dependencies": {
    "babel-polyfill": "6.8.0",
    "axios": "^0.16.1",
    "classnames": "^2.2.5",
    "radium": "^0.18.2",
    "prop-types": "^15.5.8",
    "bootstrap": "3.3.6",
    "jquery": "2.2.3",
    "react": "15.0.2",
    "react-dom": "15.0.2",
    "react-redux": "4.4.5",
    "react-router": "2.4.0",
    "react-router-redux": "4.0.4",
    "redux": "3.5.2",
    "redux-thunk": "2.0.1",
    "toastr": "2.1.2"
  },
  "devDependencies": {
    "babel-cli": "6.8.0",
    "babel-core": "6.8.0",
    "babel-loader": "6.2.4",
    "babel-plugin-react-display-name": "2.0.0",
    "babel-preset-es2015": "6.6.0",
    "babel-preset-react": "6.5.0",
    "babel-preset-react-hmre": "1.1.1",
    "babel-register": "6.8.0",
    "cheerio": "0.22.0",
    "colors": "1.1.2",
    "compression": "1.6.1",
    "cross-env": "1.0.7",
    "css-loader": "0.23.1",
    "enzyme": "2.2.0",
    "eslint": "2.9.0",
    "eslint-plugin-import": "1.6.1",
    "eslint-plugin-react": "5.0.1",
    "eslint-watch": "2.1.11",
    "eventsource-polyfill": "0.9.6",
    "expect": "1.19.0",
    "express": "4.13.4",
    "extract-text-webpack-plugin": "1.0.1",
    "file-loader": "0.8.5",
    "jsdom": "8.5.0",
    "mocha": "2.4.5",
    "nock": "8.0.0",
    "npm-run-all": "1.8.0",
    "open": "0.0.5",
    "react-addons-test-utils": "15.0.2",
    "redux-immutable-state-invariant": "1.2.3",
    "redux-mock-store": "1.0.2",
    "rimraf": "2.5.2",
    "style-loader": "0.13.1",
    "url-loader": "0.5.7",
    "webpack": "1.13.0",
    "webpack-dev-middleware": "1.6.1",
    "webpack-hot-middleware": "2.10.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/coryhouse/pluralsight-redux-starter"
  }
}
```

## Starting Parallel Scripts using Package.json
[top](#)

You can use the `npm-run-all` command to run parallel scripts

```js
"scripts": {
    "prestart": "babel-node tools/startMessage.js", //This script runs before starting the start script
    "start": "npm-run-all --parallel open:src lint:watch", //Running parallel scripts, using npm-run-all
    "open:src": "babel-node tools/srcServer.js", //babel-node is required as it is written in Ecmascript 6
    "lint": "node_modules/.bin/esw webpack.config.* src tools", //esw - eslint watch functionality, wraps eslint and provides file watching functionality
    "lint:watch": "npm run lint -- --watch",
    "test": "mocha --reporter progress tools/testSetup.js \"src/**/*.test.js\"",
    "test:watch": "npm run test -- --watch"
  },
```

# Introduction to Redux
[top](#)

## Why do I need Redux ?
The following features is where Redux really shines:

### Non Hierarchical Data
If I have two React Components which need to share data- Redux provides an elegant solution.
- Feature of Redux for communicating data between two disjoint Components is called - `STORE`
- Single Immutable Store (in other words, kindof Singleton / State cant be changed)
- The only way to trigger a state change in Redux, is by an Action
- State is changed by pure function - a.k.a Reducers 
    - Reducers are pure function, which accept an action, update the state.

### Complex data flows
If Borth React Components are manipulating the same data - Redux comes to great use.

### Many actions
Same data used in Multiple places.


|Flux|Redux|
|:--|--:|
|Data flows Down, Actions flows Up | Data flows Down, Actions flows Up |
|Unidirectional Flow|Unidirectional Flow |
|Support Actions | Support Actions |
|Multiple Stores | Single Store |
|Stores contain state and change logic | Store and change logic are separate |
|Flat and disconnected stores | Single stores with hierarchical reducers |
|Singleton dispatcher | No dispatcher |
|React components subscribe to stores | Container components utilize connect |
|State is mutable | State is immutable |

# Detailed Redux

## What are ACTIONS ?

Just like in flux, the events happening in an application are called - `ACTIONS` 

`ACTIONS` are just plain objects, containing the description of an event

```js
rateCourse(rating){
    return{type:RATE_COURSE, rating:inputValue}
}//end:rateCourse
```

>NOTE: The only things that you shouldn't try passing to an `action` are things that wont serialize, like - functions, promises


## What are STORES ?

In Redux, you create a store, by calling the `let store=createStore(reducer);` in your application's entry point.
- You pass the createStore function to a `reducer function`
- Reducer handle the state changes
- CreateStores only stores data

### Why Stores are immutable?

Having a single source of truth makes the application easier to manage and understand.

- store.dispatch(action)
- store.subscribe(listener)
- store.getState()
- replaceReducer(nextReducer) //This is for Hot replacing.

>NOTE: There is no API for changing data directly in a store.
>NOTE: The only way you can ever change a state, is by dispatching an `ACTION`

## What is immutability ?

`immutability` - TO CHANGE A STATE, RETURN A `NEW OBJECT`

>DID YOU KNOW ? the following datatypes in Javascript are already immutable
- String
- Number
- Boolean
- Undefined
- null

> The following are mutable in Javacript
- Array
- Objects
- Functions

# Ecmascript 6 Object Assign

```js
Object.assign({}, state, {role:admin}); //Create a copy to new object, source is an object called state, and only change one ppty-role
```

> NOTE: Object.assign() is a feature of Ecmascript 6, which Babel can't transpile. So we need to use `babel-polyfills`

# Handling Immutability in different versions of Javascript

|EcmaScript 6 | EcmaScript 5 | Third party Libraries |
|:------------|:------------:|----------------------:|
| Object.assign | Lodash merge | react-addons-update |
| Spread operator | Lodash extend | Immutable.js |
|                 | Object-assign |             |


> NOTE: To enforce immutability - We can use the following react library - `redux-immutable-state-invariant`
> NOTE: To enforce immutability - We can use the library - `Immutable.js`

# Reducer Detailed











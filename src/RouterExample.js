import React, { Component } from 'react';
import Home from './Home';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import {BrowserRouter as Router, Route, Link}from 'react-router-dom';

class RouterExample extends Component {
    render() {
        return (
            <div>
                <h2> Routing example </h2>
                <Router>
                    <Link to="">Home</Link><br />
                    <Link to="/class-component" >ClassComponent</Link><br/>
                    <Link to="/functional-component">Functional Component</Link> <br />
                    <Route exact path="/" component={Home} />
                    <Route 
                    path="/class-component" 
                    render={() => <ClassComponent text="This is class component" data={{name:"test", age:33}} />} />
                    <Route 
                    path="/functional-component" 
                    render={() => <FunctionalComponent text="This is functional component" data={{name:"test", age:33}}/>} />
                </Router>
            </div>
        );
    }
}

export default RouterExample;
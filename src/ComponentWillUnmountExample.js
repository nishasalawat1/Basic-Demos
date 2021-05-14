import React from 'react';

export default class ComponentWillUnmountExample extends React.Component{
    constructor(){
        super();
        console.warn("constructor")
    }
    componentWillUnmount(){
        console.warn("componentWillUnmount")
        alert("component unmounted from app.js")
    }
    render(){
        console.warn("render")
        return(
        <div>
            <ul>
                <li>Name:Nisha</li>
                <li>Age:24</li>
            </ul>
        </div>
        )
    }

}
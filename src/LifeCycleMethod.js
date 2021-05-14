import React from 'react';

export default class LifeCycle extends React.Component{
    constructor(){
        super();
        console.warn("constructor")
    }
    componentDidMount(){
        console.warn("componentDidMount")
    }
    render(){
        return(
        <div>
            {console.warn("render")}
        </div>
        )
    }

}
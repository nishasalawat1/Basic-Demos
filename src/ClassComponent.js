import React from 'react';

export default class ClassComponent extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
        console.log("Component did mount called for class component")
    }

    render(){
        return(
        <div>
            <h2>{this.props.text} and name {this.props.data.name} age {this.props.data.age}  </h2>
        </div>
        )
    }

}
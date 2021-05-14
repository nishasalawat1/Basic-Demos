import React from 'react';

export default class ComponentDidMountExample extends React.Component{
    constructor(){
        super();
        this.state = {
            data:null
        }
        console.warn("constructor")
    }
    componentDidMount(){
        this.setState({
            data:"state updated"
        })
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
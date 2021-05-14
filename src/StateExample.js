import React from 'react';

export default class StatusExample extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"Peter",
            email:"peter@gmail.com",
            count:0
        }
    }

    updateState() {
     this.setState({
         name:"Bruce",
         count:++this.state.count
     })
    }

    render(){
        console.warn("render called")
        return(
        <div>
            <h2>Hello {this.state.name} </h2>
            <h2>Email {this.state.email} </h2>
            <h2>Count {this.state.count} </h2>
            <button onClick={()=>{this.updateState()}}>Update</button>
        </div>
        )
    }

}
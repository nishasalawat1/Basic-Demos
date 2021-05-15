import React, { Component } from 'react';
import RefExampleChild from './RefExampleChild';

class RefExampleParent extends Component {
    constructor(){
        super();
        this.inputElement= React.createRef()
    }
    render() {
        return (
            <div>
                <h2>Parent Component of <b>Ref Forwording</b></h2>
                <RefExampleChild ref={this.inputElement} />
                <br /><br />
                <button onClick={()=>{this.inputElement.current.focus()}}>Set Focus in input</button>
                &nbsp; &nbsp;<button onClick={()=>{this.inputElement.current.style.color="red"}}>Set Text color in input</button>
            </div>
        );
    }
}

export default RefExampleParent;
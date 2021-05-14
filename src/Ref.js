import React, { Component } from 'react';

class RefExample extends Component {
    constructor(){
        super();
        this.state = {
            useRef:React.createRef()
        }
    }
    editinput(){
        console.warn(this.state.useRef);
        this.state.useRef.current.value = 1000;
    }
    render() {
        return (
            <div>
                <input ref={this.state.useRef} type="text" name="username" />
                <button onClick={()=>this.editinput()}>Click Me</button>
            </div>
        );
    }
}

export default RefExample;
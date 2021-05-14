import React, { Component, createRef } from 'react';

class UncontrolledComponent extends Component {
    constructor(){
        super();
        this.name = React.createRef();
        this.password = React.createRef();
    }
    submitHandel(event){
        event.preventDefault()
        console.warn("Form submit");
        console.warn(this.name.current.value);
        console.warn(this.password.current.type);
    }
    render() {
        return (
            <div>
                <form onSubmit={(event)=>this.submitHandel(event)}>
                    <input type="text" name='name' ref={this.name} /><br /><br />
                    <input type="password" name='password' ref={this.password} />
                    <button type="submit">submit</button>

                </form>
            </div>
        );
    }
}

export default UncontrolledComponent;
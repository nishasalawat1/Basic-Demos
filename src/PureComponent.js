import React, { PureComponent, Component } from 'react';

class PureComponentExample extends PureComponent {
    constructor(){
        super();
            this.state ={
                num:10
            }
    }
    render() {
        console.warn(this.state.num)
        return (
            <div>
                <h3>This is react PureComponent</h3>
                <button onClick={()=>this.setState({num:10})}>Check</button>
            </div>
        );
    }
}

export default PureComponentExample;
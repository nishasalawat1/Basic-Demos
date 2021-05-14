import React from 'react';
import ComponentWillUnmountExample from "./ComponentWillUnmountExample";

export default class CheckComponentUnmout extends React.Component{
    constructor(){
        super();
        this.state = {
            toggle:true
        }
    }
    render(){
        return(
        <div>
            {this.state.toggle?<ComponentWillUnmountExample />:null}
            <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Mount/Unmount</button>
        </div>
        )
    }

}
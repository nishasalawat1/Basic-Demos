import React from 'react';

export default class HideShow extends React.Component{
    constructor(){
        super();
        this.state = {
            toggle:true,            
        }
    }
    render(){
        return(
        <div>
            {
                this.state.toggle?<h2>Show Statement</h2>:null
            }
            <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Toggle</button>
        </div>
        )
    }

}
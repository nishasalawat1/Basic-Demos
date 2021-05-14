import React from 'react';

export default class ComponentDidUpdateExample extends React.Component{
    constructor(){
        super();
        this.state = {
            active:null,
            who:null
        }
        console.warn("constructor")
    }
    componentDidUpdate(){
        if(this.state.who == null){
            this.setState({
                who:"state updated"
            })
        }
        console.warn("componentDidUpdate")
    }
    render(){
        return(
        <div>
            {console.warn("render")}
            <button onClick={()=>{this.setState({active:2})}}>Activat</button>
        </div>
        )
    }

}
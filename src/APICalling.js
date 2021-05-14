import React, { Component } from 'react';

class APICalling extends Component {
    constructor(){
        super();
        this.state = {
            users:null
        }
    }
    componentDidMount(){
        fetch('http://localhost:8000/api/user/').then((response)=>{
            response.json().then((response)=>{
                this.setState({users:response.data})
            })
        })
    }

    render() {
        return (
            <div>
                {
                this.state.users?this.state.users.map((item,index)=>
                <h2>{index}--{item.first_name}--{item.email}</h2>):null
                }                
            </div>
        );
    }
}

export default APICalling;
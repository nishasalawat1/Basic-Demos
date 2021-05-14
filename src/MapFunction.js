import React from 'react';

export default class MapExample extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[
                {name:"Peter",email:"peter@gmail.com",phone:111},
                {name:"John",email:"Johnhbhb@gmail.com",phone:122},
                {name:"Riya",email:"RiyaZz@gmail.com",phone:133}
            ]
        }
    }
    render(){
        return(
        <div>            
            {this.state.list.map((item)=>
                <h2>xzv{item.name}  {item.email} {item.phone}</h2>
                )
            }
        </div>
        )
    }

}
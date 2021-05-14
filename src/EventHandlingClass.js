import React from 'react';

export default class EventBindClass extends React.Component{
    testFun(){
        alert("Function bind with class and clicked!")
    }
    render(){
        return(
        <div>
            <h2>Call funtion on click event</h2>
            <button onClick={this.testFun}> Call function </button>
        </div>
        )
    }

}
import React, { Component } from 'react';

class UserErrorExample extends Component {
    render() {
        if(true){
            throw new Error("Custome Error");
        }
        return (
            <div>
                <h1>User component</h1>
            </div>
        );
    }
}

export default UserErrorExample;
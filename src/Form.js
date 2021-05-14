import React from 'react';

export default class FormExample extends React.Component {
    constructor() {
        super();
        this.state = {
            username: null,
            password: null
        }
    }
    submit() {
        console.warn(this.state.username)
        console.warn(this.state.password)
    }
    render() {
        return (
            <div>
                <br></br>
            Username :
                <input type="text" name="username" onChange={(e) => { this.setState({ username: e.target.value }) }} />
                <br /><br />
            Password :
                <input type="password" name="password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                <br /><br />
                <button onClick={() => { this.submit() }}>Submit</button>
            </div>
        )
    }

}
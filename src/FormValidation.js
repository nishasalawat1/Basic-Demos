import React from 'react';

export default class FormValidationExample extends React.Component {
    constructor() {
        super();
        this.state = {
            username: null,
            password: null,
            nameError: null,
            passwordError: null
        }
    }
    valid() {
        if (!this.state.username.includes('@') && this.state.password.length < 5) {
            this.setState({
                nameError: "Invalid name",
                passwordError: "Password should be more then 5!"
            })
        }
        else if (!this.state.username.includes('@')) {
            this.setState({
                nameError: "Invalid username"
            })
        }
        else if (this.state.password.length < 5) {
            this.setState({
                passwordError: "Password should be more then 5!"
            })
        }
        else {
            return true
        }
    }
    submit() {
        this.setState({
            nameError:"",
            passwordError:""
        })
        if (this.valid()) {
            alert("Form Submitted SuccessFully!")
        }
    }
    render() {
        return (
            <div>
                <br></br>
            Username :
                <input type="text" name="username" onChange={(e) => { this.setState({ username: e.target.value }) }} />
                <p style={{color:'red', fontSize:'12px'}}>{this.state.nameError}</p>
                <br /><br />
            Password :
                <input type="password" name="password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                <p style={{color:'red', fontSize:'12px'}}>{this.state.passwordError}</p>
                <br /><br />
                <button onClick={() => { this.submit() }}>Submit</button>
            </div>
        )
    }
}
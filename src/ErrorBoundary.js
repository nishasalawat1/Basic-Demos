import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state ={
            error:null
        }
    }
    static getDerivedStateFromError(){
        return {error:true}
    }
    render() {
        return (
            <div>
                {this.state.error?<h2>This is custom error page</h2>:this.props.children}
            </div>
        );
    }
}

export default ErrorBoundary;
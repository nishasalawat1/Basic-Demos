import React from 'react'

export default function EventBindingFunction() {
    const testFun = () => {
        alert("Onclick Event Called In functional component")
    }
    return <button onClick={testFun}>Call function onclink event</button>
}
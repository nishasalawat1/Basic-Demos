import React from 'react'

export default function funcionalComponent(props) {
    const red = () => {
        alert("Onclick Event Called")
    }
    return <div onClick={red}>{props.text}  name is {props.data.name} age is {props.data.age}</div>
}
import React, {useEffect, useState} from 'react'


export default function useStateExample() {
    const [count,setCount] = useState(100)  
    useEffect(()=>{console.warn(count)},[count==5])
    return (<div>
        <h2>count: {count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>)
}
import React, {useState} from 'react'


export default function useEffectExample() {
    const [count,setCount] = useState(100)  
    return (<div>
        <h2>count: {count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>)
}
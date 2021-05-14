import {useEffect, useState} from 'react';
import useTitle from './useTitle'

function CustomHooks(props) {
    const [count,setCount] = useState(0);
    useTitle(count)
    return (
        <div>
            <h3>Custom Hooks</h3> 
            <button onClick={()=>setCount(count+1)}>Increase Count In page Title</button>          
        </div>
    );
}


export default CustomHooks;
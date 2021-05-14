import React, {useState} from 'react';
import MemoExample from './MemoExample';


function MemoParantComponent(props) {
    const [count,setCount] = useState(100)
    const [data,setData] = useState(0)
    return (
        <div>
            <h1>Count is {count}</h1>
            <h1>Data is {data}</h1>
            <MemoExample data={data} />
            <button onClick={()=>setCount(count+1)}>Count</button>
            <button onClick={()=>setData(data+1)}>Data</button>
        </div>
    );
}

export default MemoParantComponent;
import React,{memo} from 'react';

function MemoExample(props) {
    return (
        <div>
            {console.warn('Inner component called', props.data)}
            <h2>Child component ===   {props.data}</h2>
        </div>
    );
}

export default memo(MemoExample);
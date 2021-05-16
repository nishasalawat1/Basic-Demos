import React from 'react';
import {charAtom} from './RecoilAtom';
import {useRecoilState, useRecoilValue} from 'recoil';
import {charCountSelector} from './RecoilSelector';

function RecoilInputChild() {
    const [text,setText] = useRecoilState(charAtom);
    return (
        <div>
            <input type="text" onChange={(event)=>setText(event.target.value)} />
            <h3>{text}</h3>
            <h3>{useRecoilValue(charCountSelector)}</h3>
        </div>
    );
}

export default RecoilInputChild;
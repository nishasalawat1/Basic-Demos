import React from 'react';
import {charAtom} from './RecoilAtom';
import RecoilInputChild from './RecoilInputChild';
import {RecoilRoot} from 'recoil';

function RecoilExample() {
    return (
        <div>
            <RecoilRoot>
            <RecoilInputChild />
            </RecoilRoot>            
        </div>
    );
}

export default RecoilExample;




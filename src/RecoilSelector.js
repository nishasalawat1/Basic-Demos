import React from 'react';
import {selector} from 'recoil';
import {charAtom} from './RecoilAtom';

export const charCountSelector = selector({
    key:"charCountSelector",
    get:({get})=>{
        const atoMcharValue = get(charAtom);
        return atoMcharValue.length 
    }
})
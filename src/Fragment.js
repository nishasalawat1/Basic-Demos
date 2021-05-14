import React, { Fragment } from 'react';

export function FragmentExample() {
    return (
        <Fragment>
            <h2>User can use Fragment to remove extra div from component.</h2>
            <h2>We can use Fragment like Fragment tag or like empty tag as I have used in the code.</h2>
            <EmptyFragmentExample />
        </Fragment>
    );
}

function EmptyFragmentExample() {
    return <>This is Empty Fragement example.</>
}
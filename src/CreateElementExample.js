import React from 'react';

export function CreateElementExample() {
    return (
        <div>
            <MainExample name="Nisha" />
        </div>
    );
}

const MainExample = (props) => React.createElement(
    "h2",
    { className: 'Style' },
    `Hello ${props.name}`
)
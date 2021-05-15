import React from 'react';

const RefExampleChild =  React.forwardRef((props,ref) => {
    return (
        <div>
            <input ref={ref} type="text" />
        </div>
    );
}
)

export default RefExampleChild;
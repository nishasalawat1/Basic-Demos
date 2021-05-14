import React from 'react';
import './custom.css';

const StyleFunctional = (prop) => {
    const h2 = {
        color:"red",
        fontSize:"20px",
    }
    const h3 = {
        color:"blue",
        fontSize:"40px",
    }
    return (
        <div>
            <h2 style={h2}>Inline Style</h2>
            <h2 className="header">Global Style</h2>
            <h2 style={prop.data=="apply"?h2:h3}>Conditional Style</h2>           
        </div>
    );
};

export default StyleFunctional;
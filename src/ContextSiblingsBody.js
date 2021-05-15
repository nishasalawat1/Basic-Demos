import React from 'react';
import { CommonContext } from './CommonContext'

export function ContextSiblingBody() {
    return (
        <div>
            <CommonContext.Consumer >
                {
                    ({ color,updateColor }) => (
                        <>
                        <h3 className="Body" style={{backgroundColor:color}}>This is Body</h3>
                        <button className="context-color-buttons" onClick={()=>updateColor('green')}>Green Color</button>
                        <button className="context-color-buttons" onClick={()=>updateColor('yellow')}>Yellow Color</button>
                        <button className="context-color-buttons" onClick={()=>updateColor('pink')}>Pink Color</button>
                        </>
                    )
                }
            </CommonContext.Consumer>
        </div>
    );
}


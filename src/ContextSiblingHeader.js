import React from 'react';
import { CommonContext } from './CommonContext'

export function ContextSiblingHeader() {
    return (
        <div>
            <CommonContext.Consumer >
                {
                    ({ color }) => (
                        <h3 className="header" style={{backgroundColor:color}}>This is Header</h3>
                    )
                }
            </CommonContext.Consumer>
        </div>
    );
}


import React from 'react';
import { CommonContext } from './CommonContext'

export function ContextSiblingFooter() {
    return (
        <div>
            <CommonContext.Consumer >
                {
                    ({ color }) => (
                        <h3 className="footer" style={{backgroundColor:color}} >This is Footer</h3>
                    )
                }
            </CommonContext.Consumer>
        </div>
    );
}


import React, { Component } from 'react';
import { CommonContext } from './CommonContext';
import {ContextSiblingFooter} from './ContextSiblingFooter';
import { ContextSiblingHeader } from './ContextSiblingHeader';
import {ContextSiblingBody} from './ContextSiblingsBody';

export class ContextAPIExample extends Component {
    constructor() {
        super();
        this.updateColor = (color) => {
            this.setState({ color:color})
        }
        this.state = {
            color: "blue",
            updateColor: this.updateColor
        }
    }
    render() {
        return (
            <div>
                <CommonContext.Provider value={this.state}>
                    <ContextSiblingHeader />
                    <h2>This is Provider Context</h2>

                    <CommonContext.Consumer >
                        {
                            ({ color }) => (
                                <h3 className="footer" style={{ backgroundColor: color }} >This is Consumer inside Provider Context</h3>
                            )
                        }
                    </CommonContext.Consumer>
                    <ContextSiblingBody />
                    <ContextSiblingFooter />
                </CommonContext.Provider>
            </div>
        );
    }
}

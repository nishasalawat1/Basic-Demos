import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TypeChecking extends Component {
    render() {
        return (
            <div>
                <div>Name:{this.props.name}</div>
                <div>Age:{this.props.age}</div>
            </div>
        );
    }
}

TypeChecking.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
}

export default TypeChecking;


import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Button, InputGroup} from "@blueprintjs/core";

class HiddenTextInput extends Component {
    render() {
        const {
            value,
            className = "",
            toggleEditing,
            onChange
        } = this.props;
        return (
            <InputGroup className={className}
                        onChange={e => {onChange(e.target.value)}}
                        value={value}
                        rightElement={<Button icon={"cross"} onClick={toggleEditing} />} />
        );
    }
}

HiddenTextInput.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    toggleEditing: PropTypes.func,
    onChange: PropTypes.func
}

export default HiddenTextInput;
import React, {Component} from 'react';
import {Button, InputGroup} from "@blueprintjs/core";
import PropTypes from "prop-types";

class HiddenNumericInput extends Component {
    render() {
        const {
            value,
            className = "",
            onChange,
            toggleEditing
        } = this.props;
        return (
            <InputGroup className={className}
                        onChange={e => {
                            onChange(e.target.value)
                        }}
                        type={"number"}
                        value={value}
                        rightElement={<Button icon={"cross"} onClick={toggleEditing}/>}/>

        );
    }
}

HiddenNumericInput.propTypes = {
    value: PropTypes.number.isRequired,
    className: PropTypes.string,
    toggleEditing: PropTypes.func,
    onChange: PropTypes.func
}

export default HiddenNumericInput;
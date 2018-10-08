import React from 'react';
import PropTypes from 'prop-types';
import {Alignment, Button} from "@blueprintjs/core";

const HiddenInputButton = props => {
    const {
        value,
        className = "",
        toggleEditing
    } = props;
    return (
        <Button className={className} onClick={toggleEditing} alignText={Alignment.LEFT} minimal={true}>{value}</Button>
    );
};

HiddenInputButton.propTypes = {
    className: PropTypes.string,
    toggleEditing: PropTypes.func,
    value: PropTypes.any.isRequired

};

export default HiddenInputButton;
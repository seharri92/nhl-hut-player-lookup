import React, {Component} from 'react';
import PropTypes from "prop-types";
import {InputGroup, Popover} from "@blueprintjs/core";

class HiddenNotesInput extends Component {

    createNoteComponents = () => {
        const {value: notes, onChange} = this.props;
        let keyIndex = 0;
        return notes.map(note => {
            return (<li key={keyIndex++}><InputGroup
                onChange={(e) => {
                    const value = e.target.value;
                    const newNotes = notes.map(noteVal => {
                        if (note === noteVal) {
                            return value;
                        } else {
                            return noteVal;
                        }
                    });
                    onChange(newNotes);
                }} value={note}/></li>);
        });
    }

    render() {
        const {children, className, toggleEditing} = this.props;
        const notesList = this.createNoteComponents();
        const newChildren = React.Children.map(children, child => React.cloneElement(child, {toggleEditing: toggleEditing}), null);
        return (
            <React.Fragment>
                <Popover className={className} isOpen={true} onClose={toggleEditing} content={<ul>{notesList}</ul>}>
                    {newChildren}
                </Popover>
            </React.Fragment>
        )
    }
}

HiddenNotesInput.propTypes = {
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string,
    toggleEditing: PropTypes.func,
    onChange: PropTypes.func
}

export default HiddenNotesInput;
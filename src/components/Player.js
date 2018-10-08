import React from 'react';
import PropTypes from 'prop-types';
import {Card, Tooltip} from "@blueprintjs/core";

import "./Player.css"
import HiddenFormComponent from "./HiddenFormComponent";
import HiddenInputButton from "./HiddenInputButton";
import HiddenTextInput from "./HiddenTextInput";
import HiddenNumericInput from "./HiddenNumericInput";
import HiddenNotesInput from "./HiddenNotesInput";

const NotesDisplay = (props) => {
    const {notes, children, className, toggleEditing} = props;
    const notesList = notes.map(note => <li key={note}>{note}</li>);
    const alteredChildren = React.Children.map(children, (child) => React.cloneElement(child, {toggleEditing: toggleEditing}), null);
    return (
        <React.Fragment>
            <Tooltip className={className} content={<ul>{notesList}</ul>}>
                {alteredChildren}
            </Tooltip>
        </React.Fragment>
    )
};

const Player = props => {
    const {
        name, teamName, rating, notes = [""], onChange
    } = props;
    return (
        <Card>
            <div className="player-card">
                <HiddenFormComponent
                    displayComponent={<HiddenInputButton className="player-input" value={name}/>}
                    editComponent={<HiddenTextInput className="player-input"
                                                    onChange={value => onChange("name", value)}
                                                    name="name"
                                                    value={name}/>}/>
                <HiddenFormComponent
                    displayComponent={<HiddenInputButton className="player-input" value={teamName}/>}
                    editComponent={<HiddenTextInput className="player-input"
                                                    onChange={value => onChange("teamName", value)}
                                                    name="teamName"
                                                    value={teamName}/>}/>
                <HiddenFormComponent
                    displayComponent={<HiddenInputButton className="player-input" value={rating}/>}
                    editComponent={<HiddenNumericInput className="player-input"
                                                       onChange={value => onChange("rating", value)}
                                                       name="rating"
                                                       value={rating}/>}/>
                <HiddenFormComponent
                    displayComponent={
                        <NotesDisplay className="player-input" notes={notes}>
                            <HiddenInputButton value={notes[0]}/>
                        </NotesDisplay>
                    }
                    editComponent={
                        <HiddenNotesInput className="player-input"
                                          onChange={value => onChange("notes", value)}
                                          name="notes"
                                          value={notes}>

                            <HiddenInputButton value={"Close"}/>
                        </HiddenNotesInput>}/>
            </div>
        </Card>
    );
};

Player.propTypes = {
    name: PropTypes.string,
    teamName: PropTypes.string,
    rating: PropTypes.number,
    notes: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func
};

export default Player;
import React, {Component} from 'react';
import {Navbar, Alignment, Button} from "@blueprintjs/core";

class PlayerNavBar extends Component {
    render() {
        return (
            <Navbar className={`bp3-dark`}>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>NHL 19 HUT Player lookup</Navbar.Heading>
                    <Navbar.Divider />
                    <Button icon="home" text="Home" minimal={true}/>
                </Navbar.Group>
            </Navbar>
        );
    }
}

export default PlayerNavBar;
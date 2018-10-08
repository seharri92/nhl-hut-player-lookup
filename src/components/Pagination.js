import React, {Component} from "react";
import PropTypes from "prop-types"

import "./Pagination.css"
import { Button } from "@blueprintjs/core";

const PageLink = (props) => {
    const {onClick, disabled = false, pageNumber} = props;
    return <Button minimal={true} 
    disabled={disabled} onClick={onClick} >{pageNumber}</Button>
}

const NAVIGATION = {};
NAVIGATION.FWD = "forward";
NAVIGATION.BKWD = "backward";

const NavigationLink = (props) => {
    const {onClick,disabled = false, navDirection} = props;
    return (
        <Button
         minimal={true}
         disabled={disabled}
         onClick={onClick} 
        icon={navDirection === NAVIGATION.BKWD ? "arrow-left" : "arrow-right"} />
    )
}

export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1
        }
    }

    createPages = () => {
        return [
            <NavigationLink navDirection={NAVIGATION.BKWD} disabled={this.state.currentPage === 0}/>,
            (<PageLink pageNumber={1}/>),
            (<PageLink pageNumber={2}/>),
            (<PageLink pageNumber={3}/>),
            (<PageLink pageNumber={4}/>),
            (<PageLink pageNumber={5}/>),
            (<PageLink pageNumber={6}/>),
            <NavigationLink navDirection={NAVIGATION.FWD} disabled={false}/>
        ]
    }

    render() {
        let {items, itemsPerPage} = this.props;
        const {currentPage} = this.state;
        let children = [];
        for(let i = 0; i< 5 && i < items.length-1; i++) {
            children.push(items[i]);
        }
        let pages = this.createPages();
        return (
            <React.Fragment>
                {children}
                <div className="pagination-pages">
                    {pages}
                </div>
            </React.Fragment>
        )
    }
}


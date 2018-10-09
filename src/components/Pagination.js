import React, {Component} from "react";
import PropTypes from "prop-types";

import "./Pagination.css"
import {Button} from "@blueprintjs/core";

const PageLink = (props) => {
    const {onClick, disabled = false, pageNumber} = props;
    return (
        <Button minimal={true}
                disabled={disabled}
                onClick={() => onClick(pageNumber)}>
            {pageNumber}
        </Button>)
}

const NAVIGATION = {};
NAVIGATION.FWD = "forward";
NAVIGATION.BWD = "backward";

const NavigationLink = (props) => {
    const {onClick, disabled = false, navDirection} = props;
    return (
        <Button
            minimal={true}
            disabled={disabled}
            onClick={() => onClick(navDirection)}
            icon={navDirection === NAVIGATION.BWD ? "arrow-left" : "arrow-right"}/>
    )
};

const Page = (props) => {
    let {items, itemsPerPage = 100, currentPage} = props;
    let children = [];
    const pageOffset = (currentPage - 1) * itemsPerPage;
    for (let i = 0; i < itemsPerPage && ((pageOffset + i) < (items.length - 1)); i++) {
        children.push(items[pageOffset + i]);
    }
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1
        }
        this.maxPages = 1;
    }

    _createPages = () => {
        const {currentPage} = this.state;
        const links = [];
        links.push(<NavigationLink key={`page-nav-${NAVIGATION.BWD}`}
                                   navDirection={NAVIGATION.BWD}
                                   onClick={this.navigationLinkOnClick}
                                   disabled={currentPage === 1}/>);

        for (let i = 1; i < this.maxPages + 1; i++) {
            links.push(<PageLink key={`page-link-${i}`} pageNumber={i} disabled={currentPage === i}
                                 onClick={this.pageLinkOnClick}/>);
        }
        links.push(<NavigationLink key={`page-nav-${NAVIGATION.FWD}`}
                                   navDirection={NAVIGATION.FWD}
                                   onClick={this.navigationLinkOnClick}
                                   disabled={currentPage === this.maxPages}/>);

        return links;
    };

    navigationLinkOnClick = (navDirection) => {
        if (navDirection === NAVIGATION.FWD) {
            this.pageLinkOnClick(this.state.currentPage + 1);
        } else if (navDirection === NAVIGATION.BWD) {
            this.pageLinkOnClick(this.state.currentPage - 1);
        }
    };

    pageLinkOnClick = (pageNumber) => {
        if (!(pageNumber < 1 || pageNumber > this.maxPages)) {
            this.setState({"currentPage": pageNumber});
        }
    };

    render() {
        let {items, itemsPerPage = 100} = this.props;
        const {currentPage} = this.state;
        this.maxPages = Math.ceil(items.length / itemsPerPage);
        let pages = this._createPages();
        return (
            <React.Fragment>
                <Page items={items} itemsPerPage={itemsPerPage} currentPage={currentPage}/>
                <div className="pagination-pages">
                    {pages}
                </div>
            </React.Fragment>
        )
    }
}

Pagination.propTypes = {
    items: PropTypes.arrayOf(PropTypes.element).isRequired,
    itemsPerPage: PropTypes.number
};
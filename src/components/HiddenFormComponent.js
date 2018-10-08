import React, {Component} from 'react';
import PropTypes from 'prop-types';

const DisplayWrapper = props => {
    const children = React.Children.map(props.children, child =>
        React.cloneElement(child, {toggleEditing: props.toggleEditing}));
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )

};
const EditWrapper = props => {
    const children = React.Children.map(props.children, child =>
        React.cloneElement(child, {toggleEditing: props.toggleEditing}));
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

class HiddenFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }

    toggleEditing = () => {
        this.setState(({isEditing}) => ({"isEditing": !isEditing}))

    }

    render() {
        const {isEditing} = this.state;
        const {displayComponent, editComponent} = this.props;
        const component = isEditing
            ? <EditWrapper toggleEditing={this.toggleEditing}>{editComponent}</EditWrapper>
            : <DisplayWrapper toggleEditing={this.toggleEditing}>{displayComponent}</DisplayWrapper>
        return (
            <React.Fragment>
                {component}
            </React.Fragment>
        );
    }
}

HiddenFormComponent.propTypes = {
    displayComponent: PropTypes.any.isRequired,
    editComponent: PropTypes.any.isRequired
};

export default HiddenFormComponent;
import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Row, Col
} from 'reactstrap';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Row>
                <Col sm="12" md="12" lg="12">
                <Navbar color="dark" dark expand="lg">
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar className="mr-auto">
                            <NavItem>
                                {this.props.links.map((link) =>
                                    <NavLink key={link.name.toString()} className="nav-link" to={link.path} >{link.name}</NavLink>
                                )}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                </Col>
            </Row>
        );
    }
}

Navigation.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    })).isRequired,
}

export default Navigation;

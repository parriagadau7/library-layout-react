import React from 'react';
import {Container} from "reactstrap";
import {BrowserRouter as Router} from "react-router-dom";
import Navigation from "./header/Navigation";
import Root from "./Root";
import Footer from "./footer/Footer";
import './layout.scss'
import PropTypes from 'prop-types';

function Layout(props) {
    return (
        <Router>
            <Container fluid>
                <header>
                    <Navigation links={props.links}/>
                </header>
                <Root routes={props.routes}/>
                <Footer/>
            </Container>
        </Router>
    );
}

Layout.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    })).isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
        exact: PropTypes.bool,
        name: PropTypes.elementType.isRequired,
        path: PropTypes.string.isRequired,
    })).isRequired,
}

export default Layout;
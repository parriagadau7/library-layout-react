import React from 'react';
import {Col, Row} from "reactstrap";

const Footer = () => {
    return (
        <footer className="page-footer font-small blue">
            <Row>
                <Col sm="12" md="12" lg="12">
                    <p className="footer-copyright text-center py-3">&copy; 2020 Copyright. <a href="/"> Rick and Morty</a></p>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;

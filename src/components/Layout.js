import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'


import { Outlet } from 'react-router-dom';

class Layout extends React.Component {

    render() {
        return (
            <div className="layout">
                <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                <LinkContainer to="/">
                    <Navbar.Brand><img src="/favicon.ico" alt="logo" style={{width:14, margin: 4}} /> Habla Conmigo</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/gameplay">
                                <Nav.Link>GamePlay</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            
            <Outlet/>
            </div>
        );
    }
}
export default Layout;
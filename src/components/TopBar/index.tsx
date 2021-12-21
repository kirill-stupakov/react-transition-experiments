import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import ColorSchemeSquares from "./ColorSchemeSquares";
import "./TopBar.scss";

const TopBar = () => {
    return <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand>Weird Login Forms</Navbar.Brand>
            <ColorSchemeSquares />
        </Container>
    </Navbar>
}

export default TopBar;
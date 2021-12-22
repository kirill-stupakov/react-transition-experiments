import React from "react";
import { Container, Navbar } from "react-bootstrap";
import ColorSchemeSquares from "./ColorSchemeSquares";
import "./TopBar.scss";

const TopBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand>Weird Login Forms</Navbar.Brand>
        <ColorSchemeSquares />
      </Container>
    </Navbar>
  );
};

export default TopBar;

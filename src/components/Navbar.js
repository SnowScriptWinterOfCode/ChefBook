import React, { memo } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import mainLogo from "./icon.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar bg="black" variant="dark" expand="lg" className="p-3 sticky-top">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={mainLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Tasty-Tips
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="about">
                About us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact us
              </Nav.Link>
            </Nav>
            <Nav className="gap-2">
              <Nav.Link className="btn btn-black" href="/login">
                Login
              </Nav.Link>
              <Nav.Link eventKey={2} className="btn btn-black" href="#">
                Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default memo(App);

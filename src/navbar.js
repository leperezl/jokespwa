import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';



const navbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Sandbox</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Chuck</Nav.Link>
          <Nav.Link href="#features">Bono</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default navbar

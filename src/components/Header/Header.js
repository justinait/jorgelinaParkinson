import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/">Jorgelina Parkinson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/about">Bio</NavLink>
            <NavDropdown title="Obras" id="basic-nav-dropdown">
              <NavDropdown.Item to="/about">Paisajes</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.2">Mujeres SXX</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.3">Naturaleza muerta</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
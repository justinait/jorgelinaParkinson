import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <Navbar expand="lg" variant="dark" className='navbar'>
      <Container className='navbarContainer'>
        <NavLink className='title' to="/">Jorgelina Parkinson</NavLink>
        
        <Navbar.Toggle expand="lg" aria-controls="basic-navbar-nav" className='hamburgerMenu' variant="light"/>
        <Navbar.Collapse className='rightNavbarContainer'>
          <Nav className='rightNavbar'>
            <NavLink className='navbarItems' to="/">Inicio</NavLink>
            <NavLink className='navbarItems' to="/about">Bio</NavLink>
            <NavDropdown title="Obras" id="basic-nav-dropdown">
              <NavDropdown.Item href="/gallery">Puentes y puertos</NavDropdown.Item>
              <NavDropdown.Item href="/gallery">Riachuelo</NavDropdown.Item>
              <NavDropdown.Item href="/gallery">Mi tierra</NavDropdown.Item>
              <NavDropdown.Item href="/gallery">Rostros</NavDropdown.Item>
              <NavDropdown.Item href="/gallery">Mujeres en el Siglo XX</NavDropdown.Item>
              <NavDropdown.Item href="/gallery">Situaciones cotidianas</NavDropdown.Item>
              <NavDropdown.Item href="/gallery">Interiores</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
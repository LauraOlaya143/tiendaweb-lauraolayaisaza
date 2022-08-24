import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const HomeNavbar = ({ pages }) => {
    return (
        <Navbar bg="light" expand="lg" className="header">
        <Container>
        <Navbar.Brand><Link to="/" className="logo">MY FAIRYTALE</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {pages.map((page) => (
              <Nav.Link className="enlaces" key={page.name}><Link to={page.url} className="enlaces_text">{page.name}</Link></Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <button className="carrito_botones">
            <CartWidget />
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default HomeNavbar;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Navbar0() {
  return (
    <Navbar style={{ backgroundColor: "rgb(56, 75, 75)" }}>
      <Container>
        <Navbar.Brand href="/">
          <h2 className="navLink">Netflix</h2>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/favmovies" className="navLink">
            FavMovies
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

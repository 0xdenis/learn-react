import Container from "react-bootstrap/Container";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to="/">Expenses Manager</Link></Navbar.Brand>
          <Nav>
            <Nav.Link><Link to="/create">Create</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Header;

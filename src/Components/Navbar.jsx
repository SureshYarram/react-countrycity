import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav ,Container } from 'react-bootstrap';

export const NavbarIs = () => {

    return(
        <>

    <Navbar id='navbar' bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="./">HOME</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="./add-city">ADD CITY</Nav.Link>
      <Nav.Link href="./add-country">ADD COUNTRY</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
        </>
    )
}
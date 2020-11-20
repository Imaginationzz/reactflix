import React from 'react'
import { Navbar, Nav, FormControl, Form, Dropdown } from 'react-bootstrap'
import logo from '../icon.png';
import face from '../face.jpeg'

class NavBar extends React.Component {
  render() {
    return (
      <Navbar variant="dark">
        <Navbar.Brand href="/"><img className='logo' src={logo} alt='Logo' /></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Tv Shovs</Nav.Link>
          <Nav.Link href="#features">Movies</Nav.Link>
          <Nav.Link href="#pricing">My List</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Dropdown>
          <Dropdown.Toggle className='p-0 mr-3' variant="success" id="dropdown-basic">
            <img src={face} alt="face" id='face' />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    )
  }
}


export default NavBar
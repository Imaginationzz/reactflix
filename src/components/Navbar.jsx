<<<<<<< Updated upstream
import React from 'react'
import { Navbar, Nav, FormControl, Form, Dropdown, Button } from 'react-bootstrap'
import logo from '../icon.png';
=======
import React from "react";
import { Navbar, Nav, FormControl, Form, Dropdown } from "react-bootstrap";
import logo from "../icon.png";
import face from "../face.jpg";
>>>>>>> Stashed changes

import face from '../face.jpeg'

import Gallery from './Gallery';


class NavBar extends React.Component {
  state={
    search: null,
    searchedMovies : null,
  }

  FetchMovies = async () => {
    if(this.state.search === null){
        console.log("noSearch")
    } else{
        try {
     let response = await fetch(`http://www.omdbapi.com/?apikey=787f7ed8&s=${this.state.search}`)
        let movies = await response.json()
            this.setState({searchedMovies : movies})
            console.log(movies)
        } catch (e) {
            console.log("error happened, that's life", e)
        }
    }
}

  render() {
    return (
      <>
      <Navbar variant="dark">
<<<<<<< Updated upstream
        <Navbar.Brand href="/"><img className='logo' src={logo} alt='Logo' /></Navbar.Brand>
=======
        <Navbar.Brand href="/">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
>>>>>>> Stashed changes
        <Nav className="mr-auto">
          <Nav.Link href="/">Tv Shovs</Nav.Link>
          <Nav.Link href="#features">Movies</Nav.Link>
          <Nav.Link href="#pricing">My List</Nav.Link>
        </Nav>

<<<<<<< Updated upstream

        <Dropdown>
          <Dropdown.Toggle className='p-0 mr-3' variant="success" id="dropdown-basic">
            <img src={face} alt="face" id='face' />
=======
        <Dropdown>
          <Dropdown.Toggle
            className="p-0 mr-3"
            variant="success"
            id="dropdown-basic"
          >
            <img src={face} alt="face" id="face" />
>>>>>>> Stashed changes
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/Account">Account</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => {
                this.setState({search:e.target.value});
                }}/>
        </Form>
        <Button variant="primary" onClick={this.FetchMovies}>Search</Button>
      </Navbar>
<<<<<<< Updated upstream
      <Gallery searchedMovies ={this.state.searchedMovies}></Gallery>
      </>
    )
=======
    );
>>>>>>> Stashed changes
  }
}

export default NavBar;

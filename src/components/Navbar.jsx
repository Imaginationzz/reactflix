import React from 'react'
import { Navbar, Nav, FormControl, Form, Dropdown, Button } from 'react-bootstrap'
import logo from '../icon.png';
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
        <Navbar.Brand href="#home"><img className='logo' src={logo} alt='Logo' /></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">TV Shows</Nav.Link>
          <Nav.Link href="#features">Movies</Nav.Link>
          <Nav.Link href="#pricing">My List</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => {
                this.setState({search:e.target.value});
                }}/>
        </Form>
        <Button variant="primary" onClick={this.FetchMovies}>Search</Button>
      </Navbar>
      <Gallery searchedMovies ={this.state.searchedMovies}></Gallery>
      </>
    )
  }
}


export default NavBar
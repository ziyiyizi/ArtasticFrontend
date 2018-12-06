import React, { Component } from 'react';
import logo from './Artastic.png';
//import './BannerMod.css';
import {Navbar, Nav, NavDropdown, Button, Form, FormControl, ButtonToolbar, DropdownButton, Dropdown, SplitButton, Badge} from 'react-bootstrap'
//import './bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {MainButton} from 'react-mfb';

class BannerMod extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",

    };
    this.handleChange = this.handleChange.bind(this);


  }

  handleChange(e) {
    if (e.target.type === "search") {
      this.setState({
        searchValue: e.target.value
      });
    } else {
      // do nothing
    }
  }

  render() {
    return (

      <Navbar bg="light" variant="light" sticky="top">
<Navbar.Brand href="/community">
        <img
          alt="no img"
          src={logo}
          width="35"
          height="35"
          className="d-inline-block align-top"
        />
              </Navbar.Brand>

  <Navbar.Brand href="/community" >Artastic</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Button href="/community" variant="light">Community</Button>
      <Button href="/home" variant="light">Home</Button>
      <DropdownButton title="Dropdown" id="collasible-nav-dropdown" variant="light">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </DropdownButton>

    </Nav>

  </Navbar.Collapse>
  <Nav >
          <Form inline>
      <FormControl type="search" placeholder="Search" onChange={this.handleChange} size="sm"/>
      <SplitButton
        title="Search"
        variant="outline-success" href="/search" size="sm"
      >
        <Dropdown.Item eventKey="1">Search as title</Dropdown.Item>
        <Dropdown.Item eventKey="2">Search as member</Dropdown.Item>
        <Dropdown.Item eventKey="3">Search as reference</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Something more</Dropdown.Item>
      </SplitButton>

    </Form>
      <Button href={"/user/notifications"}variant="light">Notifications <Badge variant="secondary">New</Badge></Button>
      <Button href={"/user"} variant="light">
        My Profile
      </Button>

    </Nav>

</Navbar>
    );
  }
}

export default BannerMod;
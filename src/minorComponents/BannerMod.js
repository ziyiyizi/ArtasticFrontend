import React, { Component } from 'react';
import logo from '../pics/Artastic.png';
import {getSearch}from '../utils/request';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl, DropdownButton, Dropdown, SplitButton, Badge} from 'react-bootstrap'



class BannerMod extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch=this.handleSearch.bind(this);

  }

  handleSearch(){
    let packs=getSearch(this.state.searchValue);
    console.log(packs);
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
      <Button href="/lab" variant="light">Laboratory</Button>
      <DropdownButton title="About" id="collasible-nav-dropdown" variant="light">
        <NavDropdown.Item href="#action/3.1">See me in Github</NavDropdown.Item>
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
        variant="outline-success" href={'/search?filter=title&value='+this.state.searchValue} size="sm" 
        // onClick={this.handleSearch}
      >
        <Dropdown.Item href={'/search?filter=title&value='+this.state.searchValue}>Search as title</Dropdown.Item>
        <Dropdown.Item href={'/search?filter=member&value='+this.state.searchValue}>Search as member</Dropdown.Item>
        <Dropdown.Item href={'/search?filter=tweet&value='+this.state.searchValue}>Search as tweet</Dropdown.Item>
        <Dropdown.Item href={'/search?filter=tag&value='+this.state.searchValue}>Search as tag</Dropdown.Item>
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
import React, { Component } from 'react';
import logo from '../pics/Artastic.png';
import {getSearch}from '../utils/request';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl, DropdownButton, Dropdown, SplitButton, Badge} from 'react-bootstrap'
import CommunityPage from '../CommunityPage'
import ArtworkPage from '../ArtworkPage';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

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
<Router>
  <div>
      <Navbar bg="light" variant="light" sticky="top">
<Link to="/community"><Navbar.Brand>
        <img
          alt="no img"
          src={logo}
          width="35"
          height="35"
          className="d-inline-block align-top"
        />
              </Navbar.Brand></Link>

  <Link to="/community" ><Navbar.Brand>Artastic</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/community"><Button variant="light">Community</Button></Link>
      <Link to="/home"><Button variant="light">Home</Button></Link>
      <Link to="/lab"><Button variant="light">Laboratory</Button></Link>
      <DropdownButton title="About" id="collasible-nav-dropdown" variant="light">
        <NavDropdown.Item href="#action/3.1">See me in Github</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Separated link</NavDropdown.Item>
      </DropdownButton>

    </Nav>

  </Navbar.Collapse>
  <Nav >
          <Form inline>
      <FormControl type="search" placeholder="Search" onChange={this.handleChange} size="sm"/>
<SplitButton
        title="Search"
        variant="outline-success" href={'/search?filter=title&value='+this.state.searchValue} size="sm" >
        <Dropdown.Item to={'/search?filter=title&value='+this.state.searchValue}>Search as title</Dropdown.Item>
        <Dropdown.Item to={'/search?filter=member&value='+this.state.searchValue}>Search as member</Dropdown.Item>
        <Dropdown.Item to={'/search?filter=tweet&value='+this.state.searchValue}>Search as tweet</Dropdown.Item>
        <Dropdown.Item to={'/search?filter=tag&value='+this.state.searchValue}>Search as tag</Dropdown.Item>
      </SplitButton>

    </Form>
    <Link to={"/user/notifications"}><Button variant="light">Notifications <Badge variant="secondary">New</Badge></Button></Link>
    <Link to={"/user"}><Button variant="light">
        My Profile
      </Button></Link>
    </Nav>

</Navbar>
<Switch>
    <Route path="/community" component={()=>(<CommunityPage/>)}></Route>
    <Route path="/post" component={()=>(<ArtworkPage/>)}></Route>
    </Switch>
    </div>
</Router>
    );
  }
}

export default BannerMod;
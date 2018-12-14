import React, { Component } from 'react';
import logo from '../pics/Artastic.png';
import {getSearch}from '../utils/request';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl, DropdownButton, Dropdown, SplitButton, Badge} from 'react-bootstrap'
import NotificationButton from './NotificationButton'
import CommunityPage from '../CommunityPage'
import ArtworkPage from '../ArtworkPage';
import LabPage from '../LabPage';
import SearchButton from './SearchButton';
import HomePage from '../HomePage';
import UserPage from '../UserPage';
import CommunityIcon from '@material-ui/icons/LocationCity'

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';



class BannerMod extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      isOpen:false,
      hidenav:false,
      scrolltop:0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
    this.toggle=this.toggle.bind(this);

  }



  handleSearch(){
    getSearch(this.state.searchValue);
  }

  handleChange(e) {
    if (e.target.type === "search") {

      this.setState({
        searchValue:e.target.value,
      })
    } else {
      // do nothing
    }
  }
  toggle(){
    this.setState({isOpen:!this.state.isOpen})
  }
  render() {
    return (
<Router>
  <div>
  <div style={{
  'maxHeight':this.state.hidenav?'2px':'100px',
  'transitionProperty': 'all',
	'transitionDuration': '.5s',
  }}>
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
  {/* <Button onClick={()=>this.setState({hidenav:!this.state.hidenav})}>click this</Button> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link onClick={()=>window.history.replaceState(window.location.pathname)} to="/community"><Button variant="light">Community</Button></Link>
      <Link onClick={()=>window.history.replaceState(window.location.pathname)} to="/home"><Button variant="light">Home</Button></Link>
      <Link onClick={()=>window.history.replaceState(window.location.pathname)} to="/lab"><Button variant="light">Laboratory</Button></Link>
      <DropdownButton title="About" id="collasible-nav-dropdown" variant="light">
        <NavDropdown.Item href="https://github.com/ziyiyizi/Artastic/blob/master/README.md">See me in Github</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://github.com/Aquamarino/ArtasticFrontend">Frontend in Github</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/ziyiyizi/Artastic">Backend in Github</NavDropdown.Item>
      </DropdownButton>

    </Nav>

  </Navbar.Collapse>
  <Nav >

      <SearchButton/>

<NotificationButton/>
    {/* <Link to={"/user/notifications"}><Button variant="light" onMouseOver={this.handleNotify}>Notifications <Badge variant="secondary">New</Badge></Button></Link> */}
    <Link onClick={()=>window.history.replaceState(window.location.pathname)} to={"/user"}><Button variant="light">
        My Profile
      </Button></Link>
    </Nav>

</Navbar>
</div>
<Switch>
    <Route path="/community" component={()=>(<CommunityPage/>)}></Route>
    <Route path="/post" component={()=>(<ArtworkPage/>)}></Route>
    <Route path="/search" component={()=>(<ArtworkPage/>)}></Route>
    <Route path="/lab" component={()=>(<LabPage/>)}></Route>
    <Route path="/home" component={()=>(<HomePage/>)}></Route>
    <Route path="/user" component={()=>(<UserPage/>)}></Route>
    </Switch>
    </div>
</Router>
    );
  }
}

export default BannerMod;
import React, { Component } from 'react';
import logo from '../pics/Artastic.png';
import {getSearch}from '../utils/request';
import { Navbar, Nav, NavDropdown, Button, DropdownButton,} from 'react-bootstrap'
import NotificationButton from './NotificationButton'
import CommunityPage from '../CommunityPage'
import ArtworkPage from '../ArtworkPage';
import LabPage from '../LabPage';
import SearchButton from './SearchButton';
import HomePage from '../HomePage';
import UserPage from '../UserPage';

import MyAvatar from './AvatarIcon';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';




class BannerMod extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      isOpen:false,
      hidenav:false,
      scrolltop:0,
      logo: <img
      alt="no img"
      src={logo}
      width="35"
      height="35"
      className="d-inline-block align-top"
    />,
    MyAvatar:null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
    this.toggle=this.toggle.bind(this);

  }

componentDidMount(){
  this.setState({
    MyAvatar:<MyAvatar iconurl={sessionStorage.getItem('iconURL')}></MyAvatar>,
  })
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

  <div style={{backgroundColor:'#F0F5F5',  minHeight:window.innerHeight}}>
  <div style={{
  'maxHeight':this.state.hidenav?'2px':'100px',
  'transitionProperty': 'all',
	'transitionDuration': '.5s',
  }}>
      <Navbar bg="light" variant="light" style={{ position: 'sticky', top: '0px'}}>
<Link to="/community"><Navbar.Brand>
        {this.state.logo}
              </Navbar.Brand></Link>

  <Link to="/community" ><Navbar.Brand>Artastic</Navbar.Brand></Link>
  {/* <Button onClick={()=>this.setState({hidenav:!this.state.hidenav})}>click this</Button> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/community"><Button variant="light">Community</Button></Link>
      <Link to="/home"><Button variant="light">Home</Button></Link>
      <Link to="/lab"><Button variant="light">Laboratory</Button></Link>
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


    </Nav><Link to="/user">
      <Navbar.Brand>
        {this.state.MyAvatar}
              </Navbar.Brand>
              </Link>
</Navbar>
</div>
<Switch>
    <Route path="/community" component={()=>(<CommunityPage/>)}></Route>
    <Route path="/post" component={()=>(<ArtworkPage/>)}></Route>
    <Route path="/search" component={()=>(<ArtworkPage/>)}></Route>
    <Route path="/lab" component={()=>(<LabPage/>)}></Route>
    <Route path="/home" component={()=>(<HomePage/>)}></Route>
    <Route path="/user" component={()=>(<UserPage/>)}></Route>
    <Route path="/member" component={()=>(<LabPage/>)}></Route>
    </Switch>
    </div>
</Router>
    );
  }
}

export default BannerMod;
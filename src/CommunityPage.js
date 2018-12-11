import React, { Component } from 'react';
import {Row, Col, Container, ButtonToolbar, Button,Card} from'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Postlist from './minorComponents/Postlist'
import CommunityRightPanel from './minorComponents/CommunityRightPanel';
import BannerMod from'./minorComponents/BannerMod';
import CustomFabs from './minorComponents/CustomFabs'
import PublishPage from './PublishPage';
import NewIcon from '@material-ui/icons/FiberNew';
import HotIcon from '@material-ui/icons/Whatshot';
import RandomIcon from '@material-ui/icons/Public'
//import Background from './minorComponents/Background';


class CommunityPage extends Component{
render(){ return  ( 

<div>



 <Container>

  <Row className="justify-content-md-center">


    <Col>
    <div id="CommunityContentPanel" style={{ width: '42rem' }}>
    <br />
<Card>

<ButtonToolbar className="justify-content-md-center">
  <Link to="/community/popular"><CustomFabs  displayText={<HotIcon fontSize="large"/>}>Popular</CustomFabs></Link>
  <Link to="/community/latest"><CustomFabs displayText={<NewIcon fontSize="large"/>}>Latest</CustomFabs></Link>
  <Link to="/community/random"><CustomFabs displayText={<RandomIcon fontSize="large"/>}>Random</CustomFabs></Link>
</ButtonToolbar>

</Card>
    <Switch>
    <Route exact path="/community" render={() => (<Postlist contentType="popular"/>)}></Route>
    <Route exact path="/community/popular" component={() => (<Postlist contentType="popular"/>)}></Route>
    <Route exact path="/community/latest" component={() => (<Postlist contentType="latest"/>)}></Route>
    <Route exact path="/community/random" component={() => (<Postlist contentType="random"/>)}></Route>
    </Switch>
    </div>
    </Col>
    <Col style={{ width: '16rem' }} id="CommunityRightPanel">
      <CommunityRightPanel/>
    </Col>

  </Row>

</Container>
<PublishPage/>
</div>


)}};

export default CommunityPage;
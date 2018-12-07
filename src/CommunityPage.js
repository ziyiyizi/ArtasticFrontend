import React, { Component } from 'react';
import {Row, Col, Container, ButtonToolbar, Button,Card} from'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Postlist from './minorComponents/Postlist'
import CommunityRightPanel from './minorComponents/CommunityRightPanel';
import BannerMod from'./minorComponents/BannerMod';

import PublishPage from './PublishPage';
//import Background from './minorComponents/Background';


class CommunityPage extends Component{
render(){ return  ( 
<Router>
<div>

<BannerMod/>

 <Container>

  <Row className="justify-content-md-center">


    <Col>
    <div id="CommunityContentPanel" style={{ width: '42rem' }}>
    <br />
<Card>
  <Card.Body>
<ButtonToolbar className="justify-content-md-center"><span>
  <Link to="/community/popular"><Button variant="outline-primary" >Popular</Button></Link><span> </span>
  <Link to="/community/latest"><Button variant="outline-secondary">Latest</Button></Link><span> </span>
  <Link to="/community/random"><Button variant="outline-success">Random</Button></Link></span>
</ButtonToolbar>
</Card.Body>
</Card>
    <Switch>
    <Route exact path="/community" component={Postlist}></Route>
    <Route exact path="/community/popular" component={Postlist}></Route>
    <Route exact path="/community/latest" component={Postlist}></Route>
    <Route exact path="/community/random" component={Postlist}></Route>
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

</Router>
)}};

export default CommunityPage;
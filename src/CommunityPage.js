import React, { Component } from 'react';
import {Row, Col, Container, Card} from'react-bootstrap';
import { Route,  Switch} from 'react-router-dom';
import SearchList from './minorComponents/SearchList'
import Postlist from './minorComponents/Postlist'
import CommunityRightPanel from './minorComponents/CommunityRightPanel';

import PublishPage from './PublishPage';

import ContentNavBar from './minorComponents/ContentNavBar';
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

<ContentNavBar/>

</Card>
    <Switch>
    <Route exact path="/community" render={() => (<Postlist contentType="popular"/>)}></Route>
    <Route exact path="/community/popular" component={() => (<Postlist contentType="popular"/>)}></Route>
    <Route exact path="/community/latest" component={() => (<Postlist contentType="latest"/>)}></Route>
    <Route exact path="/community/random" component={() => (<Postlist contentType="random"/>)}></Route>
    <Route path="/search" component={() => (<SearchList/>)}></Route>
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
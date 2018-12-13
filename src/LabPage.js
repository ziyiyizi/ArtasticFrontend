import React, { Component } from 'react';
import {Row, Col, Container, ButtonToolbar, Button,Card} from'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import SearchList from './minorComponents/SearchList'
import Postlist from './minorComponents/Postlist'
import CommunityRightPanel from './minorComponents/CommunityRightPanel';

import PublishPage from './PublishPage';

import ContentNavBar from './minorComponents/ContentNavBar';
import PostChart from './minorComponents/PostChart';
//import Background from './minorComponents/Background';


class LabPage extends Component{
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
    <Route exact path="/lab/workreview" component={() => (<SearchList assessmode/>)}></Route>
    <Route exact path="/lab/selfreview" component={() => (<Postlist contentType="popular"/>)}></Route>
    <Route path="/lab/workreview/:artworkId" component={() => (<PostChart/>)}></Route>
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

export default LabPage;
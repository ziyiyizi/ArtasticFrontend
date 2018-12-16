import React, { Component } from 'react';
import {Row, Col, Container, Card} from'react-bootstrap';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import SearchList from './minorComponents/SearchList'

import CommunityRightPanel from './minorComponents/CommunityRightPanel';
import UserDetailCard from './minorComponents/UserDetailCard'
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
    <Route exact path="/lab/selfreview" component={() => (<UserDetailCard/>)}></Route>
    <Route path="/lab/workreview/:artworkId" component={() => (<PostChart/>)}></Route>
    <Route path="/member/:artistname" component={() => (<UserDetailCard/>)}></Route>
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
import React, { Component } from 'react';
import './bootstrap.min.css';
import {Row, Col, Container} from'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {IndexRoute}from 'react-router';
import ReactDOM from 'react-dom';
import Postlist from './Postlist'

class CommunityPage extends Component{
render(){ return  ( 

 <Container>
  <Row className="justify-content-md-center">
    <Col xs lg="1" id="CommunityLeftPanel">

    </Col>

    <Col md="auto" >
    <div id="CommunityContentPanel" style={{ width: '40rem' }}>
    {this.props.children}
    </div>
    </Col>
    <Col xs lg="auto" id="CommunityRightPanel">
      rightpanel
    </Col>
  </Row>

</Container>
)}};

export default CommunityPage;
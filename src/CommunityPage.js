import React, { Component } from 'react';
import './bootstrap.min.css';
import {Row, Col, Container} from'react-bootstrap';
import ReactDOM from 'react-dom';
import Postlist from './Postlist'

class CommunityPage extends Component{
render(){ return  ( <Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2" className="CommunityLeftPanel">
      1 of 3
    </Col>

    <Col md="auto" >
    <div id="CommunityContentPanel" style={{ width: '40rem' }}>
    </div>
    </Col>

    <Col xs lg="2" className="CommunityRightPanel">
      3 of 3
    </Col>
  </Row>

</Container>)}};

export default CommunityPage;
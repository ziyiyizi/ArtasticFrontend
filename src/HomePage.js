import React, {Component} from 'react';
import {Row, Col, Container, ButtonToolbar, Button,Card} from'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Postlist from './minorComponents/Postlist'
import CommunityRightPanel from './minorComponents/CommunityRightPanel';
import ContentNavBar from './minorComponents/ContentNavBar';
import PublishPage from './PublishPage';
import BannerMod from './minorComponents/BannerMod';

class HomePage extends Component{
    render(){
        return (
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
  <Route exact path="/home" render={() => (<Postlist contentType="feed"/>)}></Route>
  <Route exact path="/home/feed" component={() => (<Postlist contentType="feed"/>)}></Route>
  <Route exact path="/home/tweet" component={() => (<Postlist contentType="tweet"/>)}></Route>
  <Route exact path="/home/mylikes" component={() => (<Postlist contentType="mylikes"/>)}></Route>

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
        )
    }
}
export default HomePage;
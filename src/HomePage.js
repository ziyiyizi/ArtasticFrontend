import React, {Component} from 'react';
import {Row, Col, Container, ButtonToolbar, Button,Card} from'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Postlist from './minorComponents/Postlist'
import CommunityRightPanel from './minorComponents/CommunityRightPanel';
import BannerMod from './minorComponents/BannerMod';

class HomePage extends Component{
    render(){
        return (
<Router>
<div>
<BannerMod/>
<Container>

 <Row className="justify-content-md-center">


   <Col md="auto" >
   <div id="CommunityContentPanel" style={{ width: '42rem' }}>
   <br />
<Card>
 <Card.Body>
<ButtonToolbar className="justify-content-md-center">
 <Link to="/home/spotlight"><Button variant="outline-primary" >Spotlight</Button></Link>
 <Link to="/home/tweet"><Button variant="outline-secondary">Tweets</Button></Link>
 <Link to="/home/notification"><Button variant="outline-success">Notifications</Button></Link>
 <Link to="/home/chat"><Button variant="outline-warning">chats</Button></Link>
</ButtonToolbar>
</Card.Body>
</Card>
   <Switch>
   <Route exact path="/home" component={Postlist}></Route>
   <Route exact path="/home/spotlight" component={Postlist}></Route>
   <Route exact path="/home/tweet" component={Postlist}></Route>
   <Route exact path="/home/notification" component={Postlist}></Route>
   <Route exact path="/home/chat" component={Postlist}></Route>
   </Switch>
   </div>
   </Col>
   <Col style={{ width: '16rem' }} id="CommunityRightPanel">
     <CommunityRightPanel/>
   </Col>
 </Row>

</Container>
</div>
</Router>
        )
    }
}
export default HomePage;
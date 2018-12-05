import React, {Component} from 'react';
import {Row, Col, Container, ButtonToolbar, Button,Card} from'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Postlist from './Postlist'
import CommunityRightPanel from './CommunityRightPanel';
import BannerMod from './BannerMod';

class SearchPage extends Component{
    render(){
        return (
<Router>
<div>
<BannerMod/>
<Container>

 <Row className="justify-content-md-center">


   <Col md="auto" >
   <div id="CommunityContentPanel" style={{ width: '40rem' }}>
   <br />
<Card>
 <Card.Body>
<ButtonToolbar className="justify-content-md-center">
 <Link to="/community/popular"><Button variant="outline-primary" >Popular</Button></Link>
 <Link to="/community/latest"><Button variant="outline-secondary">Latest</Button></Link>
 <Link to="/community/random"><Button variant="outline-success">Random</Button></Link>
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
</div>
</Router>
        )
    }
}

export default SearchPage;
import React, {Component} from 'react';
import {Row,Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Redirect, Switch,Link} from 'react-router-dom';
import BannerMod from './minorComponents/BannerMod';
import PersonalityForm from './minorComponents/PersonalityForm';

class UserPage extends Component{
    render(){
        return (
 <div>
  <br />
  <br />
  <hr />
  <Container>
    <Row className="justify-content-md-center">
      <div class="col-md-4" style={{marginTop:'1rem'}}>
         <ul class="list-group" style={{marginTop:'1rem'}}>
           <Link class="list-group-item" to="/user/personality">Profile</Link>

         </ul>
      </div>
      <div class="col-md-4" style={{marginTop:'1rem'}}>
         <ul class="list-group" style={{marginTop:'1rem'}}>
           <Link class="list-group-item" to="/lab/selfreview">Achievement</Link>

         </ul>
      </div>

      <div class="col-md-8" style={{width:'55rem',maginTop:'1rem'}}>
         <div>
          <head/>
          <aside/>
          <Switch> 
            <Route path="/user/personality" component={PersonalityForm}/>

          </Switch>
         </div>
      </div>
    </Row>
  </Container>
 </div>
        )
    }
}
export default UserPage;
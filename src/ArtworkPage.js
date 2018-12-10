import React, { Component } from 'react';
import {Row, Col, Container, ButtonToolbar, Button,Card} from'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Postlist from './minorComponents/Postlist'
import CommunityRightPanel from './minorComponents/CommunityRightPanel';
import BannerMod from'./minorComponents/BannerMod';
import CustomFabs from './minorComponents/CustomFabs'
import PublishPage from './PublishPage';
import NewIcon from '@material-ui/icons/FiberNew';
import HotIcon from '@material-ui/icons/Whatshot';
import RandomIcon from '@material-ui/icons/Public'
import PostItem from './minorComponents/PostItem';
import { get } from './utils/request';
//import Background from './minorComponents/Background';


class ArtworkPage extends Component{
    constructor(props){
        super(props);
        this.state={
            post:{},
        }
    }

    getInfo(){
        console.log(window.location.pathname);
        get(window.location.pathname).then(data => {
            if (!data.error) {
              console.log("我已经获取了图片。data:"+data.post);
              this.setState({
                post: data.post,
              });
            }
          });
    }


    render(){ 
        this.getInfo();
        return  ( 

<div>

<BannerMod/>

 <Container>

  <Row className="justify-content-md-center">


    <Col>
    <div id="CommunityContentPanel" >
    <br />
<Card>

<ButtonToolbar className="justify-content-md-center">
  <a href="/community/popular"><CustomFabs displayText={<HotIcon fontSize="large"/>}>Popular</CustomFabs></a>
  <a href="/community/latest"><CustomFabs displayText={<NewIcon fontSize="large"/>}>Latest</CustomFabs></a>
  <a href="/community/random"><CustomFabs displayText={<RandomIcon fontSize="large"/>}>Random</CustomFabs></a>
</ButtonToolbar>

</Card>
<br/>
    {/* <PostItem post={this.state.posts} addComment="true"></PostItem> */}
    <PostItem post={this.state.post} addComment></PostItem>
    <br/>
    
    </div>
    </Col>
  </Row>

</Container>
<PublishPage/>
</div>


)}};

export default ArtworkPage;
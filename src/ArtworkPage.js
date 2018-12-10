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
            posts:{},
        }
    }

    getInfo(){
        console.log(window.location.pathname);
        get(window.location.pathname).then(data => {
            if (!data.error) {
              console.log("我已经获取了图片。data:"+data.posts);
              this.setState({
                posts: data.posts,
              });
            }
          });
    }


    render(){ 
        this.getInfo();
        const item={
            artistId:'114514',
            artistName:'Dark Flame Master',
            artworkName:'放逐这个世界！',
            artworkId:'123',
            date:'18-12-13',
            likes:[[]
            
            ],
            fileURL:'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2509241433.jpg',
            iconURL:'',
            frenzy:'1000',
            tags:['tag1','tag2'],
            description:'我的中二病犯了，又画了一幅麒麟臂发作的画，我真是一个写实主义大艺术家。（扼腕浩叹）'
          }

        return  ( 
<Router>
<div>

<BannerMod/>

 <Container>

  <Row className="justify-content-md-center">


    <Col>
    <div id="CommunityContentPanel" >
    <br />
<Card>

<ButtonToolbar className="justify-content-md-center">
  <Link to="/community/popular"><CustomFabs displayText={<HotIcon fontSize="large"/>}>Popular</CustomFabs></Link>
  <Link to="/community/latest"><CustomFabs displayText={<NewIcon fontSize="large"/>}>Latest</CustomFabs></Link>
  <Link to="/community/random"><CustomFabs displayText={<RandomIcon fontSize="large"/>}>Random</CustomFabs></Link>
</ButtonToolbar>

</Card>
<br/>
    {/* <PostItem post={this.state.posts} addComment="true"></PostItem> */}
    <PostItem post={item} addComment="true"></PostItem>
    </div>
    </Col>
  </Row>

</Container>
<PublishPage/>
</div>

</Router>
)}};

export default ArtworkPage;
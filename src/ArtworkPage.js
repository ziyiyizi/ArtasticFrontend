import React, { Component } from 'react';
import {Row, Col, Container, ButtonToolbar, Button,Card as OldCard} from'react-bootstrap';
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
import { getPost } from './utils/request';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';


import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import MoreVertIcon from '@material-ui/icons/ZoomOutMap';


import { white } from 'material-ui/styles/colors';

//import Background from './minorComponents/Background';

const styles = theme => ({
  card: {
    maxWidth: 10000,
  },
  media: {
    height: 0,
    //paddingTop: '56.25%', // 16:9
    paddingTop:'125%'
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: white[500],
  },
});



class ArtworkPage extends Component{
    constructor(props){
        super(props);
        this.state={
            post:{},
        }
        this.getInfo=this.getInfo.bind(this);

    }
    componentDidMount(){
    this.getInfo();
    }

    getInfo(){
      console.log(window.location.pathname.substr(6));
        getPost(window.location.pathname.substr(6)).then(data => {
            if (!data.error) {
              console.log("我已经获取了图片。data:"+data.post.artworkId);
              this.setState({
                post: data.post,
              });
            }
          });
    }


    render(){ 
      const { classes } = this.props;

        return  ( 

<div>

<BannerMod/>

 <Container>

  <Row className="justify-content-md-center">


    <Col>
    <div id="CommunityContentPanel" >
    <br />
<OldCard>

<ButtonToolbar className="justify-content-md-center">
  <a href="/community/popular"><CustomFabs displayText={<HotIcon fontSize="large"/>}>Popular</CustomFabs></a>
  <a href="/community/latest"><CustomFabs displayText={<NewIcon fontSize="large"/>}>Latest</CustomFabs></a>
  <a href="/community/random"><CustomFabs displayText={<RandomIcon fontSize="large"/>}>Random</CustomFabs></a>
</ButtonToolbar>

</OldCard>
<br/>
    {/* <PostItem post={this.state.posts} addComment="true"></PostItem> */}
    <PostItem post={this.state.post} addComment></PostItem>
    <br/>

    <Card className={classes.card}>
        <CardHeader 
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar} >
              <img src={this.state.post.iconURL} alt="810"  width="41px" 
          />
            </Avatar>
          }
          action={
            <IconButton href={'/post/'+this.state.post.artworkId}>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.state.post.artistName}
          subheader={this.state.post.date}
        />
        </Card>
    </div>
    </Col>
  </Row>

</Container>
<PublishPage/>
</div>


)}};

ArtworkPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArtworkPage);


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
import SearchList from './minorComponents/SearchList';


import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import MoreVertIcon from '@material-ui/icons/More';
import HomeIcon from '@material-ui/icons/Home';
import TweetIcon from '@material-ui/icons/QuestionAnswer';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import StarIcon from '@material-ui/icons/Star'
import { white } from 'material-ui/styles/colors';
import ContentNavBar from './minorComponents/ContentNavBar';

//import Background from './minorComponents/Background';

const styles = theme => ({
  card: {
    maxWidth: 10000,
  },
  usercard:{
    width:'20rem',

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
        this.handleLit=this.handleLit.bind(this);
        if(window.location.pathname.match('post')){this.getInfo();}

    }
    

    getInfo(){
      console.log(window.location.pathname.substr(6));
        getPost(window.location.pathname.substr(6)).then(data => {
            if (!data.error) {
              console.log("我已经获取了图片。data:"+data.post);
              this.setState({
                post: data.post,
              });
            }
          });
    }

    handleLit(){
      // return window.location.pathname.match('popular')?1:
      // window.location.pathname.match('latest')?2:
      // window.location.pathname.match('random')?3:
      // window.location.pathname.match('home')?4:
      // window.location.pathname.match('feed')?5:
      // window.location.pathname.match('mylikes')?6:
      return 0;
    }

    render(){ 
      const { classes } = this.props;

        return  ( 

<div>



 <Container>

  <Row className="justify-content-md-center">


    <Col>
    <div id="CommunityContentPanel" className="justify-content-md-center">
    <br />
<OldCard>

<ContentNavBar/>

</OldCard>
<br/>

<Switch>
<Route path="/search" component={() => (<SearchList assessmode/>)}></Route>
<Route path="/post" component={() => (<div><PostItem post={this.state.post} addComment></PostItem>   <br/>
  <Container className="justify-content-md-center">
    <Card className={classes.usercard} >
        <CardHeader 
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar} >
              <img src={this.state.post.iconURL} alt="810"  width="41px" 
          />
            </Avatar>
          }
          action={
            <Link to={'/member/'+this.state.post.artistName}><IconButton>
              <StarIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
            </Link>
          }
          title={this.state.post.artistName}
          subheader={this.state.post.date}
        />
        </Card>
        </Container></div>)}></Route>
</Switch>

 
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


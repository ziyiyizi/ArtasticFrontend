import React, { Component } from 'react';
import {Row, Col, Container, ButtonToolbar, Button,Card as OldCard} from'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


import CustomFabs from './CustomFabs'

import NewIcon from '@material-ui/icons/FiberNew';
import HotIcon from '@material-ui/icons/Whatshot';
import RandomIcon from '@material-ui/icons/Public'
import AssessMeIcon from '@material-ui/icons/AssignmentInd'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {UncontrolledTooltip as Tooltip}from 'reactstrap';
import PaletteIcon from '@material-ui/icons/Palette'
import HomeIcon from '@material-ui/icons/Home';
import TweetIcon from '@material-ui/icons/QuestionAnswer';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

import { white } from 'material-ui/styles/colors';

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


class ContentNavBar extends Component{
  constructor(props){
    super(props);
    if(window.location.pathname.match('community'))this.state.show=1;
    else if(window.location.pathname.match('home'))this.state.show=2;
    else if(window.location.pathname.match('lab'))this.state.show=3;
    if(window.location.pathname.match('popular'))this.state.lit=1;
    else if(window.location.pathname.match('latest'))this.state.lit=2;
    else if(window.location.pathname.match('random'))this.state.lit=3;
    else if(window.location.pathname.match('feed'))this.state.lit=4;
    else if(window.location.pathname.match('tweet'))this.state.lit=5;
    else if(window.location.pathname.match('mylikes'))this.state.lit=6;
    else if(window.location.pathname.match('selfreview'))this.state.lit=7;
    else if(window.location.pathname.match('workreview'))this.state.lit=8;
  }

state={
  lit:0,
  show:0,
}
  componentWillReceiveProps(nextProps){
    this.setState({show:0,lit:0});
    if(window.location.pathname.match('popular'))this.setState({lit:1,});
    else if(window.location.pathname.match('latest'))this.setState({lit:2,});
    else if(window.location.pathname.match('random'))this.setState({lit:3,});
    else if(window.location.pathname.match('feed'))this.setState({lit:4,});
    else if(window.location.pathname.match('tweet'))this.setState({lit:5,});
    else if(window.location.pathname.match('mylikes'))this.setState({lit:6,});
    else if(window.location.pathname.match('selfreview'))this.setState({lit:7,});
    else if(window.location.pathname.match('workreview'))this.setState({lit:8,});
    if(window.location.pathname.match('community'))this.setState({show:1});
    else if(window.location.pathname.match('home'))this.setState({show:2});
    else if(window.location.pathname.match('lab'))this.setState({show:3});
  }
    render(){
          const{location}=this.props
        return(<ButtonToolbar className="justify-content-md-center">
        
  {this.state.show==1||this.state.show==0?<Link to="/community/popular" id="popular"><CustomFabs lit={this.state.lit==1?true:false} displayText={<HotIcon fontSize="large"/>}>Popular</CustomFabs> </Link>:<div id="popular"/>}
  {this.state.show==1||this.state.show==0?<Link to="/community/latest" id="latest"><CustomFabs lit={this.state.lit==2?true:false} displayText={<NewIcon fontSize="large"/>}>Latest</CustomFabs> </Link>:<div id="latest"/>}
  {this.state.show==1||this.state.show==0?<Link to="/community/random" id='random'><CustomFabs lit={this.state.lit==3?true:false} displayText={<RandomIcon fontSize="large"/>}>Random</CustomFabs> </Link>:<div id='random'/>}
  {this.state.show==2||this.state.show==0?<Link to="/home/feed" id='feed'><CustomFabs lit={this.state.lit==4?true:false} displayText={<HomeIcon fontSize="large"/>}>Random</CustomFabs> </Link>:<div id='feed'/>}
  {this.state.show==2||this.state.show==0?<Link to="/home/tweet" id='chitchats'><CustomFabs lit={this.state.lit==5?true:false} displayText={<TweetIcon fontSize="large"/>}>Random</CustomFabs> </Link>:<div id='chitchats'/>}
  {this.state.show==2||this.state.show==0?<Link to="/home/mylikes" id='favourite'><CustomFabs lit={this.state.lit==6?true:false} displayText={<LoyaltyIcon fontSize="large"/>}>Random</CustomFabs> </Link>:<div id='favourite'/>}
  {this.state.show==3?<Link to="/lab/selfreview" id='selfReview'><CustomFabs lit={this.state.lit==7?true:false} displayText={<AssessMeIcon fontSize="large"/>}>Random</CustomFabs> </Link>:<div id='selfReview'/>}
  {this.state.show==3?<Link to="/lab/workreview" id='artworksReview'><CustomFabs lit={this.state.lit==8?true:false} displayText={<PaletteIcon fontSize="large"/>}>Random</CustomFabs></Link> :<div id='artworksReview'/>}
<Tooltip target="popular" hideArrow  delay={{ show: 500, hide: 100 }} placement="bottom">Popular</Tooltip>
<Tooltip target="latest" hideArrow  delay={{ show: 500, hide: 100 }} placement="bottom">Latest</Tooltip>
<Tooltip target="random" hideArrow  delay={{ show: 500, hide: 100 }} placement="bottom">Random</Tooltip>
<Tooltip target="feed" hideArrow  delay={{ show: 500, hide: 100 }} placement="bottom">Feed</Tooltip>
<Tooltip target="chitchats" hideArrow  delay={{ show: 500, hide: 100 }} placement="bottom">Chitchats</Tooltip>
<Tooltip target="favourite" hideArrow  delay={{ show: 500, hide: 100 }} placement="bottom">Favourite</Tooltip>
<Tooltip target="selfReview" hideArrow  delay={{ show: 500, hide: 100 }} placement="bottom">Myself</Tooltip>
<Tooltip target="artworksReview" hideArrow  delay={{ show: 500, hide: 100 }} placement="bottom">Artworks</Tooltip>
</ButtonToolbar>

)
    }

}

ContentNavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ContentNavBar);
  
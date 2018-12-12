import React, { Component } from 'react';
import {Row, Col, Container, ButtonToolbar, Button,Card as OldCard} from'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


import CustomFabs from './CustomFabs'

import NewIcon from '@material-ui/icons/FiberNew';
import HotIcon from '@material-ui/icons/Whatshot';
import RandomIcon from '@material-ui/icons/Public'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


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

    render(){
        return(<ButtonToolbar className="justify-content-md-center">
  <Link to="/community/popular"><CustomFabs lit={false} displayText={<HotIcon fontSize="large"/>}>Popular</CustomFabs></Link>
  <Link to="/community/latest"><CustomFabs displayText={<NewIcon fontSize="large"/>}>Latest</CustomFabs></Link>
  <Link to="/community/random"><CustomFabs displayText={<RandomIcon fontSize="large"/>}>Random</CustomFabs></Link>
  <Link to="/home/feed"><CustomFabs displayText={<HomeIcon fontSize="large"/>}>Random</CustomFabs></Link>
  <Link to="/home/tweet"><CustomFabs displayText={<TweetIcon fontSize="large"/>}>Random</CustomFabs></Link>
  <Link to="/home/mylikes"><CustomFabs displayText={<LoyaltyIcon fontSize="large"/>}>Random</CustomFabs></Link>
</ButtonToolbar>)
    }

}

ContentNavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ContentNavBar);
  
import React, { Component } from 'react';
import {Row, Col, Container,Card as OldCard} from'react-bootstrap';
import { Route, Link, Switch} from 'react-router-dom';

import PublishPage from './PublishPage';

import PostItem from './minorComponents/PostItem';
import { getPost, getData } from './utils/request';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import SearchList from './minorComponents/SearchList';


import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import MoreVertIcon from '@material-ui/icons/More';

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
            follwed:false,
        }
        this.getInfo=this.getInfo.bind(this);

        this.handleFollow=this.handleFollow.bind(this);
        if(window.location.pathname.match('post')){this.getInfo();}

    }
    

    getInfo(){
  //    console.log(window.location.pathname.substr(6));
        getPost(window.location.pathname.substr(6)).then(data => {
            if (!data.error) {
    //          console.log("我已经获取了图片。data:"+data.post);
              this.setState({
                post: data.post,
              });
            }
          });
    }

    handleFollow(){

            getData('/followmember',this.state.post.artistName).then(data => {
                if (!data.error) {

                  this.setState({
                    followed:true,
                  });
                }
              });
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
<Route path="/search" component={() => (<SearchList/>)}></Route>
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
            <div>
            <IconButton onClick={this.handleFollow}>
              <StarIcon />
            </IconButton>
            <Link to={'/member/'+this.state.post.artistName}>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
            </Link></div>
          }
          title={this.state.post.artistName}
          subheader={this.state.post.date}
        />
        </Card>
        <br/>
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


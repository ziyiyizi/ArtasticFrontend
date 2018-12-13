import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import {Link}from 'react-router-dom';
import CardHeader from '@material-ui/core/CardHeader';
import SearchList from './SearchList';
import{getPost}from'../utils/request';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star'
import MoreVertIcon from '@material-ui/icons/More';
import {Row, Container,Card,Button} from'react-bootstrap';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
    marginLeft:10,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});


class CommunityRightPanel extends Component{

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
    getPost('17').then(data => {
        if (!data.error) {
          //console.log("我已经获取了图片。data:"+data.post);
          this.setState({
            post: data.post,
          });
        }
      });
}

    render(){

      const { classes } = this.props;
      const tags=['a','b','ccccccccc','ddd','csdasd'];
        return (
            <Container style={{ width: '15rem',
            position: '-webkit-sticky',  
            position: '-moz-sticky',
            position: '-ms-sticky', 
            position: 'sticky',
            top: '4rem' }}>
                  <br />
            <Row>
                <Card border='light'>

  <Card.Body>
    <Card.Title>Tags Weekly</Card.Title>
    <Card.Text><br/><Card style={{ width: '12rem' }}> 
              
    <Container className={classes.root}>

        {tags.map(data => {
          return (
            <Link to={"/search/tag/"+data} key={data}><Chip
              key={data}
                //avatar={logo}
               label={data}
              //onDelete={this.handleDelete(data)}
              className={classes.chip}
              color="primary"
            /></Link>
          );
        })}
      </Container></Card>
    </Card.Text>
  </Card.Body>
</Card>
            </Row>
            <br />
            <Row>

                <Card border="light" style={{ width: '15rem' }}>

  <Card.Body>
    <Card.Title>Artwork Weekly</Card.Title>

  </Card.Body>
  <Container className="justify-content-md-center">
    <Card className={classes.usercard} >
        <CardHeader 
          avatar={

              <img src={this.state.post.fileURL} alt="810"  width="41px" ></img>

          }
          action={
            <Link to={'/post/'+this.state.post.artworkId}>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
            </Link>
          }
          title={this.state.post.artworkName}
          subheader={'views: '+this.state.post.frenzy}
        />
        </Card>
        </Container>
</Card>

            </Row>
            <br />
            <Row>

    <Card border="light" style={{ width: '15rem' }}>

<Card.Body>
<Card.Title>Artist Weekly</Card.Title>

</Card.Body>
<Container className="justify-content-md-center">
<Card className={classes.usercard} >
<CardHeader 
avatar={
// <Avatar aria-label="Recipe" className={classes.avatar} >
  <img src={this.state.post.iconURL} alt="810"  width="41px" 
/>
// {/* </Avatar> */}
}
action={
<Link to={'/member/'+this.state.post.artistName}>
<IconButton>
  <MoreVertIcon />
</IconButton>
</Link>
}
title={this.state.post.artistName}
subheader={'followers: '+this.state.post.frenzy}
/>
</Card>
</Container>
</Card>
            </Row>
</Container>
        );
    }
};

CommunityRightPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CommunityRightPanel);
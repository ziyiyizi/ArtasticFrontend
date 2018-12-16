
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {Link}from 'react-router-dom';
import CardHeader from '@material-ui/core/CardHeader';


import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import MoreVertIcon from '@material-ui/icons/More';
import {Card} from'react-bootstrap';

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


class UserCard extends Component{

    constructor(props){
      super(props);
      this.state={
          post:{},
      }

  
  
  }


  render(){

    const { classes } = this.props;
    const { member }=this.props;


return(<Card className={classes.usercard} >
<CardHeader 
avatar={
 <Avatar aria-label="Recipe" className={classes.avatar} >
  <img src={member.iconURL} alt="810"  width="41px" 
/>
 </Avatar>
}
action={
<Link to={'/member/'+member.artistName}>
<IconButton >
  <MoreVertIcon />
</IconButton>
</Link>
}
title={member.artistName}
subheader={member.frenzy+' followers'}
/>
</Card>);

}
}

UserCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles)(UserCard);
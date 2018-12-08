import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LikeIcon from '@material-ui/icons/Favorite'
import MoreIcon from '@material-ui/icons/MoreHoriz'
import Grid from '@material-ui/core/Grid';
import { Nav, Button,Badge} from 'reactstrap';



const styles = {
  avatar: {
    margin: 5,
    backgroundColor: pink[100],
  },
  tips:{
    marginLeft:-10,
    marginRight:5,
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink[500],
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  otherAvatar:{
      margin:5,
  },
  navbar:{
      marginLeft:10,
  }
};



function IconAvatars(props) {
  const { classes } = props;
  const { likers } = props;
  const {frenzy}=props;
  var color="secondary";
  console.log("likers are "+likers);
  return (

    <Nav className={classes.navbar}>

    <Avatar id='likebutton' className={classes.avatar}  

    >
        <LikeIcon color={color} />
      </Avatar>
      {(0==+frenzy)?(<span/>):(<div><span/><Badge color='danger' className={classes.tips} >{frenzy}</Badge></div>)}
      

      {likers.map(item => (

         // <Link key={item.artistId} to={`/posts/${item.artistId}`}>
            <Avatar className={classes.avatar} src={item.userIcon} />
         // </Link>
        ))}
              <Avatar id='morebutton' className={classes.otherAvatar}  
    >
        <MoreIcon />
      </Avatar>
    </Nav>
  );
}

IconAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconAvatars);
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
import Grid from '@material-ui/core/Grid';
import { Nav, Button} from 'reactstrap';



const styles = {
  avatar: {
    margin: 5,
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
};



function IconAvatars(props) {
  const { classes } = props;
  const { likers } = props;
  var color="secondary";
  console.log("likers are "+likers);
  return (

    <Nav>

    <Avatar id='likebutton' className={classes.avatar}  
    onMouseEnter={()=>(color="secondary")}
    >
        <LikeIcon color={color} />
      </Avatar>

      <Avatar className={classes.avatar} >
        <FolderIcon />
      </Avatar>
      <Avatar className={classes.avatar}>
        <PageviewIcon />
      </Avatar>
      <Avatar className={classes.avatar}>
        <AssignmentIcon />
      </Avatar>
      {likers.map(item => (

         // <Link key={item.artistId} to={`/posts/${item.artistId}`}>
            <Avatar className={classes.avatar} src={item.userIcon} />
         // </Link>
        ))}
    </Nav>
  );
}

IconAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconAvatars);
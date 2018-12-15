import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import Avatar from '@material-ui/core/Avatar';
import Akari from '../pics/akari.jpg'


const styles = {
  avatar: {
    margin: 0,
    backgroundColor: red[200],
    width:37,
    height:37,
  },

};



function IconAvatars(props) {
  const { classes } = props;
  const { iconurl } = props;
    var icon=iconurl===undefined?null:iconurl;

  return (
    <Avatar className={classes.avatar} src={icon===null?Akari:icon} alt="?" >
      </Avatar>
  );
}

IconAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
  iconurl: PropTypes.string,
};

export default withStyles(styles)(IconAvatars);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
    var icon=(iconurl===null?null:iconurl);
  console.log('current icon is:'+icon)
  console.log('sessionStorage:'+sessionStorage.getItem('iconURL'))
  console.log('iconurl is:'+iconurl)
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
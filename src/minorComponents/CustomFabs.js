import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import lightGreen from '@material-ui/core/colors/lightGreen';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  lightGreen: {
    margin: theme.spacing.unit,
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[0],
    '&:hover': {
      backgroundColor: lightGreen[200],
    },
  },
});

function CustomFabs(props) {
  const { classes } = props;
  const{ disabled }=props;

  return (
    <div>
        <Fab className={classes.lightGreen} disabled={disabled}>
        {props.displayText}
      </Fab>
    </div>
  );
}

CustomFabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomFabs);
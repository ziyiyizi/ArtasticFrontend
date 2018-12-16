import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/IconButton';

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
  lightGreen2: {
    margin: theme.spacing.unit,
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[100],
    '&:hover': {
      backgroundColor: lightGreen[200],
    },
  },
});

class CustomFabs extends React.Component{
constructor(props){
  super(props);
    props.lit!==undefined?this.state.lit=props.lit:this.state.lit=this.state.lit;
};

state={
  lit:false,
}

componentWillReceiveProps(props){
  props.lit!==undefined?this.setState({
    lit:props.lit,
  }):this.state.lit=this.state.lit;
}

render(){
  const { classes } = this.props;
  const{ disabled }= this.props;
  //console.log(this.state.lit)
  return (
    <div>
        <Fab className={this.state.lit?classes.lightGreen2:classes.lightGreen} disabled={disabled}>
        {this.props.displayText}
      </Fab>
    </div>
  );
}

}

CustomFabs.propTypes = {
  classes: PropTypes.object.isRequired,
  lit:PropTypes.bool,
};

export default withStyles(styles)(CustomFabs);
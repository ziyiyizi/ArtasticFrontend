import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import {Container} from "react-bootstrap";

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

class TagChips extends React.Component {
  constructor(props){
    super(props);
    this.state.taglist=this.props.tags;

  }
  state = {

    taglist:[],
  };



  render() {
    const { classes } = this.props;

    console.log(this.state.taglist);

    return (
      <Container className={classes.root}>
    {this.state.taglist[0]===""? (<div/>):(
    <div>
        {this.state.taglist.map(data => {
          return (
            <a href={"/search/tag/"+data} key={data}><Chip
              key={data}
                //avatar={logo}
               label={data}
              //onDelete={this.handleDelete(data)}
              className={classes.chip}
              color="primary"
            /></a>
          );
        })}
        </div>)}
      </Container>
    );}
  }


TagChips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TagChips);
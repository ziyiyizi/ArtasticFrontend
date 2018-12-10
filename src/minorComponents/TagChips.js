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
  state = {

    //taglist:this.props.tags,
  };

  handleDelete = data => () => {

  };

  render() {
    const { classes } = this.props;
    const {tags}=this.props;

    return (
      <Container className={classes.root}>
        {/* {this.state.chipData.map(data => {
          return (
            <Chip
              key={data.key}
                //avatar={logo}
              label={data.label}
              //onDelete={this.handleDelete(data)}
              className={classes.chip}
              color="primary"
            />
          );
        })}        */}
        {tags.map(data => {
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
      </Container>
    );
  }
}

TagChips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TagChips);
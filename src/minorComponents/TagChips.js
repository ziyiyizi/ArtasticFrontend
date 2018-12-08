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
    chipData: [
      { key: 0, label: 'Angular' },
      { key: 1, label: 'jQuery' },
      { key: 2, label: 'Polymer' },
      { key: 3, label: 'React' },
      { key: 4, label: 'Vue.js' },
    ],
    //taglist:this.props.tags,
  };

  handleDelete = data => () => {

  };

  render() {
    const { classes } = this.props;
    const {tags}=this.props;
    console.log(tags);
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
            <Chip
              key={data}
                //avatar={logo}
               label={data}
              //onDelete={this.handleDelete(data)}
              className={classes.chip}
              color="primary"
            />
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
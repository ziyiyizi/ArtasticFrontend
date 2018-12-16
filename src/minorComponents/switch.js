import React,{Component}from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import Switch from '@material-ui/core/Switch';

const styles = theme => ({
  colorSwitchBase: {
    color: purple[300],
    '&$colorChecked': {
      color: purple[500],
      '& + $colorBar': {
        backgroundColor: purple[500],
      },
    },
  },
  colorBar: {},
  colorChecked: {},

});

class Switches extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };



  render() {
    const { classes } = this.props;

    return (
<span>
            <Switch
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
              classes={{
                switchBase: classes.colorSwitchBase,
                checked: classes.colorChecked,
                bar: classes.colorBar,
              }}
            />
</span>

    );
  }
}

Switches.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Switches);

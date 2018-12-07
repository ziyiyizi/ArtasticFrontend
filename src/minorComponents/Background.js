import React,{Component}from 'react';
import "../pics/Auroral.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Container}from 'react-bootstrap';

    const styles = theme => ({
        display: 'block', // if it is not a block element
        position: 'relative',
        overflow: 'hidden',
      });

class Background extends Component{



    render(){

        const { classes } = this.props;
        return(
            <Container className="your-container"  classes={{
                display: classes.display,
                position: classes.position,
                overflow: classes.overflow,
              }} >
  <div className="auroral-northern"></div>
</Container>
        );
    }
}

Background.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Background);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/More';

import StarIcon from '@material-ui/icons/Star'
import {Row, Container} from 'react-bootstrap';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});
  const handleFollow=()=>{

  };
function MediaControlCard(props) {
  const { classes, theme } = props;



  return (
      <div>
          <br/>
    <Card className={classes.card}>
    <Container >
    <Row>
        <CardMedia
        className={classes.cover}
        image="https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2509241433.jpg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        <IconButton onClick={handleFollow}>
              <StarIcon fontSize='large'/>
            </IconButton >
        </div>
      </div>

      </Row>
      <Row>
          <CardContent>
          <Typography component="h6" variant="h6">
          Displays a little badge.
          {/* { member={
            'worknum':'',
            'frenzy':'',
            'joinyear':'',
            'description':'',
            'works':'',
            'followers':'',
            'following':'',
          }} */}
          </Typography>
          <Typography component="h6" variant="h6">

            Currently hold "x" masterpieces and total likes are 
          </Typography>
          <Typography component="h6" variant="h6">
            joined 8 years ago
          </Typography>
          <Typography component="h6" variant="h6">
            discription
          </Typography>
            <Typography component="h6" variant="h6">
            his works:
          </Typography>
          <Typography component="h6" variant="h6">
            followers are
          </Typography>
              </CardContent>
      </Row>
      </Container>
    </Card>
    </div>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
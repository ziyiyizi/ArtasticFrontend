import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CardText } from 'material-ui';
import {DropdownItem, Row} from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import CustomFabs from './CustomFabs';
import CommentIcon from '@material-ui/icons/AddComment';

const styles = theme => ({
  card: {
    maxWidth: 199900,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    
  },
  dense: {
    marginTop: 16,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class CommentList extends React.Component {
  state = { expanded: false ,
    multiline: 'Controlled'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    //console.log(this.state.multiline)
  };

  render() {
    const { classes } = this.props;
    const {comments}=this.props;
    const {addComment}=this.props;

    return (<div>
        {comments.map(item=>(<div key={item.commentTime}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <img src={item.userIcon} alt="810"  width="41px" />
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={item.commentorName+(item.userName==null?"":", "+<MoreVertIcon/>+item.userName) +", "+item.commentTime}
          subheader={item.comment}
        />
        <DropdownItem divider />
          
        </div>
        ))}
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-textarea"
          label="Multiline"
          multiline
          fullWidth
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textField}

          variant="outlined"
        />
        <div className="justify-content-right">
        <CustomFabs displayText={<CommentIcon fontSize="middle"/>}/>
        </div>
        </form>
     </div>);
  }
}

CommentList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentList);
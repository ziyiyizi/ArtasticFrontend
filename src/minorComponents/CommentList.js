import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import{ButtonToolbar}from 'react-bootstrap'
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
import red from '@material-ui/core/colors/grey';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CardText } from 'material-ui';
import {DropdownItem, Row} from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import CustomFabs from './CustomFabs';
import CommentIcon from '@material-ui/icons/AddComment';
import {Link} from 'react-router-dom';
import CompareIcon from '@material-ui/icons/CompareArrows'
import {Badge} from 'reactstrap';
import {postComment} from '../utils/request'
import QuoteIcon from '@material-ui/icons/FormatQuote';
const styles = theme => ({
  card: {
    maxWidth: 199900,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    
  },
  dense: {
    marginTop: 16,
  },
  tips:{
    marginLeft:-10,
    marginRight:5,
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
    backgroundColor: red['50'],
    margin:10,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

class CommentList extends React.Component {
  constructor(props){
    super(props);
    this.resetComment=this.resetComment.bind(this);
    this.props.addComment!=null?this.state.addComment=props.addComment:this.state.addComment=false;
  }

  state = { expanded: false ,
    multiline: '',
    responseTo:'',
    responseToIcon:'',
    disableIcon:true,
    addComment:false,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    //console.log(this.state.multiline)
  };



  handleCommentSubmit=()=>{
    console.log("submit")
    let formData = new FormData(); formData.append('comment', this.state.multiline);
             formData.append("responseTo",this.state.responseTo);
             formData.append("artworkId",this.props.artworkId);
              postComment('/makecomment', formData) .then(data => {
                if (!data.error) {
                  //console.log("我已经评论作品。id:"+this.props.artworkId)
                }
                  this.setState({
                    multiline:'',
                  })
                }
             ) .catch(err => console.log(err));
  }
  
  handleResponse(id,icon,e){
    //console.log(id);
    this.setState({
      responseTo:id,
      responseToIcon:icon,
      disableIcon:false,
      addComment:true,
    })
  }

  resetComment(){
    this.setState({
      responseTo:'',
      responseToIcon:'',
      disableIcon:true,
      addComment:false,
    })
  }

  render() {
    const { classes } = this.props;
    const {comments}=this.props;


    return (<div>
      <DropdownItem divider />
        {comments.map(item=>(<div key={item.userName}>
        <CardHeader
          avatar={
            <Link to={'/member/'+item.commentorName}>
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <img src={item.userIcon} alt="810"  width="41px" />
            </Avatar>
            </Link>
          }
          action={
            <IconButton   key={item.commentorName} onClick={this.handleResponse.bind(this,item.commentorName, item.userIcon)}>
              <QuoteIcon />
            </IconButton>
            
          }
          title={item.commentorName+(item.userName===null||item.userName===undefined||item.userName===''?" ":" @ "+(item.userName)) +" "+item.commentTime}
          subheader={item.comment}
        />
        
          
        </div>
        ))}
          {(this.state.addComment)?(<div>
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-textarea"
          label="Commenting"
          multiline
          fullWidth
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textField}
          variant="outlined"
        />


        </form>
                <ButtonToolbar className="justify-content-md-center">
        <div onClick={this.handleCommentSubmit}><CustomFabs displayText={<CommentIcon fontSize="small"/>} /></div>
      
      <div onClick={this.resetComment}><CustomFabs displayText={<CompareIcon fontSize="small"/>} disabled={this.state.disableIcon}/></div>
        <Avatar id='morebutton' className={classes.avatar} src={this.state.responseToIcon}/>
        {(0==+this.state.responseTo)?(<span/>):(<div onClick={this.resetComment}><span/><Badge color='danger' className={classes.tips} >x</Badge></div>)}
        </ButtonToolbar>
</div>):(<div/>)

          }
        
     </div>);
  }
}

CommentList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentList);
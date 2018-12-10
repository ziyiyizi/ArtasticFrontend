import React from 'react';
import logo from '../pics/Artastic.png';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

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
import MoreVertIcon from '@material-ui/icons/ZoomOutMap';
import CommentIcon from '@material-ui/icons/ChatBubble';
import {DropdownItem} from 'reactstrap';
import TagChips from './TagChips';
import { white } from 'material-ui/styles/colors';
import {getLikelistAndComments, getData}from '../utils/request';
import {Scrollbars} from 'react-custom-scrollbars'
import LikeList from './LikeList';
import urls from '../utils/url'
import CommentList from './CommentList';

const styles = theme => ({
  card: {
    maxWidth: 10000,
  },
  media: {
    height: 0,
    //paddingTop: '56.25%', // 16:9
    paddingTop:'125%'
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
    backgroundColor: white[500],
  },
});


class PostCard extends React.Component {
  constructor(props){
    super(props);
    this.state.ArtworkId=this.props.post.artworkId;
    this.state.addComment=this.props.addComment;

  }

  state = { expanded: false ,
    isLiked:"default",
    showComments:"default",
    addComment:false,
    likerslist:[],
    ArtworkId:'',
    commentlist:[]
  };

  componentDidMount(){
    console.log(this.props.post.artworkId)
    console.log(this.props.post.iconURL)
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
    this.setState(state=>{return state.showComments==="default"?({showComments:"primary"}):({showComments:"default"})});
    this.handleLikelist();
  };

  handleHeartClick=()=>{
    if(this.state.isLiked!="secondary"){}
    this.setState(()=>({isLiked:"secondary"}));
    this.handleLikeRequest();
  }

  handleLikelist=()=>{
    getLikelistAndComments(this.state.ArtworkId).then(data => {
      if (!data.error) {
        console.log("我已经获取了喜欢列表。data:"+data.likerslist);
        this.setState({
          likerslist:data.likerslist,
          commentlist:data.comments
        });
      }
      // else{
      //   console.log("获取喜欢列表失败，现展示假列表。data:"+this.props.post.likes);
      //   this.setState({
      //     likerslist:this.likerslist,
      //   });
      // }
    });
  }
  
  handleLikeRequest(){
    getData(urls.requestLike(), this.state.ArtworkId).then(data => {
      if (!data.error) {
        console.log("我已经喜欢作品。id:"+this.state.ArtworkId);
      }
  });}

  render() {
    const { classes } = this.props;
    const{ post } = this.props;


    //     var likelist="";
    // for (var x of post.likes) {likelist+=x["userName"] + '=' + x["liketime"];}
    // //console.log(post);
    return (
      <Card className={classes.card}>
        <CardHeader 
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar} >
              <img src={post.iconURL} alt="810"  width="41px" 
          />
            </Avatar>
          }
          action={
            <IconButton href={'/post/'+post.artworkId}>
              <MoreVertIcon />
            </IconButton>
          }
          title={post.artistName}
          subheader={post.date}
        />
        {/* <CardMedia
          className={classes.media}
          image={post.fileURL}
          title="Paella dish"
        /> */}
        {/* <CardContent>
          
        </CardContent> */}
        <img src={post.fileURL} style={{width:"100%"}}></img>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites" color={this.state.isLiked} onClick={this.handleHeartClick}>
            <FavoriteIcon/>
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="Comments"             
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            color={this.state.showComments}>

            <CommentIcon />
          </IconButton>


          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>

        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit >
        <span> </span>
        
        <TagChips tags={this.props.post.tags}/>
        <DropdownItem divider/>
          <CardContent>

  <h3>{post.artworkName}</h3>
<Scrollbars  style={{ width: "100%", height: "4rem" }}>
            <Typography paragraph>
            
            <br/>
{post.description}
      </Typography></Scrollbars>


          </CardContent>
            <DropdownItem divider/>
            <LikeList likers={post.likerslist} frenzy={post.frenzy}/>
            {this.state.addComment?(<DropdownItem divider/>):(<div/>)}
            <CommentList comments={this.state.commentlist} addComment={this.state.addComment} artworkId={this.state.artworkId}/>

        </Collapse>
      </Card>
    );
  }
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostCard);








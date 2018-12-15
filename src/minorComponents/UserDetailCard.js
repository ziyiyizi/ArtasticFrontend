import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {getData}from '../utils/request';
import StarIcon from '@material-ui/icons/Star';
import {Row, Container} from 'react-bootstrap';
import LikeList from './LikeList'
import CustomFabs from './CustomFabs';
import {Link}from 'react-router-dom'
import HotIcon from '@material-ui/icons/ImageSearch';
import CrownIcon from '../pics/crown-big.svg';
import CircusIcon from '../pics/circus.svg';
import BookIcon from '../pics/book.svg';
import AdmirerIcon from '../pics/admirer.svg'
import RobberIcon from '../pics/robber.svg';


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
  svgicons:{
    width:48 ,
    marginRight:'20px',

  }
});



class MediaControlCard extends Component {
constructor(props){
  super(props);
  this.handledisplay.bind(this);
  this.handleFollow=this.handleFollow.bind(this);
}

componentDidMount(){
  this.handledisplay();
}

handleFollow(){

  getData('/followmember',this.state.artistName).then(data => {
      if (!data.error) {

        this.setState({
          followed:true,
        });
      }
    });
}

state={
  worknum:null,
  frenzy:null,
  joinyear:null,
  description:null,
  works:null,
  followers:null,
  following:null,
  iconURL:null,
  artistName:null
}


handledisplay(){
  getData('/getmemberdetail', window.location.pathname).then(data=>{
    if(!data.error){
      this.setState({
        worknum:data.member.worknum,
        frenzy:data.member.frenzy,
        joinyear:data.member.joinyear,
  description:data.member.description,
  works:data.member.works,
  followers:data.member.followers,
  following:data.member.following,
  iconURL:data.member.iconURL,
  artistName:data.member.artistName,
      })
      console.log('below is the data.mamber' )
      console.log(data.member)
    }}
    )
  }
  
  render(){
  const { classes, theme } = this.props;
  return (<div>
          <br/>
    <Card className={classes.card}>
    <Container >
    <Row>
        <CardMedia
        className={classes.cover}
        image={this.state.iconURL}

      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          {this.state.artistName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        <IconButton onClick={this.handleFollow} color={this.state.follow?'default':'secondary'}>
              <StarIcon fontSize='large'/>
            </IconButton >
            <Link to={"/search/thismember/"+this.state.artistName}><CustomFabs lit={false} displayText={<HotIcon fontSize="large"/>}>Popular</CustomFabs> </Link>
        </div>
      </div>

      </Row>
      <Row>
          <CardContent style={{width:'42rem'}}>
          <Typography component="h6" variant="h6">
          <img src={this.state.num>0?CrownIcon:RobberIcon} className={classes.svgicons}></img>
           {this.state.num>0?'Active Contributor.':'Future Star.'}
          </Typography>
          <hr/>
          <Typography component="h6" variant="h6">
          <img src={AdmirerIcon} className={classes.svgicons}></img>
            With {this.state.worknum} masterpieces and {this.state.frenzy} followers.
            <br/>
          </Typography>
          <hr/>
          <Typography component="h6" variant="h6">
          <img src={CircusIcon} className={classes.svgicons}></img>
            Joined the community in {this.state.joinyear}.
            <br/>
          </Typography>
          <hr/>
          <Typography component="h6" variant="h6">
          <img src={BookIcon} className={classes.svgicons}></img>
            <cite>'{this.state.description}'</cite>
            <br/>
          </Typography>
          <hr/>

          <Typography component="h6" variant="h6">
            Followers are: 
            <br/>
          <LikeList likers={this.state.followers} frenzy={0}/>
          </Typography>
          <hr/>
          <Typography component="h6" variant="h6">
            Following: 
            <br/>
            <LikeList likers={this.state.following} frenzy={0}/>
          </Typography>
              </CardContent>
      </Row>
      </Container>
    </Card>
    </div>
  );
}
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {Button, Badge} from 'react-bootstrap';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {getData}from '../utils/request';
import BubbleIcon from '@material-ui/icons/BubbleChart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Stars';
import PostIcon from "@material-ui/icons/LocalPostOffice"
import BeenhereIcon from '@material-ui/icons/Beenhere'
import {Link}from 'react-router-dom';
import Sockette from 'sockette';

const styles = {
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
constructor(props){
  super(props);
  this.state.ws=new Sockette('ws://localhost:8080/'+sessionStorage.getItem('username'), {
    timeout: 5e3,
    maxAttempts: 10,
    onopen: e => console.log('Connected!', e),
    onmessage: e => console.log('Received:', e),
    onreconnect: e => console.log('Reconnecting...', e),
    onmaximum: e => console.log('Stop Attempting!', e),
    onclose: e => console.log('Closed!', e),
    onerror: e => console.log('Error:', e)
})}

  state = {
    notifyNum:0,
    right: false,
    notelist:[],
    ws:null,
  };

  ticking=()=> {
    this.fetchNum();
}
  

  componentDidMount(){
    this.interval = setInterval(()=>this.ticking(),10000)
  //  this.state.ws.send('Hello, world!');
  //  this.state.ws.json({type: 'ping'});
  // graceful shutdown
// Reconnect 10s later
  setTimeout(this.state.ws.reconnect, 10e3);
  }

  componentWillUnmount(){ this.state.ws.close();}

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
      
    });
    this.checkRefresh();
  };

  fetchNum(){
    getData('/fetchnotification',Date.now()).then(
      data=>{{
    if (!data.error) {
        this.setState({notifyNum:data.notifyNum,
        })}
      }} 
      )
  }

  checkRefresh(){
      getData('/getnotification',Date.now()).then(
          data=>{{
        if (!data.error) {
            this.setState({
            notelist:
              <List>
                {data.notification.map(single => (
                  single.type==='like'?<Link to={'/post/'+single.workId}><ListItem button key={single.notiTime}>
                    <ListItemIcon><FavoriteIcon/></ListItemIcon>
                    <ListItemText primary={single.senderName+' liked your work: '+single.workName} />
                  </ListItem></Link>
                  :single.type==='comment'?<Link to={'/post/'+single.workId}><ListItem button key={single.notiTime}>
                  <ListItemIcon><BubbleIcon/></ListItemIcon>
                  <ListItemText primary={single.senderName+' commented on your work: '+single.workName} />
                </ListItem> </Link>
                :single.type==='comment2'?<Link to={'/post/'+single.workId}><ListItem button key={single.notiTime}>
                  <ListItemIcon><BubbleIcon/></ListItemIcon>
                  <ListItemText primary={single.senderName+' commented on your comment at: '+single.workName} />
                </ListItem></Link>
                :single.type==='follow'?<Link to={'/member/'+single.senderName}><ListItem button key={single.notiTime}>
                <ListItemIcon><StarIcon/></ListItemIcon>
                <ListItemText primary={single.senderName+' followed you'} />
              </ListItem></Link>
              :single.type==='broadcast'?<ListItem button key={single.notiTime}>
              <ListItemIcon><PostIcon/></ListItemIcon>
              <ListItemText primary={single.notiContent} />
            </ListItem>:<div/>
                ))}
                {data.notifyNum==0?<ListItem button key='nothing'>
              <ListItemIcon><BeenhereIcon/></ListItemIcon>
              <ListItemText primary={'You have no more notifications'} />
            </ListItem>:<div/>}
              </List>,
            notifyNum:data.notifyNum,
          })}
        }} 
        )
  }


  
// notifycation.datum={
// type:['like','comment','follow','broadcast'],
// senderName:{},
// fromId:{username},
// aboutId:{artworkId},
// aboutName:{artworktitle},
// present:['string'],
// time:['time'],
// }


  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

  

    return (
      <div>
        <Button variant='light' onClick={this.toggleDrawer('right', true)}>Notification {this.state.notifyNum!=0?<Badge variant="dark">{this.state.notifyNum}</Badge>:<span/>}</Button>

        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
        <div className={classes.list}>
            {this.state.notelist}
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
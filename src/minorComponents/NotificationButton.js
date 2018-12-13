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

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    notifyNum:0,
    right: false,
    notelist:[],
  };

  

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
      
    });
    this.checkRefresh();
  };

  checkRefresh(){
      getData('/getnotification',Date.now()).then(
          data=>{{
        if (!data.error) {
            this.setState({
            notelist:
              <List>
                {data.notification.map(single => (
                  single.type==='like'?<ListItem button key={single.time}>
                    <ListItemIcon><FavoriteIcon/></ListItemIcon>
                    <ListItemText primary={single.fromName+' liked your work: '+single.aboutName} />
                  </ListItem>
                  :single.type==='comment'?<ListItem button key={single.time}>
                  <ListItemIcon><BubbleIcon/></ListItemIcon>
                  <ListItemText primary={single.fromName+' commented your work: '+single.aboutName} />
                </ListItem>
                :single.type==='follow'?<ListItem button key={single.time}>
                <ListItemIcon><StarIcon/></ListItemIcon>
                <ListItemText primary={single.fromName+' followed you'} />
              </ListItem>
              :single.type==='broadcast'?<ListItem button key={single.time}>
              <ListItemIcon><PostIcon/></ListItemIcon>
              <ListItemText primary={single.present} />
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
// fromName:{},
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
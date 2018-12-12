import React, { Component } from 'react';

import PostItem from "./PostItem";
import {Container} from 'react-bootstrap';

class PostsView extends Component {
  state={
  posts:this.props.posts,
  }
    componentWillReceiveProps(nextProps){
      this.setState({
        posts:nextProps.posts,
      })
    }
  render() {



    return (
      
      <div>
        
        {this.state.posts.map(item => (<div><br/>


            <PostItem post={item} />
</div>
        ))}
      </div>
    );
  }
}

export default PostsView;
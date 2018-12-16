import React, { Component } from 'react';

import PostItem from "./PostItem";


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
        
        {this.state.posts.map(item => (<div>


            <PostItem post={item} /><br/>
</div>
        ))}
      </div>
    );
  }
}

export default PostsView;
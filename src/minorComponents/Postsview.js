import React, { Component } from 'react';

import PostItem from "./PostItem";
import {Container} from 'react-bootstrap';

class PostsView extends Component {
  render() {
    const { posts } = this.props;

    return (
      
      <div>
        
        {posts.map(item => (<div><br/>


            <PostItem post={item} />
</div>
        ))}
      </div>
    );
  }
}

export default PostsView;
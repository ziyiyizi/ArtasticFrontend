import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostItem from "./PostItem";
import {Container} from 'react-bootstrap';

class PostsView extends Component {
  render() {
    const { posts } = this.props;

    return (
      <Container>
        <br/>
        {posts.map(item => (
          // 使用Link组件包裹每一个PostItem
         // <Link key={item.artistId} to={`/posts/${item.artistId}`}>
            <PostItem post={item} />
         // </Link>
        ))}
      </Container>
    );
  }
}

export default PostsView;
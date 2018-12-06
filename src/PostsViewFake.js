import React, { Component } from 'react';

import PostItem from "./PostItem";
import {Container} from 'react-bootstrap';

class PostsViewFake extends Component {
  render() {
    const item={
      artistId:'{post.artistId}',
      artistName:'{post.artistName}',
      ArtsName:'{post.artworkName}',
      ArtsId:'{post.artworkId}',
      Date:'{post.date}',
      Likes:'{post.likes}',
      Frenzy:'{post.frenzy}',
      Tags:'{post.tags}',
      Description:'{post.description}'
    }

    return (
      <Container>
        <br/>
        {
            <PostItem post={item} />

        }
      </Container>
    );
  }
}

export default PostsViewFake;
import React from 'react';
import {getFormatDate} from "./utils/date";
import {Card}from 'react-bootstrap';

function PostItem(props){
    const {post}=props;
    return(
        <li className="postItem">
        <Card >
  <Card.Img variant="top" src={post.fileURL} />
  <Card.Body>
    <Card.Text>
      artistId:{post.artistId}
      artistName:{post.artistName}
      ArtsName:{post.ArtsName}
      ArtsId:{post.ArtsId}
      Date:{post.Date}
      Liked by:{post.likes}
      Frenzy:{post.frenzy}
      Comments:{post.comments}
      Tags:{post.tags}
      Reference:{post.referenceId} 
    </Card.Text>
  </Card.Body>
</Card>
        </li>
    )
}
export default PostItem;
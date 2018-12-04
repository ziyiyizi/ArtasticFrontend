import React from 'react';
import {getFormatDate} from "./utils/date";
import {Card}from 'react-bootstrap';

function PostItem(props){
    const {post}=props;
    return(
        <li className="postItem">
        <Card >
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Text>
      artistId:{post.artistId}

    </Card.Text>
  </Card.Body>
</Card>
        </li>
    )
}
export default PostItem;
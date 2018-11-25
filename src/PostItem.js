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
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
        </li>
    )
}
export default PostItem;
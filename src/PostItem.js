import React from 'react';
import {getFormatDate} from "./utils/date";
import {Card}from 'react-bootstrap';

function PostItem(props){
    const {post}=props;
    var likelist=null;
    for (var x of post.likes) {likelist+=x[0] + '=' + x[1];}
    console.log(post);
    return(
      <div>
      <br/>
        <Card >
  <Card.Img variant="top" src={post.fileURL} />
  <Card.Body>
    <Card.Text>
      artistId:{post.artistId}
      artistName:{post.artistName}
      ArtsName:{post.artworkName}
      ArtsId:{post.artworkId}
      Date:{post.date}
      Liked by:{likelist}
      Frenzy:{post.frenzy}
      Tags:{post.tags}
      Description:{post.description}
    </Card.Text>
  </Card.Body>
</Card>
</div>
    )
}
export default PostItem;
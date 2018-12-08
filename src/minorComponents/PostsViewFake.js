import React, { Component } from 'react';

import PostItem from "./PostItem";
import {Container} from 'react-bootstrap';

class PostsViewFake extends Component {

  render() {
      var a=new Map();
      a["userName"]="jack";
      a["liketime"]="2008";
      a["userIcon"]=""

    const item={
      artistId:'114514',
      artistName:'Dark Flame Master',
      artworkName:'放逐这个世界！',
      artworkId:'123',
      date:'18-12-13',
      likes:[a
      
      ],
      fileURL:'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2509241433.jpg',
          
      frenzy:'100,000',
      tags:[{key:'c,d',label:'tag1'},{key:'e,f',label:'tag2'}],
      description:'我的中二病犯了，又画了一幅麒麟臂发作的画，我真是一个写实主义大艺术家。（扼腕浩叹）'
    }

    return (
      <Container><span>这是个假的帖子</span>
        <br/>
        {
            <PostItem post={item} />

        }
      </Container>
    );
  }
}

export default PostsViewFake;
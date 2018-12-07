import React, { Component } from 'react';

import PostItem from "./PostItem";
import {Container} from 'react-bootstrap';

class PostsViewFake extends Component {

  render() {
      var a=new Map();
      a["user"]="jack";
      a["time"]="2008";

    const item={
      artistId:'114514',
      artistName:'Dark Flame Master',
      artworkName:'放逐这个世界！',
      artworkId:'123',
      date:'18-12-13',
      likes:[a
      
      ],
      fileURL:'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/PicArtastic/test/559cf33e-b42b-49fb-8124-fc70934348e5.jpg?Expires=1544196393&OSSAccessKeyId=TMP.AQG_zmppWZRXDxTPfGqTziDWQpNDj40E5zH2kuD8hasZIwTHBTlPJr5pVZyHAAAwLAIVAPe2Zx0GNw_5JKSvaJGFN0WO_y-VAhNq1mrakwJR1Rze_06prE7mTNZO&Signature=JQjxy194IJUNIi8ZXrlm5o6b8Cw%3D',
          
      frenzy:'100,000',
      tags:'a,b,c,d',
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
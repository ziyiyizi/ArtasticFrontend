import React, { Component } from "react";
import PostsView from "./Postsview";
import {Col, Row} from 'react-bootstrap';
import { get, post, getData } from "../utils/request";
import url from "../utils/url";
import PostsViewFake from "./PostsViewFake";


class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        present:window.location.pathname.substr(7),
        posts: [],
        postcol:[[],[],[],[]],

    };
    console.log(this.state.present);
//    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleNewPost = this.handleNewPost.bind(this);
    this.refreshSearchList = this.refreshSearchList.bind(this);
  }

  componentDidMount() {
    this.refreshSearchList();
  }
  
  // 获取帖子列表
  refreshSearchList() {
    // 调用后台API获取列表数据，并将返回的数据设置到state中

    getData('/getsearch',this.state.present).then(data => {
      if (!data.error) {
        this.setState({
            posts: data.posts,
            postcol:[[],[],[],[]],
        });
        var x=0;
        for(let single in data.posts){
            console.log(single);
            this.state.postcol[x].concat([single]);
            x++;
            if(x==4)x-=4;
        }
      }
    });
  }
  
  // 保存帖子
  handleSave(data) {
    // 当前登录用户的信息和默认的点赞数，同帖子的标题和内容，共同构成最终待保存的帖子对象
    const postData = { ...data, author: this.props.userId, vote: 0 };
    post(url.createPost(), postData).then(data => {
      if (!data.error) {
        // 保存成功后，刷新帖子列表
        this.refreshSearchList();
      }
    });
  }
  
  // 取消新建帖子
  // handleCancel() {
  //   this.setState({

  //   });
  // }
  
  // 新建帖子
  handleNewPost() {
    this.setState({
      newPost: true
    });
  }

  render() {
    return (
      <div className="SearchList">
      {this.state.present.match('tag/')?<Row>
          <span>current tag:{this.state.present.substr(5)}</span>
      </Row>:<div/>}
      <Row>
        <Col>
        

        <PostsView posts={this.state.postcol[0]} />
        <PostsViewFake></PostsViewFake>
        </Col>
        <Col>
        

        <PostsView posts={this.state.postcol[1]} />
        <PostsViewFake></PostsViewFake>
        </Col>
        <Col>
        

        <PostsView posts={this.state.postcol[2]} />
        <PostsViewFake></PostsViewFake>
        </Col>
        <Col>
        

        <PostsView posts={this.state.postcol[3]} />
        <PostsViewFake></PostsViewFake>
        </Col></Row>
      </div>
    );
  }
}

export default SearchList;
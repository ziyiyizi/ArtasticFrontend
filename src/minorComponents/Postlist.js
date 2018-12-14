import React, { Component } from "react";
import PostsView from "./Postsview";
//import PostEditor from "./PostEditor";
import { get, post, getPosts,getPostsWithPage } from "../utils/request";
import url from "../utils/url";
import PostsViewFake from "./PostsViewFake";
import {Button, ButtonToolbar, Card}from 'react-bootstrap'
import CustomFabs from './CustomFabs';
import MoreIcon from '@material-ui/icons/Loop'
//import "./PostList.css";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      present:this.props.contentType,
      posts: [],
      pagenum:0,
    };
//    console.log(this.state.present);
//    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleNewPost = this.handleNewPost.bind(this);
    this.refreshPostList = this.refreshPostList.bind(this);
    this.loadMorePostList=this.loadMorePostList.bind(this);
  }

  componentDidMount() {
    this.refreshPostList();
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      present:nextProps.contentType,
    });
    this.refreshPostList();
  }
  
  // 获取帖子列表
  refreshPostList() {
    // 调用后台API获取列表数据，并将返回的数据设置到state中
    getPostsWithPage(this.state.present, 0).then(data => {
      if (!data.error) {
        this.setState({
          posts: data.posts,
          pagenum:1,
        });
      }
    });
  }

  loadMorePostList() {
    getPostsWithPage(this.state.present, this.state.pagenum).then(data => {
      if (!data.error) {
        this.setState({
          posts: this.state.posts.concat(data.posts),
          pagenum:this.state.pagenum+1,
        });
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
        this.refreshPostList();
      }
    });
  }
  

  handleNewPost() {
    this.setState({
      newPost: true
    });
  }

  render() {
    return (
      <div className="postList" style={{ width: '42rem' }}>

        {/* PostsView显示帖子的列表数据 */}
        <PostsView posts={this.state.posts} />
        {/* <PostsViewFake></PostsViewFake> */}

        <br/>
        <ButtonToolbar className="justify-content-md-center">
        <div onClick={this.loadMorePostList}><CustomFabs lit={false} displayText={<MoreIcon fontSize="large"/>}>Popular</CustomFabs></div>
        </ButtonToolbar>
       <hr></hr>
      </div>
    );
  }
}

export default PostList;
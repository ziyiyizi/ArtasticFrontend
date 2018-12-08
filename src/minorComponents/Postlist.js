import React, { Component } from "react";
import PostsView from "./Postsview";
//import PostEditor from "./PostEditor";
import { get, post, getPosts } from "../utils/request";
import url from "../utils/url";
import PostsViewFake from "./PostsViewFake";
//import "./PostList.css";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      present:this.props.contentType,
      posts: [],

    };
    console.log(this.state.present);
//    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleNewPost = this.handleNewPost.bind(this);
    this.refreshPostList = this.refreshPostList.bind(this);
  }

  componentDidMount() {
    this.refreshPostList();
  }
  
  // 获取帖子列表
  refreshPostList() {
    // 调用后台API获取列表数据，并将返回的数据设置到state中

    getPosts(this.state.present).then(data => {
      if (!data.error) {
        console.log("我已经获取了图片列表。data:"+data.posts);
        this.setState({
          posts: data.posts,
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
      <div className="postList" style={{ width: '42rem' }}>

        {/* PostsView显示帖子的列表数据 */}
        <PostsView posts={this.state.posts} />
        <PostsViewFake></PostsViewFake>
      </div>
    );
  }
}

export default PostList;
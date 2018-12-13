import React, { Component } from "react";
import PostsView from "./Postsview";
import {Col, Row} from 'react-bootstrap';
import { get, post, getData } from "../utils/request";
import url from "../utils/url";
import PostsViewFake from "./PostsViewFake";
import {Button} from 'reactstrap'
import PostItem from "./PostItem";
import WorkItem from "./WorkItem";

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        present:window.location.pathname.substr(7),
        posts: [],
        assessmode: false,
        postcol1:[],
        postcol2:[],
        postcol3:[],
        postcol4:[],
    };
    if(window.location.pathname.match('/lab/workreview')){this.state.present='/member/'+sessionStorage.getItem('username')}
    //console.log(this.state.present);
//    this.handleCancel = this.handleCancel.bind(this);
    if(props.assessmode!==undefined)this.state.assessmode=props.assessmode;
    this.handleSave = this.handleSave.bind(this);
    this.handleNewPost = this.handleNewPost.bind(this);
    this.refreshSearchList = this.refreshSearchList.bind(this);
  }

  componentDidMount() {
    this.refreshSearchList();
  }
  
  componentWillReceiveProps(nextProps){
    if(nextProps.assessmode!==undefined)this.setState({
      assessmode:nextProps.assessmode,
    });
    if(window.location.pathname.match('/lab/workreview')){this.setState({present:'/member'+sessionStorage.getItem('username')})}
  }
  // 获取帖子列表
  refreshSearchList() {
    // 调用后台API获取列表数据，并将返回的数据设置到state中

    getData('/getsearch',this.state.present).then(data => {
      if (!data.error) {
        this.setState({
            posts: data.posts,
            postcol1:[],
            postcol2:[],
            postcol3:[],
            postcol4:[],
        });
        var x=0;
        if (!this.state.assessmode){
        for(let single in data.posts){
          switch(x){
            case 0:
            this.setState({
            postcol1:this.state.postcol1.concat(<div><PostItem post={data.posts[single]}/><br/></div>)});
            break;
            case 1:
            this.setState({
            postcol2:this.state.postcol2.concat(<div><PostItem post={data.posts[single]}/><br/></div>)});
            break;
            case 2:
            this.setState({
            postcol3:this.state.postcol3.concat(<div><PostItem post={data.posts[single]}/><br/></div>)});
            break;
            case 3:
            this.setState({
            postcol4:this.state.postcol4.concat(<div><PostItem post={data.posts[single]}/><br/></div>)});
            break;
           }
            x++;
            if(x==4)x-=4;
        }
      }
      else {
        for(let single in data.posts){
          switch(x){
            case 0:
            this.setState({
            postcol1:this.state.postcol1.concat(<div><WorkItem post={data.posts[single]}/><br/></div>)});
            break;
            case 1:
            this.setState({
            postcol2:this.state.postcol2.concat(<div><WorkItem post={data.posts[single]}/><br/></div>)});
            break;
            case 2:
            this.setState({
            postcol3:this.state.postcol3.concat(<div><WorkItem post={data.posts[single]}/><br/></div>)});
            break;
            case 3:
            this.setState({
            postcol4:this.state.postcol4.concat(<div><WorkItem post={data.posts[single]}/><br/></div>)});
            break;
           }
            x++;
            if(x==4)x-=4;
        }
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

        {this.state.postcol1}

        </Col>
        <Col>
        

        {this.state.postcol2}

        </Col>
        <Col>
        
        {this.state.postcol3}

        </Col>
        <Col>
        
        {this.state.postcol4}

        </Col></Row>
      </div>
    );
  }
}

export default SearchList;
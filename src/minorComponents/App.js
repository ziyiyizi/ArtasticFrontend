import React, { Component } from 'react';
import { Form, FormControl,Button,Alert,Row,FormGroup,ListGroup, ListGroupItem,ButtonGroup,ProgressBar} from 'react-bootstrap'
import {Card}from 'reactstrap'
import {post}from '../utils/request'
import '../pics/bootstrap.min.css'
import Book from '../pics/book.svg'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "jack",
      redirectToReferrer: false,   // 是否重定向到之前的页面
      show:false,
      remember:true,
      timer:null,
      timernum:0,
      movielist:<ListGroup>
      <ListGroupItem>搜索结果</ListGroupItem>
      </ListGroup>,
      hideprogress:true,
      movienum:<div/>,
      key:'title'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSwitch=this.handleSwitch.bind(this);
    this.handleSelect=this.handleSelect.bind(this)
  }

  handleSwitch=()=>{
    this.setState({remember:!this.state.remember})
  }


  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  // 处理用户名、密码的变化
  handleChange(e) {
    if (e.target.type === "email") {
      this.setState({
        username: e.target.value
      });
      console.log(this.state.username)
    } 
  }

  handleSelect(e){
    this.setState({key:e.target.id})
    console.log(this.state.key)
  }
  // 提交登录表单
  handleSubmit(e) {
    this.state.timernum=0;
    if(this.state.timer==null)this.state.timer=setInterval(()=>{

      if(this.state.timernum<90)this.setState({timernum:this.state.timernum+1})
      console.log(this.state.timernum)
      }, 1000)

    e.preventDefault();

    const key=this.state.key;
    const value=this.state.username;
    if (value.length === 0 ) {
      alert("不能为空！");
      return;
    }
    const params = {
      key,value
    };
    this.setState({hideprogress:false})
    post('/searchmovie', params).then(data => {
      if (data.error) {
        alert(data.error.message || " failed");
      } else {
        console.log(data.movielist)
        this.setState({movienum:<ListGroupItem>
          {'执行结果：'}
          </ListGroupItem>,
          hideprogress:true,

          movielist:<ListGroup>
          {data.movielist.map(single=>(<ListGroupItem>{single}</ListGroupItem>))}
          </ListGroup>})
      }
    });

  }

  componentWillUnmount(){
    if(this.state.timer!= null) {

      clearInterval(this.state.timer);
      
      }
  }
  render() {
    return (
      <div className="App">
  <Alert key='1' variant='dark'>
    电影数据仓库
  </Alert>
  <Row className="justify-content-md-center">    
  <Card style={{width:'30rem'}}>

  <br/>

  <Row className="justify-content-md-center">
<img src={Book} style={{width:'100px',height:'100px'}}/>
</Row>  
<br/>
<Row className="justify-content-md-center">  
  <Form>
  <FormGroup controlId="formBasicEmail">
    <span className="text-muted">
      输入你所想要查找的电影的关键字
    </span>
    <br/>
    <br/>

    <FormControl type="email" placeholder="Enter search" onChange={this.handleChange}/>

  </FormGroup>


</Form>

  </Row>
  <br/>
  <Row  className="justify-content-md-center">
  <ButtonGroup>
  <Button variant="grey"  id='title' onClick={this.handleSelect}>
    条目
  </Button>
  <Button variant="grey"  id='year' onClick={this.handleSelect}>
    年份
  </Button>
  <Button variant="grey"  id='type' onClick={this.handleSelect}>
    类型
  </Button>  
  <Button variant="outline-warning"  id='director' onClick={this.handleSelect}>
    导演
  </Button>
  <Button variant="outline-warning"  id='actor' onClick={this.handleSelect}>
    演员
    </Button>
  </ButtonGroup>
  </Row> 
  <br/>
  <Row   className="justify-content-md-center"> 
    <Button variant="primary" type="submit" id='type' onClick={this.handleSubmit}>
    搜索
  </Button>

  </Row>
  <br/>
  </Card></Row>
  <br/>
  <Row  className="justify-content-md-center">
  <div style={{width:'30rem'}}>
  <ListGroupItem hidden={this.state.hideprogress}>正在使用MapReduce计算总数</ListGroupItem>
  <ListGroupItem hidden={this.state.hideprogress}><ProgressBar animated={true} now={this.state.timernum} /></ListGroupItem>
  <ListGroupItem hidden={!this.state.hideprogress}>搜索结果:</ListGroupItem>
  {this.state.movienum}
{this.state.movielist}</div></Row>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import { post } from "./utils/request";
import url from "./utils/url";
import { Button, Form, Badge} from 'react-bootstrap';
import {Modal ,  ModalHeader, ModalBody, ModalFooter}from 'reactstrap';
import Switches from './minorComponents/switch';
//import {Dialog as Modal}from 'material-ui';
//import './bootstrap.min.css';

//import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "jack",
      password: "123456",
      redirectToReferrer: false,   // 是否重定向到之前的页面
      show:false,
      remember:true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSwitch=this.handleSwitch.bind(this);
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
    } else if (e.target.type === "password") {
      this.setState({
        password: e.target.value
      });
    } else {
      // do nothing
    }
  }

  // 提交登录表单
  handleSubmit(e) {
    e.preventDefault();

    const username = this.state.username;
    const password = this.state.password;
    const remember = this.state.remember;
    if (username.length === 0 || password.length === 0) {
      alert("用户名或密码不能为空！");
      return;
    }
    const params = {
      username,
      password,
      remember
    };
    post(url.login(), params).then(data => {
      if (data.error) {
        alert(data.error.message || "login failed");
      } else {
        // 保存登录信息到sessionStorage
        if(this.state.remember===false){

        
        sessionStorage.setItem("userId", data.userId);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("iconURL",data.iconURL);
      }else{

        localStorage.setItem("userId", data.userId);
        localStorage.setItem("username", username);
        localStorage.setItem("iconURL",data.iconURL);
        sessionStorage.setItem("userId", data.userId);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("iconURL",data.iconURL);
      }
        // 登录成功后，设置redirectToReferrer为true
        window.location.href='/community';
        
      }
    });
  }

  render() {
    // from 保存跳转到登录页前的页面路径，用于在登录成功后重定向到原来页面
     //const { from } = this.props.location.state || { from: { pathname: "/" } };
     const { redirectToReferrer } = this.state;
    // 登录成功后，redirectToReferrer为true，使用Redirect组件重定向页面
    // if (redirectToReferrer) {
    //   return <Redirect to={from} />;
    // }
    return (
<span>
        <Button variant="primary" onClick={this.handleShow}>
          Log in
        </Button>
      <Modal isOpen={this.state.show} toggle={this.handleClose} className={this.props.className}>
          <ModalHeader>
            Login
          </ModalHeader>
          <ModalBody>
            <form className="login" onSubmit={this.handleSubmit}>
          

        <div>

  <Form.Group>
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={this.state.username} size="sm"
              onChange={this.handleChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>

    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter password" value={this.state.password} 
        size="sm" onChange={this.handleChange}/>
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>

        </div>

      </form>
      <span><span onClick={this.handleSwitch}><Switches /></span><Badge>Keep me hooked up.</Badge></span>
               </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Log in
            </Button>
          </ModalFooter>
        </Modal>
        </span>
    );
  }
}

export default Login;



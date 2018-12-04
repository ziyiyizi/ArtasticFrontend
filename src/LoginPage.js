import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import { post } from "./utils/request";
import url from "./utils/url";
import {Modal, Button, Form} from 'react-bootstrap';
import './bootstrap.min.css';

//import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "jack",
      password: "123456",
      redirectToReferrer: false,   // 是否重定向到之前的页面
      show:false,

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  

  

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  // 处理用户名、密码的变化
  handleChange(e) {
    if (e.target.id === "username") {
      this.setState({
        username: e.target.value
      });
    } else if (e.target.id === "password") {
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
    if (username.length === 0 || password.length === 0) {
      alert("用户名或密码不能为空！");
      return;
    }
    const params = {
      username,
      password
    };
    post(url.login(), params).then(data => {
      if (data.error) {
        alert(data.error.message || "login failed");
      } else {
        // 保存登录信息到sessionStorage
        sessionStorage.setItem("userId", data.userId);
        sessionStorage.setItem("username", username);
        // 登录成功后，设置redirectToReferrer为true
        this.setState({
          redirectToReferrer: true
        });
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
      <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body><form className="login" onSubmit={this.handleSubmit}>
          

        <div>

  <Form.Group>
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={this.state.username} id="username"
              onChange={this.handleChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>

    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter password" value={this.state.password} id="password" onChange={this.handleChange}/>
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>

        </div>

      </form>
               </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Log in
            </Button>
          </Modal.Footer>
        </Modal>


        </span>




    );
  }
}

export default Login;



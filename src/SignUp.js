import React, { Component } from "react";
import { post } from "./utils/request";
import url from "./utils/url";
import { Button, Form} from 'react-bootstrap';
import {Modal ,  ModalHeader, ModalBody, ModalFooter}from 'reactstrap';
import {Radio} from 'antd';

const RadioGroup = Radio.Group;
//用户名和密码只能包含字母（不分大小写）和数字
const namePattern='^[0-9a-zA-Z]+$';

class SignUp extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      username: "jack",
      password: "123456",
      confirmpassword:"123456",
      sexValue:'male',
      redirectToReferrer: false,   // 是否重定向到之前的页面
      show:false,
      email:'',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.radioChange=this.radioChange.bind(this);
  }

  

  

  handleClose() 
  {
    this.setState({ show: false });
  }

  handleShow() 
  {
    this.setState({ show: true });
  }

  // 处理用户名、密码的变化
  handleChange(e) 
  {
    if (e.target.id === "username") 
    {
      this.setState({
        username: e.target.value
      });
    } 
    else if (e.target.id === "password") 
    {
      this.setState({
        password: e.target.value
      });
    } 
    else if (e.target.id === "confirmpassword")
    {
        this.setState({confirmpassword:e.target.value})
    }
    else if (e.target.id === "email")
    {
        this.setState({email:e.target.value})
    }
      // do nothing
  }
 
  radioChange(e)
  {
    this.setState({sexValue: e.target.value});
    console.log(e.target.value)
  }
  // 提交登录表单
  handleSubmit(e) 
  {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const confirm = this.state.confirmpassword;
    const sex = this.state.sexValue;
    const email=this.state.email;

    if (username.length === 0 || password.length === 0) 
    {
      alert("用户名或密码不能为空！");
      return;
    }
    else if(!this.ConfirmData(username) || !this.ConfirmData(password))
    {
      return;
    }

    else if(!(password === confirm))
    {
        alert("Please input same password!");
        return;
    }
    const params = 
    {
      username,
      password,
      sex,
      email,
    };
    post('/signup', params).then(data => 
    {
      if (data.error) 
      {
        alert(data.error.message || "login failed");
      } 
      else 
      {
        // 保存登录信息到sessionStorage
        sessionStorage.setItem("userId", data.userId);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("iconURL",data.iconURL);
        window.location.href='/community';
      }
    });
  }

  //判断用户名和密码的输入是否合范
  ConfirmData(string)
  {
    var regex = new RegExp(namePattern);
    if(string.length > 20)
    {
      alert("Control the length of your username and password into 20 characters!");
      return false;
    }
    else if(string.match(regex))
    {
      return true;
    }
    else
    {
      alert("Invalid Character!");
      return false;
    }
  }

  render() 
  {
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
          Sign Up
        </Button>
      <Modal isOpen={this.state.show} toggle={this.handleClose} className={this.props.className}>
          <ModalHeader>
            Sign Up
          </ModalHeader>
          <ModalBody>
            <form className="SignUp" onSubmit={this.handleSubmit}>
        
        <div>

  <Form.Group>
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" id="username" placeholder="Enter username" value={this.state.username} size="sm"
              onChange={this.handleChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>

    <Form.Label>Email</Form.Label>
    <Form.Control type="email" id="email" placeholder="Enter email" value={this.state.email} size="sm"
              onChange={this.handleChange}/>


    <Form.Label>Password</Form.Label>
    <Form.Control type="password" id="password" placeholder="Enter password" value={this.state.password} 
        size="sm" onChange={this.handleChange}/>
    <Form.Text className="text-muted">
    </Form.Text>
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" id="confirmpassword" value={this.state.confirmpassword}
        size="sm" onChange={this.handleChange}/>
    <Form.Text className="text-muted"></Form.Text>
    <Form.Label>Gender</Form.Label>
      <div>
        <RadioGroup value={this.state.sexValue} onChange={(dom)=>this.radioChange(dom)} style={{marginLeft:'8rem'}}>
          <Radio value="male" >Male</Radio>
          <Radio value="female" style={{marginLeft:"6rem"}}>Female</Radio>
        </RadioGroup>
     </div>
  </Form.Group>
        </div>
      </form>
               </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              SignUp
            </Button>
          </ModalFooter>
        </Modal>
        </span>
    );
  }
}

export default SignUp;



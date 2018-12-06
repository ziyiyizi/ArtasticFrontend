import React, {Component}from 'react';
import FloatingActionButtons from './FloatingButton';
import { post } from "./utils/request";
import url from "./utils/url";
import {Modal, Button, Form, Container} from 'react-bootstrap';
import FloatingButton from './FloatingButton';
import UploadImage from './ImageUploadMod';

class PublishPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
          username: "jack",
          password: "123456",
          redirectToReferrer: false,   // 是否重定向到之前的页面
          show:false,
    
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
      }
    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
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
            <Container onClick={this.handleShow}><FloatingButton /></Container>

          <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
              <Modal.Title>Submit your Artwork!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
            <div>
 
    <UploadImage id="uploadImage"/>
            </div>

                   </Modal.Body>
            </Modal>
            </span>
        );
      }
}
export default PublishPage;
import React from 'react';
import ImageUploader from 'react-images-upload';
//import axios from 'axios';
import {Button,Form,Card,ButtonToolbar,Row,Col}from 'react-bootstrap';
import { postPic } from "./utils/request";
import { post } from "./utils/request";
import url from "./utils/url";

class UploadImage extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          username: "jack",
          password: "123456",
          redirectToReferrer: false,   // 是否重定向到之前的页面
          show:false,
            pictures: []
        };


        this.onDrop = this.onDrop.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
      }

	onDrop(picture) {
		this.setState({
            pictures: this.state.pictures.concat(picture),
        });
 
    }
    
    onSubmit(){
        if (this.state.pictures.length > 0) {
             let index = this.state.pictures.length - 1; 
             //console.log("现在的图片编号是："+index);
             let formData = new FormData(); formData.append('file', this.state.pictures[index]); postPic('/upload/test', formData) .then(res => { /*this.setState({ images: this.state.images.concat('/images/main/' + pictures[index].name), });*/
             }) .catch(err => console.log(err));
             }
             else{
                 console.log("没有图片可以上传。");
             }
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



      handleArtsSubmit(e){
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
    

    // handleSubmit(e) {
    //     e.preventDefault();
    //     //const username = this.state.username;
    //     //const password = this.state.password;
    //     const params = {
    //       username,
    //       password
    //     };
    //   }
    

    render() {
        return (
            <Card>
        <Card.Body>


            <ImageUploader
                withIcon={true}
                singleImage={true}
                withPreview={true}
				buttonText='Choose images'
				onChange={this.onDrop}
				imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}>                
                </ImageUploader>


               <Form.Group as={Row}>
    <Form.Label column sm="4" size="sm">
      Name the Work
    </Form.Label>
    <Col sm="8">
      <Form.Control type="email" placeholder="" onChange={this.handleChange} />
    </Col>
  </Form.Group>
        <Form.Group>
        <Form.Control  as="textarea" rows="3" type="description" placeholder="Feel free to put your Description here." value={this.state.description} onChange={this.handleChange} size="sm"/>
      </Form.Group>
      <Form.Group as={Row}>

      <Col>
        <Form.Check
          type="radio"
          label="Fan art"
          name="Fan art"
          id="Fan art"
        />
        <Form.Check
          type="radio"
          label="Original"
          name="Original"
          id="Original"
          onSelect
        />

      </Col>
    </Form.Group>
             </Card.Body>
             <ButtonToolbar  className="justify-content-md-center">
          <Button variant="primary" onClick={this.onSubmit}>Submit</Button>
</ButtonToolbar>
      </Card>
        );
    }
}

export default UploadImage;
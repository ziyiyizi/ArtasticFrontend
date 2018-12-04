import React from 'react';
import ImageUploader from 'react-images-upload';
//import axios from 'axios';
import {Button,Card, Form}from 'react-bootstrap';
import { postPic } from "./utils/request";
class UploadImage extends React.Component {

	constructor(props) {
		super(props);
         this.state = { 
            pictures: [] ,
            artsname:null,
            description:null
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
             console.log("现在的图片编号是："+index);
             let userId=sessionStorage.getItem('userId');
             let formData = new FormData(); formData.append('file', this.state.pictures[index]); postPic('/upload/test', formData).then(res => { /*this.setState({ images: this.state.images.concat('/images/main/' + pictures[index].name), });*/
             }).catch(err => console.log(err));
             }
             else{
                 console.log("没有图片可以上传。");
             }
    }

    handleChange(e) {
        if (e.target.id === "artsname") {
          this.setState({
            artsname: e.target.value
          });
        } else if (e.target.id === "description") {
          this.setState({
            description: e.target.value
          });
        } else {
          // do nothing
        }
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
            <Card style={{ width: '38rem' }}>
        <Card.Body>
          <Card.Title>Submit your Artwork!</Card.Title>
          <Card.Text>
          </Card.Text>
          <Form.Group>
    <Form.Label>Arts name</Form.Label>
    <Form.Control type="text" id="artsname"  onChange={this.handleChange}/>
    <Form.Text className="text-muted">
      A good name leads to a good fame.
    </Form.Text>

    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows="3" id="description"  onChange={this.handleChange}/>
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>
            <ImageUploader
                withIcon={true}
                singleImage={true}
                withPreview={true}
				buttonText='Choose images'
				onChange={this.onDrop}
				imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                ></ImageUploader>



  <Button variant="secondary" >Cancel</Button>
  <Button variant="primary" onClick={this.onSubmit}>Submit</Button>
        </Card.Body>
      </Card>
        );
    }
}

export default UploadImage;
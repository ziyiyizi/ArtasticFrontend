import React from 'react';
import ImageUploader from 'react-images-upload';
//import axios from 'axios';
import {Button,ButtonToolbar,Card}from 'react-bootstrap';
import { postPic } from "./utils/request";
class UploadImage extends React.Component {

	constructor(props) {
		super(props);
		 this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
         this.onSubmit=this.onSubmit.bind(this);
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
             let formData = new FormData(); formData.append('file', this.state.pictures[index]); postPic('/upload/test', formData) .then(res => { /*this.setState({ images: this.state.images.concat('/images/main/' + pictures[index].name), });*/
             }) .catch(err => console.log(err));
             }
             else{
                 console.log("没有图片可以上传。");
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
            <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Submit your Artwork!</Card.Title>
          <Card.Text>

          </Card.Text>

            <ImageUploader
                withIcon={true}
                singleImage={true}
                withPreview={true}
				buttonText='Choose images'
				onChange={this.onDrop}
				imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                >                </ImageUploader>
          <Button variant="secondary" style={{margin:'auto'}}>Cancel</Button>
          <Button variant="primary" style={{margin:'auto'}} onClick={this.onSubmit}>Submit</Button>
        </Card.Body>
      </Card>
        );
    }
}

export default UploadImage;
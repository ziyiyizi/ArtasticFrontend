import React from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import {Button,ButtonToolbar}from 'react-bootstrap';
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
             let formData = new FormData(); formData.append('file', this.state.pictures[index], this.state.pictures[index].name); axios .post('/img/main', formData) .then(res => { /*this.setState({ images: this.state.images.concat('/images/main/' + pictures[index].name), });*/
             }) .catch(err => console.log(err));
             }
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                singleImage={true}
                withPreview={true}
				buttonText='Choose images'
				onChange={this.onDrop}
				imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                >                </ImageUploader>

        );
    }
}

export default UploadImage;
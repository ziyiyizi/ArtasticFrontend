import React from 'react';
import ImageUploader from 'react-images-upload';

class UploadImage extends React.Component {

	constructor(props) {
		super(props);
		 this.state = { pictures: [] };
		 this.onDrop = this.onDrop.bind(this);
	}

	onDrop(picture) {
		this.setState({
            pictures: this.state.pictures.concat(picture),
        });
 //       if (pictureFiles.length > 0) { let index = pictureFiles.length - 1; let formData = new FormData(); formData.append('file', pictureFiles[index], pictureFiles[index].name); axios .post('/img/main', formData) .then(res => { this.setState({ images: this.state.images.concat('/images/main/' + pictureFiles[index].name), }); }) .catch(err => console.log(err)); }
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
                ></ImageUploader>
        );
    }
}

export default UploadImage;
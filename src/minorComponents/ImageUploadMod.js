import React from 'react';
import ImageUploader from 'react-images-upload';
//import axios from 'axios';
import {Form,Card,ButtonToolbar,Row,Col,Badge,ProgressBar, Button as Oldbutton}from 'react-bootstrap';
import { postPic, getData } from "../utils/request";
//import ProgressBar from './ProgressBar'
import Switches from './switch';
import TagsInput from 'react-tagsinput'
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated';
import 'react-tagsinput/react-tagsinput.css'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TagChips from './TagChips'

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
class UploadImage extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          username: "jack",
          password: "123456",
          redirectToReferrer: false,   // 是否重定向到之前的页面
          show:false,
          pictures: [],
          title:"",
          description:"",
          isOriginal:true,
          tags:[],
          options: [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ],
          folders:[],
          dialogOpen:false,
          hideprogress:true,
          timernum:0,
          timer:null,
          tagrecommend:<div/>
        };


        this.onDrop = this.onDrop.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSwitch=this.handleSwitch.bind(this);
        this.handleTagChange=this.handleTagChange.bind(this);
        this.handleSelectChage=this.handleSelectChage.bind(this);
        this.handleDialogClose=this.handleDialogClose.bind(this);
        this.handleDialogOpen=this.handleDialogOpen.bind(this);

      }



    
      handleDialogOpen(){
        this.setState({ dialogOpen: true });
      };
    
      handleDialogClose(){
        this.setState({ dialogOpen: false });
      };

	onDrop(picture) {
		this.setState({
            pictures: this.state.pictures.concat(picture),
        });
 
    }

    handleTagChange(tags) {
      this.setState({tags:tags});
      console.log(tags[tags.length-1])
      getData('/getrecommendtags',tags[tags.length-1]).then(data=>{
        if(!data.error){
          this.setState({tagrecommend:<div><span>Guess you like: </span>
          <Oldbutton size='sm' variant='outline-info' onClick={()=>{this.setState({tags:tags.concat(data.value)})}}>{data.value}</Oldbutton></div>})
        }
      }

      )
 
    }
    
    onSubmit(){

        if (this.state.pictures.length > 0) {
          this.state.hideprogress=false;
          if(this.state.timer==null)this.state.timer=setInterval(()=>{
            if(this.state.timernum<90)this.setState({timernum:this.state.timernum+1})
            }, 100)
             let index = this.state.pictures.length - 1; 
             //console.log("现在的图片编号是："+index);
             let formData = new FormData(); formData.append('file', this.state.pictures[index]);
             formData.append("isOriginal",this.state.isOriginal);
             formData.append("folders",this.state.folders);
             formData.append("tags",this.state.tags);
             formData.append("title",this.state.title);
             formData.append("description",this.state.description);

              postPic('/upload/test', formData) .then(this.state.hideprogress=false,alert('上传成功')
             ).catch(err => console.log(err));
             }
             else{
                 this.handleDialogOpen();
             }
    }

        // 处理用户名、密码的变化
        handleChange(e) {
            if (e.target.id === "title") {
              this.setState({
                title: e.target.value
              });
              console.log("now the title is: "+this.state.title);
            } else if (e.target.id === "description") {
              this.setState({
                description: e.target.value
              });
              console.log("now the description is: "+this.state.description );
            } 
          }
        
          // 提交登录表单

    
      handleSelectChage(folder){
        let folderlist="";

        folderlist+=folder['value'];

        this.state.folders=folderlist
        console.log(this.state.folders)
      }

      handleSwitch(){
        this.state.isOriginal=!this.state.isOriginal;
        console.log(this.state.isOriginal);
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
    <Form.Label column sm="2" size="sm">
          <span>   Title</span>
    </Form.Label>
    <Col sm="10">
      <Form.Control id="title" placeholder="" onChange={this.handleChange} />
    </Col>
  </Form.Group>
        <Form.Group>
        <Form.Control  as="textarea" rows="3" id="description" 
        placeholder="Feel free to put your Description here." value={this.state.description} 
        onChange={this.handleChange} size="sm"/>
      </Form.Group>
      <TagsInput value={this.state.tags} onChange={this.handleTagChange} />
      {this.state.tagrecommend}
<br/>
<Select options={this.state.options} components={makeAnimated() }
closeMenuOnSelect={true} onChange={this.handleSelectChage}/>

<span><span onClick={this.handleSwitch}><Switches /></span><Badge>Original</Badge></span>




<div hidden={this.state.hideprogress}><ProgressBar animated={true} now={this.state.timernum} /></div>
             </Card.Body>
             <ButtonToolbar  className="justify-content-md-center">
          <Button variant="text" onClick={this.onSubmit}>Submit</Button>

</ButtonToolbar>
<Dialog
          open={this.state.dialogOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleDialogClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"No Pic?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Please make sure you've uploaded a picture first.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDialogClose} color="primary">
              OK
            </Button>
          </DialogActions>


        </Dialog>
      </Card>
        );
    }
}

export default UploadImage;
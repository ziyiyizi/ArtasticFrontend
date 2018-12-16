/*
 
*/
import React, { Component } from 'react';
import {Container,Row} from 'react-bootstrap';
import {Radio} from 'antd';
import {postPic, getData}from '../utils/request'
import ImageUploader from 'react-images-upload';
import {Button,ButtonToolbar}from 'react-bootstrap'

const RadioGroup = Radio.Group;
const namePattern='^[0-9a-zA-Z]+$';
const agePattern='^[0-9]+$';
const emailPattern = '^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$';
const cpnumberPattern = '^[1][3,4,5,7,8][0-9]{9}$'

class PersonalityForm extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            nameValue:'Jason',
            passwordValue:'pw123456',
            sexValue:"male",
            mailValue:'Artastic@gmail.com',
            descripValue:'Barren',  
            iconURL:'',  
            pictures: [],
        };
        this.onDrop = this.onDrop.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    componentDidMount(){
      getData('/getprofile',Date.now()).then(data=>{
        if(!data.error){
          this.setState({
            nameValue:data.userName,
            passwordValue:data.userPassword,
            sexValue:data.userSex,
            mailValue:data.userMail,
            descripValue:data.userDescription,
            iconURL:data.userIcon,
          })
        }
      }

      )
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
             let formData = new FormData(); formData.append('file', this.state.pictures[index]);
             formData.append("userName",this.state.nameValue);
             formData.append("userPassword",this.state.passwordValue);
             formData.append("userSex",this.state.sexValue);
             formData.append("userMail",this.state.mailValue);
             formData.append("userDescription",this.state.descripValue);

              postPic('/uploadprofile', formData) .then(data=>{if(!data.error){alert('change success')}else {alert('change failed')}}
             ) .catch(err => console.log(err));
             }
             else{
               let formData = new FormData();  
               formData.append("userName",this.state.nameValue);
             formData.append("userPassword",this.state.passwordValue);
             formData.append("userSex",this.state.sexValue);
             formData.append("userMail",this.state.mailValue);
             formData.append("userDescription",this.state.descripValue);
             formData.append('file', null)
              postPic('/uploadprofile', formData) .then(data=>{if(!data.error){alert('change success')}else {alert('change failed')}}
             ) .catch(err => console.log(err));
              
             }
    }


    edit(myButton)
    {
        var CorresButton = myButton.target;
        switch(myButton.target.id)
        {
            case "0":
            var CorresInput = document.getElementById("nameInput");
            if(CorresButton.innerHTML == "change")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "dark";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "Done";
            }
            else if(CorresButton.innerHTML == "Done")
            {
                if(CorresInput.value == "")
                {
                  alert("Please Input Your Name!");
                }
                else if(CorresInput.value.length > 20)
                {
                  alert("The length of your name must be no more than 20!")
                }
                else if(!this.ConfirmData(CorresInput.value,0))
                {
                  alert("Invalid Characters!")
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "dark";
                  CorresButton.innerHTML = "change";
                  CorresInput.readOnly = true;
                }
            }
            break;

            case "1":
            var CorresInput = document.getElementById("passwordInput");
            if(CorresButton.innerHTML == "change")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "dark";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "Done";
            }
            else if(CorresButton.innerHTML == "Done")
            {
                if(CorresInput.value == "")
                {
                  alert("Please Input Your Password!");
                }
                else if(CorresInput.value.length > 20)
                {
                  alert("The length of your password must be no more than 20!")
                }
                else if(!this.ConfirmData(CorresInput.value,1))
                {
                  alert("Invalid Characters!")
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "dark";
                  CorresButton.innerHTML = "change";
                  CorresInput.readOnly = true;
                }
            }
            break;



            case "4":
            var CorresInput = document.getElementById("mailInput");
            if(CorresButton.innerHTML == "change")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "dark";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "Done";
            }
            else if(CorresButton.innerHTML == "Done")
            {
                if(CorresInput.value == "")
                {
                  alert("Please Input Your Email Address!");
                }
                else if(!this.ConfirmData(CorresInput.value,4))
                {
                  alert("Invalid Email Address!");
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "dark";
                  CorresButton.innerHTML = "change";
                  CorresInput.readOnly = true;
                }
            }
            break;


            case "8":
            var CorresInput = document.getElementById("descripInput");
            if(CorresButton.innerHTML == "change")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "dark";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "Done";
            }
            else if(CorresButton.innerHTML == "Done")
            {
                if(CorresInput.value == "")
                {
                  alert("Please Input Your Description!");
                }
                else if(CorresInput.value.length > 100)
                {
                  alert("The length of your description string must be no more than 100!");
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "dark";
                  CorresButton.innerHTML = "change";
                  CorresInput.readOnly = true;
                }
            }
            break;
 
            default:
            break;           
        }
    }
    
    handleChange = (event) =>
    {
        switch(event.target.id)
        {
            case"nameInput":
            this.setState({nameValue:event.target.value});
            break;
            case"passwordInput":
            this.setState({passwordValue:event.target.value});
            break;
            case"ageInput":
            this.setState({ageValue:event.target.value});
            break;
            case"mailInput":
            this.setState({mailValue:event.target.value});
            break;
            case"cpnumberInput":
            this.setState({cpnumberValue:event.target.value});
            break;
            case"jobInput":
            this.setState({jobValue:event.target.value});
            break;
            case"addressInput":
            this.setState({addressValue:event.target.value});
            break;
            case"descripInput":
            this.setState({descripValue:event.target.value});
            break;
            default:
            break;
        }
        
    };

    onChange(e)
    {
      this.setState({sexValue:e.target.value});
    }

    ConfirmData(string,int)
    {
      
      var regex;
       switch(int)
       {
         case 0:
         regex = new RegExp(namePattern);
         if(string.match(regex))
         {
           return true;
         }
         else
         {
           return false;
         }

         case 1:
         regex = new RegExp(namePattern);
         if(string.match(regex))
         {
           return true;
         }
         else
         {
           return false;
         }

         case 2:
         regex = new RegExp(agePattern);
         if(string.match(regex))
         {
           return true;
         }
         else
         {
           return false;
         }

         case 4:
         regex = new RegExp(emailPattern);
         if(string.match('@'))
         {
           return true;
         }
         else
         {
           return false;
         }

         case 5:
         regex = new RegExp(cpnumberPattern);
         if(string.match(regex))
         {
           return true;
         }
         else
         {
           return false;
         }

         default:
         break;
       }
      
    };
    render() 
    {
    return (
      <Container style={{width:'49rem'}}>
        <br />
        <Row>
           <div class="list-group" style={{width:'38rem'}}>
             <a class="list-group-item">
               <div class="input-group" style={{width:'35rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Name:</span>
                 <input onChange={this.handleChange} value={this.state.nameValue} id="nameInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'20rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   {/* <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="0">change</button> */}
                 </span>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'35rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Password:</span>
                 <input onChange={this.handleChange} value={this.state.passwordValue} id="passwordInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'20rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="1">change</button>
                 </span>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'35rem'}}>
               <Container>
                 <Row><span class="label" id="basic-addon1" style={{width:'8rem'}}>Icon:<img src={sessionStorage.getItem('iconURL')} width='50px'></img></span><ImageUploader
                withIcon={true}
                singleImage={true}
                withPreview={true}
				buttonText='Choose images'
				onChange={this.onDrop}
				imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}>                
                </ImageUploader></Row>
                 </Container>
               </div>
             </a>
        
             <a class="list-group-item">
               <div style={{width:'35rem'}}>
               <Container>
                 <Row>
                 <span class="label" id="basic-addon1" style={{width:'8rem'}}>Gender:</span>
                 <RadioGroup value={this.state.sexValue} onChange={(dom)=>this.onChange(dom)} style={{marginLeft:'8rem'}}>
                    <Radio value="boy" >Boy</Radio>
                    <Radio value="girl" style={{marginLeft:"6rem"}}>Girl</Radio>
                 </RadioGroup></Row>
                 </Container>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'35rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Email:</span>
                 <input onChange={this.handleChange} value={this.state.mailValue} id="mailInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'20rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="4">change</button>
                 </span>
               </div>
             </a>

             <a class="list-group-item">
               <div class="input-group" style={{width:'35rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Description:</span>
                 <textarea onChange={this.handleChange} value={this.state.descripValue} id="descripInput" readonly="readonly" class="form-control" type="text" cols="20" rows="5" name="S1" aria-describedby="basic-addon1" style={{width:'20rem'}}></textarea>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="8">change</button>
                 </span>
               </div>             <ButtonToolbar  className="justify-content-md-center">
          <Button variant="text" onClick={this.onSubmit}>Submit</Button>

</ButtonToolbar>
             </a>

           </div>
        </Row>
      </Container>
    );
  }
}
export default PersonalityForm;
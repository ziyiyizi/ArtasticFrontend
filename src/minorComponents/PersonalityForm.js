/*
 
*/
import React, { Component } from 'react';
import {Container,Row} from 'react-bootstrap';
import {Radio} from 'antd';

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
            ageValue:'18',
            sexValue:"male",
            mailValue:'Artastic@gmail.com',
            cpnumberValue:'15920192023',
            addressValue:'No.23/Mapl eStreet/Long Beach/Los Angeles/California',
            jobValue:'College Student',
            descripValue:'Barren',            
        };
    }

    
    edit(myButton)
    {
        var CorresButton = myButton.target;
        switch(myButton.target.id)
        {
            case "0":
            var CorresInput = document.getElementById("nameInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
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
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                  CorresInput.readOnly = true;
                }
            }
            break;

            case "1":
            var CorresInput = document.getElementById("passwordInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
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
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                  CorresInput.readOnly = true;
                }
            }
            break;

            case "2":
            var CorresInput = document.getElementById("ageInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
            {
                if(CorresInput.value == "")
                {
                  alert("Please Input Your Age!");
                }
                else if(!this.ConfirmData(CorresInput.value,2))
                {
                  alert("Invalid Character!");
                }
                else if(parseInt(CorresInput.value) <= 0 || parseInt(CorresInput.value) >= 120)
                {
                  alert("Invalid Age!");
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                  CorresInput.readOnly = true;
                }
            }
            break;

            case "4":
            var CorresInput = document.getElementById("mailInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
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
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                  CorresInput.readOnly = true;
                }
            }
            break;

            case "5":
            var CorresInput = document.getElementById("cpnumberInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
            {
                if(CorresInput.value == "")
                {
                  alert("Please Input Your Cell Phone Number!");
                }
                else if(!this.ConfirmData(CorresInput.value,5))
                {
                  alert('Invalid Cell Phone Number!');
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                  CorresInput.readOnly = true;
                }
            }
            break;

            case "6":
            var CorresInput = document.getElementById("addressInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
            {
                if(CorresInput.value == "")
                {
                  alert("Please Input Your Address!");
                }
                else if(CorresInput.value.length > 40)
                {
                  alert("The length of your address string must be no more than 40!");
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                  CorresInput.readOnly = true;
                }
            }
            break;

            case "7":
            var CorresInput = document.getElementById("jobInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
            {
                if(CorresInput.value == "")
                {
                  alert("Please Input Your Job!");
                }
                else if(CorresInput.value.length > 20)
                {
                  alert("The length of your job string must be no more than 20!");
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                  CorresInput.readOnly = true;
                }
            }
            break;

            case "8":
            var CorresInput = document.getElementById("descripInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
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
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
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
         if(string.match(regex))
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
      <Container style={{width:'52rem'}}>
        <br />
        <Row>
           <div class="list-group" style={{width:'49rem'}}>
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Name:</span>
                 <input onChange={this.handleChange} value={this.state.nameValue} id="nameInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'30rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="0">修改</button>
                 </span>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Password:</span>
                 <input onChange={this.handleChange} value={this.state.passwordValue} id="passwordInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'30rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="1">修改</button>
                 </span>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Age:</span>
                 <input onChange={this.handleChange} value={this.state.ageValue} id="ageInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'30rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="2">修改</button>
                 </span>
               </div>
             </a>
             <a class="list-group-item">
               <div style={{width:'45rem'}}>
                 <span class="label" id="basic-addon1" style={{width:'8rem'}}>Sex:</span>
                 <RadioGroup value={this.state.sexValue} onChange={(dom)=>this.onChange(dom)} style={{marginLeft:'8rem'}}>
                    <Radio value="male" >Male</Radio>
                    <Radio value="female" style={{marginLeft:"6rem"}}>Female</Radio>
                 </RadioGroup>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Mail:</span>
                 <input onChange={this.handleChange} value={this.state.mailValue} id="mailInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'30rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="4">修改</button>
                 </span>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>CellPhone Number:</span>
                 <input onChange={this.handleChange} value={this.state.cpnumberValue} id="cpnumberInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'30rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="5">修改</button>
                 </span>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Address:</span>
                 <input onChange={this.handleChange} value={this.state.addressValue} id="addressInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'30rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="6">修改</button>
                 </span>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Job:</span>
                 <input onChange={this.handleChange} value={this.state.jobValue} id="jobInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'30rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="7">修改</button>
                 </span>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Description:</span>
                 <textarea onChange={this.handleChange} value={this.state.descripValue} id="descripInput" readonly="readonly" class="form-control" type="text" cols="20" rows="5" name="S1" aria-describedby="basic-addon1" style={{width:'30rem'}}></textarea>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="8">修改</button>
                 </span>
               </div>
             </a>
           </div>
        </Row>
      </Container>
    );
  }
}
export default PersonalityForm;
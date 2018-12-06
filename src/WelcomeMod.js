import React, { Component } from 'react';
import {Carousel, Button} from 'react-bootstrap';
//import './bootstrap.min.css';
import sample from './pics/SampleBackground.jpg';
import Login from './LoginPage.js';
// import {Link}from 'react-router-dom';


class WelcomeMod extends Component {
  render() {
    return (
      <div className="WelcomeMod">

        <Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={sample}
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>Welcome to Artastic</h3>
    <p>It's such pleasure to have you around. <br/> <br/>
    <Login></Login>
    <span> </span>
    <Button href="signin">Sign in</Button>
    <br/><br/>
    <Button href="community">Show me around</Button></p>
  </Carousel.Caption>

</Carousel.Item>
</Carousel>
      </div>


    );
  }
}

export default WelcomeMod;




import React, { Component } from 'react';
import logo from './Artastic.png';
//import './WelcomeMod.css';

class WelcomeMod extends Component {
  render() {
    return (
      <div className="WelcomeMod">
        <header className="WelcomeMod-header">
          <img src={logo} className="logo" alt="logo" />
          <h1>Welcome to Artastic</h1>
          <p>It's such pleasure to have you around.</p>
          <p>Wanna see how we made it work? You can check out the link below.</p>
          <a
            className="WelcomeMod-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            readme.md
          </a>
        </header>
      </div>
    );
  }
}

export default WelcomeMod;
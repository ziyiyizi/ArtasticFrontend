import React, { Component } from 'react';
import logo from './Artastic.png';
import './BannerMod.css';
//import './BannerMod.css';

class BannerMod extends Component {
  render() {
    return (
      <div className="BannerMod">

        <ul>
          <img src={logo} className="logo" alt="logo" />
          <h1>Artastic</h1>

          <div class="banner">
          <ul><button class="community">Community</button>
          <button class="home">Home</button>
          <button class="search">Search</button>
          <button class="user">User</button>
          <button class="notification">Notifications</button></ul>
          </div>
                    </ul>

      </div>
    );
  }
}

export default BannerMod;
import ReactDOM from 'react-dom';
import React from 'react';
import './bootstrap.min.css';
import App from './App';
import BannerMod from './BannerMod';
import CommunityPage from './CommunityPage';
import PostList from './Postlist';
import WelcomeMod from './WelcomeMod';
import Login from './LoginPage';
import UploadImage from './ImageUploadMod';

 ReactDOM.render(<BannerMod/>,document.getElementById('welcome'));

//  ReactDOM.render(<CommunityPage/>,document.getElementById("CommunityPage"));
//  ReactDOM.render(<PostList/>,document.getElementById("CommunityContentPanel"))

//ReactDOM.render(<Login/>,document.getElementById("CommunityPage"));

ReactDOM.render(<UploadImage/>,document.getElementById('CommunityPage'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


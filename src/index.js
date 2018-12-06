//import ReactDOM from 'react-dom';
//import React from 'react';
import './bootstrap.min.css';
//import "font-awesome/css/font-awesome.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

import React from 'react'
import  ReactDOM  from 'react-dom'
import CommunityPage from './CommunityPage';
import HomePage from './HomePage';
import WelcomeMod from './WelcomeMod';
import UserPage from './UserPage';
import SearchPage from './SearchPage';
import FloatingActionButtons from './FloatingButton';
import PublishPage from'./PublishPage';


//ReactDOM.render(<WelcomeMod/>,document.getElementById("body"));


//ReactDOM.render(<HomePage/>,document.getElementById("body"));


ReactDOM.render(<CommunityPage/>,document.getElementById("body"));


//ReactDOM.render(<SearchPage/>,document.getElementById("body"));


//ReactDOM.render(<UserPage/>,document.getElementById("body"));


//ReactDOM.render(<FloatingActionButtons/>,document.getElementById("body"));

//ReactDOM.render(<PublishPage/>,document.getElementById("body"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


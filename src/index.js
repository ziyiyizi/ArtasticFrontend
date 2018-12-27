
import './pics/bootstrap.min.css';

import React from 'react'
import  ReactDOM  from 'react-dom'
import BannerMod from './minorComponents/BannerMod';
import WelcomeMod from './WelcomeMod';
import App from './minorComponents/App'

ReactDOM.render(<BannerMod/>,document.getElementById("body"));

//ReactDOM.render(<WelcomeMod/>,document.getElementById('body'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


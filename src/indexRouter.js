import React from 'react'
import { ReactDOM } from 'react-dom'
import { Router, Route} from 'react-router'
import welcomeMod from './WelcomeMod';

ReactDOM.render(<Router>
    <Route path="/" component={welcomeMod}>
      <Route path="about" component={About} />
      <Route path="community" component={Inbox} />
    </Route>
  </Router>,document.getElementById("CommunityPage"));
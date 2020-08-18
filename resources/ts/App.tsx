import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'
import About from './About'
import User from './User'
import Top from './Top'

const App = () => {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={ Top } />
          <Route path="/about" component={ About } />
          <Route path="/user" component={ User } />
        </Switch>
      </div>
    </Router>
  )
}

export default App
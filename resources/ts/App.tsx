import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'
import About from './About'
import User from './User'
import Top from './Top'
import UserDetail from './UserDetail'

const App = () => {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={ Top } />
          <Route path="/about" component={ About } />
          <Route path="/user" exact component={ User } />
          <Route path="/user/:id" component={ UserDetail } />
        </Switch>
      </div>
    </Router>
  )
}

export default App
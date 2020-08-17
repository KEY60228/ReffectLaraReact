import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'
import About from './About'
import User from './User'

const App = () => {
  return (
    <Router>
      <div>
        <NavBar/>
        <Route path="/about" component={ About }/>
        <Route path="/user" component={ User }/>
      </div>
    </Router>
  )
}

ReactDOM.render(<App/>, document.getElementById("app"));
import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar'
import About from './About'
import User from './User'

const App = () => {
  return (
    <>
      <NavBar/>
      <About/>
      <User/>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById("app"));
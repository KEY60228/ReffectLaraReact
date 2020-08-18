import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul className="nav">
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/User">
          <li>User</li>
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar
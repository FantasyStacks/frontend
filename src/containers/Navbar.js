import React, { Component } from 'react' 
import PropTypes from 'prop-types' 
import { Link } from 'react-router-dom'

import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link
          to="/"
        > 
          LOGO
        </Link>
        <Link
          to="/home"
        >
          Home
        </Link>
        <Link
          to="/builder"
        >
          Builder
        </Link>
        <Link
          to="/profile"
        > 
          Profile
        </Link>
        <Link
          to="/help"
        >
          Help
        </Link>
      </div>
    )
  }
}

Navbar.propTypes = {
  
}

export default Navbar

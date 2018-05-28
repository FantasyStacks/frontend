import React, { Component } from 'react' 
import PropTypes from 'prop-types' 


class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="logo">
          LOGO
        </div>
        <div className="nav-item">
          Home
        </div>
        <div className="nav-item">
          Builder
        </div>
        <div className="nav-item">
          Profile
        </div>
        <div className="nav-item">
          Help
        </div>
      </div>
    )
  }
}

Navbar.propTypes = {
  
}

export default Navbar

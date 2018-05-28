import React, { Component } from 'react' 
import PropTypes from 'prop-types' 

import './PlayerPicker.css' 


class PlayerPicker extends Component {
  render() {
    return (
      <div className="playerpicker">
        <input type="text" className="playerpicker-search"/>
        <div className="playerpicker-positions">
          <div className="playerpicker-position">G</div>
          <div className="playerpicker-position">F</div>
          <div className="playerpicker-position">ALL</div>
        </div>
        <div className="playerpicker-headings">
          <div className="playerpicker-heading">TEAM</div>
          <div className="playerpicker-header">OPP</div>
          <div className="playerpicker-header">POSITION</div>
          <div className="playerpicker-header">PLAYER</div>
          <div className="playerpicker-header">PROJECTION</div>
          <div className="playerpicker-header">VALUE</div>
          <div className="playerpicker-header">SALARY</div>
        </div>
        <div className="playerpicker-playerpool">
          <div className="playerpicker-team">MIN</div>
          <div className="playerpicker-opp">ATL</div>
          <div className="playerpicker-position">F</div>
          <div className="playerpicker-player">Maya Moore</div>
          <div className="playerpicker-projection">30</div>
          <div className="playerpicker-value">5</div>
          <div className="playerpicker-salary">9000</div>
        </div>
      </div>
    )
  }
}

PlayerPicker.propTypes = {
  
}

export default PlayerPicker

import React, { Component } from 'react' 
import PropTypes from 'prop-types' 

import './GamesBar.css' 

class GamesBar extends Component {
  render() {
    return (
      <div className="gamesbar">
        <div className="gamesbar-all-games">
          All Games (5)
        </div>
        <div className="gamesbar-game">
          <div className="gamesbar-team">MIN</div>
          <div className="gamesbar-time">4:00</div>
          <div className="gamesbar-vegas">97.1</div>
          <div className="gamesbar-pace">101</div>
        </div>
      </div>
    )
  }
}

GamesBar.propTypes = {
  
}

export default GamesBar
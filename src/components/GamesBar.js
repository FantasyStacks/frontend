import React, { Component } from 'react' 
import PropTypes from 'prop-types' 


class GamesBar extends Component {
  render() {
    return (
      <div className="gamesbar">
        <div className="gamesbar-all-games">
          All Games (5)
        </div>
        <div className="gamesbar-game">
          <div className="gamesbar-team">MIN</div>
          <div className="gamesbar-team">ATL</div>
          <div className="gamesbar-time">4:00</div>
          <div className="gamesbar-vegas">vegas info</div>
          <div className="gamesbar-pace">pace info</div>
          <div className="gamesbar-stack">stack the game</div>
        </div>
      </div>
    )
  }
}

GamesBar.propTypes = {
  
}

export default GamesBar
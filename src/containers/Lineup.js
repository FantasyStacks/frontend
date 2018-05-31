import React, { Component } from 'react' 
import PropTypes from 'prop-types' 

import './Lineup.css'

class Lineup extends Component {
  render() {
    return (
      <div className="lineup">
        <div className="lineup-top">
          <div className="lineup-number">1</div>
          <div className="lineup-projection">Projection 400</div>
          <div className="lineup-salary">50000</div>
        </div>
        <div className="lineup-col-header">
          <div className="lineup-position-header">Pos</div>
          <div className="lineup-player-name">Player Name</div>
          <div className="lineup-opponent">Opp</div>
          <div className="lineup-projection">Projection</div>
          <div className="lineup-value">Value</div>
          <div className="lineup-salary">Salary</div>
          <div className="lineup-toggles">*</div>
        </div>
        <div className="lineup-players">
          <div className="lineup-player-position">
            G
          </div>
          <div className="lineup-player-name">
            Maya Moore
          </div>
          <div className="lineup-player-opponent">
            @ WAS
          </div>
          <div className="lineup-player-projection">
            33
          </div>
          <div className="lineup-player-value">
            5.0
          </div>
          <div className="lineup-player-salary">
            6100
          </div>
          <div className="lineup-player-toggles">
            X
          </div>
        </div>
        <div className="lineup-totals">
          <div>Totals</div>
          <div className="lineup-projection-total">400</div>
          <div className="lineup-salary-total">50000</div>
        </div>
        <div className="lineup-bottom">
          Stuff you can do with lineup here
        </div>
      </div>
    )
  }
}

Lineup.propTypes = {
  
}

export default Lineup

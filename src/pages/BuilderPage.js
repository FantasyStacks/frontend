import React, { Component } from 'react' 
import PropTypes from 'prop-types' 
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './BuilderPage.css' 

import Navbar from '../containers/Navbar'
import GamesBar from '../containers/GamesBar' 
import PlayerPicker from '../containers/PlayerPicker' 
import Lineup from '../containers/Lineup' 
import Footer from '../containers/Footer' 

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps,
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({

  }, dispatch)
)

class BuilderPage extends Component {
  render() {
    return (
      <div className="builder-page">
        <Navbar />
        <GamesBar />
        <PlayerPicker />
        <Lineup />
        <Footer />
      </div>
    )
  }
}

BuilderPage.propTypes = {

}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(BuilderPage))

import React, { Component } from 'react' 
import PropTypes from 'prop-types' 
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './LandingPage.css'

import Navbar from '../containers/Navbar'
import Footer from '../containers/Footer'

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps,
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({

  }, dispatch)
)

class LandingPage extends Component {
  render() {
    return (
      <div className="landing" >
        <Navbar />
        <section className="top">
          top section simple logo
        </section>
        <section className="about">
          about section talk about the site
        </section>
        <section className="feature1">
          talk about feature 1
        </section>
        <section className="feature2">
          talk about feature 2
        </section>
        <section className="feature3">
          talk about feature 3
        </section>
        <section className="action">
          call to action
        </section>
        <Footer />
      </div>
    )
  }
}

LandingPage.propTypes = {
  
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage))

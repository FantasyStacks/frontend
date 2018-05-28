import React, { Component } from 'react' 
import PropTypes from 'prop-types' 
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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
    return <div></div>
  }
}

BuilderPage.propTypes = {

}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(BuilderPage))

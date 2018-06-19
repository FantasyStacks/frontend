import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'

import { App } from './react/app.js'
import { store } from './redux/store/index.js'
import { mapStateToProps } from './redux/store/stateToProps.js'
import { mapDispatchToProps } from './redux/actions/index.js'
import './index.css'

const Root = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
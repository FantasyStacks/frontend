import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router-3'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './App'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
console.log(store.getState())
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App } />
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

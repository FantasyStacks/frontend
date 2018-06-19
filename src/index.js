import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import ReactApp from './react/index.js';
import store from './redux/store/index.js';
import mapStateToProps from './redux/store/stateToProps.js';
import mapDispatchToProps from './redux/actions/index.js';
import './index.css';

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactApp);
console.log(App);
ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);
import React, { Component } from 'react' 
import { Switch, Route, Redirect } from 'react-router-dom'

import LandingPage from './containers/LandingPage' 
import ProfilePage from './containers/ProfilePage' 
import HelpPage from './containers/HelpPage' 
import BuilderPage from './containers/BuilderPage' 


export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route 
          exact
          path="/"
          component={ LandingPage }
        />
        <Route
          path="/profile"
          component={ ProfilePage }
        />
        <Route
          path="/help"
          component={ HelpPage }
        />
        <Route
          path="/builder"
          component={ BuilderPage }
        />
      </Switch>
    )
  }
}
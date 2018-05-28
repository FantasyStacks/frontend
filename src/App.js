import React, { Component } from 'react' 
import { Switch, Route, Redirect } from 'react-router-dom'

import LandingPage from './pages/LandingPage' 
import ProfilePage from './pages/ProfilePage' 
import HelpPage from './pages/HelpPage' 
import BuilderPage from './pages/BuilderPage' 


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
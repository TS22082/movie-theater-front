import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Root from './components/Root'
import TheaterDetails from './components/TheaterDetails.js'

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Root} />
        <Route path="/theater/:id" component={TheaterDetails} />
      </Router>
    )
   }
 }
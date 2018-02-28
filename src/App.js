import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import WelcomePage from './components/welcome/WelcomePage.js'
import HomePage from './components/home/HomePage.js'
import NetsPlayers from './components/nets/NetsPlayers.js'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' render={() =>
          <WelcomePage
          />}
        />
        <Route exact path='/Home' render={() =>
          <HomePage
          />}
        />
        <Route exact path='/Team' render={() =>
          <NetsPlayers
          />}
        />
      </div>
    )
  }
}

export default App;

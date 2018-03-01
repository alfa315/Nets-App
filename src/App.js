import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import WelcomePage from './components/welcome/WelcomePage.js'
import HomePage from './components/home/HomePage.js'
import NetsRoster from './components/nets/NetsRoster.js'
import PlayerProfile from './components/profile/PlayerProfile.js'

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
          <NetsRoster
          />}
        />
        <Route path ='/Team/:id' render={() =>
          <PlayerProfile
          />}
        />
      </div>
    )
  }
}

export default App;

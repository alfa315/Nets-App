import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import WelcomePage from './components/welcome/WelcomePage.js'
import HomePage from './components/home/HomePage.js'
import NetsRoster from './components/roster/NetsRoster.js'
import PlayerProfile from './components/profile/PlayerProfile.js'
import SearchResults from './components/search/SearchResults.js'
import ComparePlayer from './components/comparison/ComparePlayer.js'
import TeamStats from './components/team/TeamStats.js'
import CapTool from './components/salaryCap/CapTool.js'


class App extends Component {

  render() {
    return (
      <div>
        <Route exact path='/' render={() =>
          <WelcomePage
          />}
        />
        <Route exact path='/home' render={() =>
          <HomePage
          />}
        />
        <Route exact path='/roster' render={() =>
          <NetsRoster
          />}
        />
        <Route path ='/player/:id' render={() =>
          <PlayerProfile
          />}
        />
        <Route path ='/search/:id' render ={() =>
          <SearchResults />}
        />
        <Route path ='/comp/:id/:id' render ={() =>
          <ComparePlayer />}
        />
        <Route path ='/team_stats' render ={() =>
          <TeamStats />}
        />
        <Route path ='/salary_cap' render ={() =>
          <CapTool />}
        />
      </div>
    )
  }
}

export default App;

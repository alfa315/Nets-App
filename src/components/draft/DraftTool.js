import React from 'react'
import NavMenu from '../navbar/NavMenu.js'
import PickStats from './PickStats.js'
import NetsPicks from './NetsPicks.js'

export default class DraftTool extends React.Component {
  state = {
    players: [],
    currentPick: 1,
    playerStats: [],
    updateStats: true,
    updatePlayers: true
  }

  fetchPlayers = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/2017/players.json")
    .then(res => res.json())
    .then(data => this.setState({
      players: data.league.standard.filter(o => parseInt(o.draft.pickNum, 10) === this.state.currentPick),
      playerStats: [],
      updatePlayers: false,
      updateStats: true

    }))
  }

  fetchPlayerStats = () => {
    this.state.players.map(player =>
      fetch(`https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/2017/players/${player.personId}_profile.json`)
      .then(res => res.json())
      .then(data => {let newData = data.league.standard.stats
        newData.name = `${player.firstName} ${player.lastName}`
        newData.pId = player.personId
        this.setState({
        playerStats: [...this.state.playerStats, newData],
        updateStats: false
      })})
    )
  }

  handlePickChange = (event, data) => {
    this.setState({
      currentPick: parseInt(data.value, 10),
      updatePlayers: true
    })
  }

  render () {
    if (this.state.updatePlayers){
      this.fetchPlayers()
    }
    if (this.state.updateStats){
      this.fetchPlayerStats()
    }
    // console.log(((this.state.playerStats.map(player => parseFloat(player.careerSummary.ppg, 10)).reduce((a, b) => a + b, 0)) / this.state.playerStats.length).toFixed(1))
    return (
      <div>
        <NavMenu />
        <h1 className='centered'>NBA Draft Stats</h1>
        <NetsPicks
        />
        <PickStats
          handleChange = {this.handlePickChange}
          playerStats = {this.state.playerStats}
          players = {this.state.players}
          currentPick={this.state.currentPick}
        />
      </div>
    )
  }
}


// Ability to display stats of all current nba players by draft position. Comparing the top 5 best and 5 worst draft positions by statistics.
// Show nets future draft picks. Show draft pick value chart. List top upcoming prospects for the upcoming draft. Also maybe look at statistics of recent nets draft picks.

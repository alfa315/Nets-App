import React from 'react'
import NavMenu from '../navbar/NavMenu.js'
import PickStats from './PickStats.js'

export default class DraftTool extends React.Component {
  state = {
    players: [],
    currentPick: 1,
    playerStats: [],
    update: true
  }

  componentWillMount() {
    this.fetchPlayers()
  }

  fetchPlayers = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/2017/players.json")
    .then(res => res.json())
    .then(data => this.setState({
      players: data.league.standard.filter(o => parseInt(o.draft.pickNum, 10) === this.state.currentPick),
      playerStats: [],
      update: true
    }))
  }

  fetchPlayerStats = () => {
    for(let i = 0; i < this.state.players.length; i++) {
      fetch(`https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/2017/players/${this.state.players[i].personId}_profile.json`)
      .then(res => res.json())
      .then(data => this.setState({
        playerStats: this.state.playerStats.concat(data.league.standard.stats),
        update: false
      }))
    }
  }

  handlePickChange = (event) => {
    this.setState({
      currentPick: parseInt(event.target.value, 10)
    })
    this.fetchPlayers()
  }

  render () {
    if (this.state.update){
      this.fetchPlayerStats()
    }
    console.log(this.state)
    return (
      <div>
        <NavMenu />
        <h1>NBA Draft Stats</h1>
        <PickStats
          handleChange = {this.handlePickChange}
          players = {this.state.players}
        />
      </div>
    )
  }
}


// Ability to display stats of all current nba players by draft position. Comparing the top 5 best and 5 worst draft positions by statistics.
// Show nets future draft picks. Show draft pick value chart. List top upcoming prospects for the upcoming draft. Also maybe look at statistics of recent nets draft picks.

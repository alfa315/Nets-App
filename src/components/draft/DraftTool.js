import React from 'react'
import NavMenu from '../navbar/NavMenu.js'
import PickStats from './PickStats.js'
import NetsPicks from './NetsPicks.js'
import DraftTab from './DraftTab.js'

export default class DraftTool extends React.Component {
  state = {
    players: [],
    currentPick: 1,
    playerStats: [],
    updateStats: true,
    updatePlayers: true,
    netsDrafted: [],
    selectedPlayer: ""
  }

  fetchPlayers = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/2017/players.json")
    .then(res => res.json())
    .then(data => this.setState({
      players: data.league.standard.filter(o => parseInt(o.draft.pickNum, 10) === this.state.currentPick),
      netsDrafted: data.league.standard.filter(o => o.draft.teamId === "1610612751"),
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

  handlePlayerClick = (event) => {
    console.log(event.target.value)
  }

  render () {
    if (this.state.updatePlayers){
      this.fetchPlayers()
    }
    if (this.state.updateStats){
      this.fetchPlayerStats()
    }
    if (this.state.updateDrafted){
      this.fetchDraftedPlayers()
    }
    return (
      <div>
        <NavMenu />
        <div style={{marginTop: '60px', marginBottom: '200px'}}>
          <NetsPicks />
          <DraftTab
            drafted = {this.state.netsDrafted}
            handleClick = {this.handlePlayerClick}
          />
        </div>
        <div style={{marginBottom: '200px'}}>
          <PickStats
            handleChange = {this.handlePickChange}
            playerStats = {this.state.playerStats}
            players = {this.state.players}
            currentPick={this.state.currentPick}
          />
        </div>
      </div>
    )
  }
}


// Ability to display stats of all current nba players by draft position. Comparing the top 5 best and 5 worst draft positions by statistics.
// Show nets future draft picks. Show draft pick value chart. List top upcoming prospects for the upcoming draft. Also maybe look at statistics of recent nets draft picks.

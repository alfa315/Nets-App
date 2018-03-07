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
    selectedPlayer: "",
    oneD: 0,
    oneDD: 0,
    oneDDD: 0,
    twoD: 0,
    twoDD: 0,
    twoDDD: 0
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

  handleOneD = (event, data) => {
    this.setState({
      oneD: data.value
    })
  }

  handleOneDD = (event, data) => {
    this.setState({
      oneDD: data.value
    })
  }

  handleOneDDD = (event, data) => {
    this.setState({
      oneDDD: data.value
    })
  }

  handleTwoD = (event, data) => {
    this.setState({
      twoD: data.value
    })
  }

  handleTwoDD = (event, data) => {
    this.setState({
      twoDD: data.value
    })
  }

  handleTwoDDD = (event, data) => {
    this.setState({
      twoDDD: data.value
    })
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
            handleOneD = {this.handleOneD}
            handleOneDD = {this.handleOneDD}
            handleOneDDD = {this.handleOneDDD}
            handleTwoD = {this.handleTwoD}
            handleTwoDD = {this.handleTwoDD}
            handleTwoDDD = {this.handleTwoDDD}
            oneD = {this.state.oneD}
            oneDD = {this.state.oneDD}
            oneDDD = {this.state.oneDDD}
            twoD = {this.state.twoD}
            twoDD = {this.state.twoDD}
            twoDDD = {this.state.twoDDD}
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

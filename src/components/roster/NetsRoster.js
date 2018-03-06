import React, { Component } from 'react'
import NavMenu from '../navbar/NavMenu.js'
import RosterTable from './RosterTable.js'



class NetsRoster extends Component {
  state = {
    playerIds: [],
    playerBios: [],
    updateBios: true
  }

  componentDidMount() {
    this.fetchPlayerIds()
  }

  fetchPlayerIds = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/2017/teams/1610612751/roster.json")
    .then(res => res.json())
    .then(data => this.setState({
      playerIds: data.league.standard.players
    }))
  }

  fetchPlayerBios = () => {
    this.state.playerIds.map(player =>
      fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/2017/players.json")
      .then(res => res.json())
      .then(data => this.setState({
        playerBios: this.state.playerBios.concat(data.league.standard.find(o => o.personId === player.personId)),
        updateBios: false
      }))
    )
  }

  render() {
    if (this.state.updateBios) {
      this.fetchPlayerBios()
    }
    console.log(this.state)
    return (
      <div className='currentRoster'>
        <NavMenu />
        <RosterTable
          playerIds={this.state.playerIds}
          playerBios={this.state.playerBios}
        />
      </div>
    )
  }
}

export default NetsRoster

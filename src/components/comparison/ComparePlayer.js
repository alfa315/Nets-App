import React from 'react'
import StatComps from './StatComps.js'
import NavMenu from '../navbar/NavMenu.js'


export default class ComparePlayer extends React.Component {
  state = {
    playerIds: window.location.pathname.slice(6).split("/"),
    playerOneStats: [],
    playerTwoStats: [],
    playerBios: []
  }

  componentWillMount() {
    this.fetchPlayerOneStats()
    this.fetchPlayerTwoStats()
    this.fetchPlayerBio()
  }

  fetchPlayerOneStats = () => {
    fetch(`https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/2017/players/${this.state.playerIds[0]}_profile.json`)
    .then(res => res.json())
    .then(data => this.setState({
      playerOneStats: data.league.standard
    }))
  }

  fetchPlayerTwoStats = () => {
    fetch(`https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/2017/players/${this.state.playerIds[1]}_profile.json`)
    .then(res => res.json())
    .then(data => this.setState({
      playerTwoStats: data.league.standard
    }))
  }

  fetchPlayerBio = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/2017/players.json")
    .then(res => res.json())
    .then(data => this.setState({
      playerBios: data.league.standard.filter(o => o.personId === this.state.playerIds[0] || o.personId === this.state.playerIds[1])
    }))
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <NavMenu />
        <StatComps
          pOne={this.state.playerOneStats}
          pTwo={this.state.playerTwoStats}
          bios={this.state.playerBios}
        />
      </div>
    )
  }
}

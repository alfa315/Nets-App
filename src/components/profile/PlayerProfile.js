import React from 'react'
import NavMenu from '../navbar/NavMenu.js'
import PlayerStats from './PlayerStats.js'

export default class PlayerProfile extends React.Component {

  state = {
    currentId: window.location.pathname.slice(6),
    playerBio: [],
    playerStats: []
  }

  componentWillMount() {
    this.fetchPlayerBio()
    this.fetchPlayerStats()
  }

  fetchPlayerBio = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/2017/players.json")
    .then(res => res.json())
    .then(data => this.setState({
      playerBio: data.league.standard.find(o => o.personId === this.state.currentId)
    }))
  }

  fetchPlayerStats = () => {
    fetch(`https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/2017/players/${this.state.currentId}_profile.json`)
    .then(res => res.json())
    .then(data => this.setState({
      playerStats: data.league.standard
    }))
  }

  render () {
    console.log(this.state)
    return (
      <div className='profileContainer'>
        <NavMenu />
        <img className='centered' src={`https://nba-players.herokuapp.com/players/${this.state.playerBio.lastName}/${this.state.playerBio.firstName}`} alt="Not Available" />
        <h1 className='centered'>{this.state.playerBio.firstName} {this.state.playerBio.lastName}</h1>
        <PlayerStats numbers={this.state.playerStats}/>
      </div>
    )
  }
}

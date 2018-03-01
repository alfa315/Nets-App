import React from 'react'
import NavMenu from '../navbar/NavMenu.js'

export default class PlayerProfile extends React.Component {

  state = {
    currentId: window.location.pathname.slice(6),
    playerBio: [],
    playerStats: []
  }

  componentDidMount() {
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
      <div>
        <NavMenu />
        <h1>Individual Player Profile will be here!</h1>
        <img src ={`https://nba-players.herokuapp.com/players/${this.state.playerBio.lastName}/${this.state.playerBio.firstName}`} alt="Not Available" />
      </div>
    )
  }
}

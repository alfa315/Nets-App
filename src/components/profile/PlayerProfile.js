import React from 'react'
import NavMenu from '../navbar/NavMenu.js'
import PlayerStats from './PlayerStats.js'
import MainLoader from '../loaders/MainLoader.js'


export default class PlayerProfile extends React.Component {

  state = {
    currentId: window.location.pathname.slice(6),
    playerBio: [],
    playerStats: [],
    allPlayers: [],
    compPlayer: ""
  }

  componentWillMount() {
    this.fetchPlayerBio()
    this.fetchPlayerStats()
    this.fetchAllPlayers()
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

  fetchAllPlayers = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/2017/players.json")
    .then(res => res.json())
    .then(data => this.setState({
      allPlayers: data.league.standard
    }))
  }

  handleChange = (event, data) => {
    this.setState({
      compPlayer: data.value
    })
  }

  handleClick = (event) => {
    if (this.state.compPlayer.length === 0) {
      window.location.reload()
    } else {
      window.location.href=`http://localhost:3000/comp/${this.state.currentId}/${this.state.compPlayer}`
    }
  }

  render () {
    console.log(this.state)
    if(this.state.playerBio.length === 0 || this.state.playerBio === undefined) {
      return (
        <MainLoader />
      )
    } else {
        let lastName = this.state.playerBio.lastName.replace(/[.']/g,'')
        let firstName = this.state.playerBio.firstName.replace(/[.']/g,'')
        return (
          <div className='profileContainer'>
            <NavMenu />
            <img className='centered' src={`https://nba-players.herokuapp.com/players/${lastName}/${firstName}`} alt="Not Available" />
            <h1 className='centered'>{this.state.playerBio.firstName} {this.state.playerBio.lastName}</h1>
            <PlayerStats
              numbers={this.state.playerStats} allPlayers={this.state.allPlayers}
              handleChange={this.handleChange}
              handleClick={this.handleClick}
            />
          </div>
        )
    }
  }
}



// fetch(`http://data.nba.net/10s//prod/v1/2017/players/201960_profile.json`)
//     .then(res => res.json())
//     .then(data => console.log(data.league.standard.stats.regularSeason.season.map(o => o.total)))

// fetch(`http://data.nba.net/10s//prod/v1/2017/players/201960_profile.json`)
//     .then(res => res.json())
//     .then(data => console.log(data.league.standard.stats.regularSeason.season.map(o => o.seasonYear)))

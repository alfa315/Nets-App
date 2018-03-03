import React from 'react'
import NavMenu from '../navbar/NavMenu.js'
import PlayerStats from './PlayerStats.js'
import MainLoader from '../loaders/MainLoader.js'
import LineVisual from './LineVisual.js'


export default class PlayerProfile extends React.Component {

  state = {
    currentId: window.location.pathname.slice(6),
    playerBio: [],
    playerStats: [],
    allPlayers: [],
    compPlayer: "",
    lineData: [],
    lineOptions: [{key: "ppg", value: "Points Per Game", text: "Points Per Game"}, {key: "rpg", value: "Rebounds Per Game", text: "Rebounds Per Game"}, {key: "apg", value: "Assists Per Game", text: "Assists Per Game"}],
    chartType: "ppg"
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
      playerStats: data.league.standard,
      lineData: data.league.standard.stats.regularSeason.season.map(o => o.total[`${this.state.chartType}`])
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

  handleDropDown = (event, data) => {
    if (data.value === "Points Per Game") {
      this.setState({
        chartType: "ppg"
      })
    } else if (data.value === "Rebounds Per Game") {
      this.setState({
        chartType: "rpg"
      })
    } else if (data.value === "Assists Per Game") {
      this.setState({
        chartType: "apg"
      })
    }
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
            <LineVisual
              data={this.state.lineData}
              options={this.state.lineOptions}
              handleChange={this.handleDropDown}
            />
          </div>
        )

    }
  }
}

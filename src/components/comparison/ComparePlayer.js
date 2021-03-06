import React from 'react'
import StatComps from './StatComps.js'
import NavMenu from '../navbar/NavMenu.js'


export default class ComparePlayer extends React.Component {
  state = {
    playerIds: window.location.pathname.slice(6).split("/"),
    playerOneStats: [],
    playerTwoStats: [],
    playerOneBio: {},
    playerTwoBio: {},
    careerOrSeason: "career"
  }

  componentWillMount() {
    this.fetchPlayerOneStats()
    this.fetchPlayerTwoStats()
    this.fetchPlayerOneBio()
    this.fetchPlayerTwoBio()
  }

  fetchPlayerOneStats = () => {
    fetch(`https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/2018/players/${this.state.playerIds[0]}_profile.json`)
    .then(res => res.json())
    .then(data => this.setState({
      playerOneStats: data.league.standard
    }))
  }

  fetchPlayerTwoStats = () => {
    fetch(`https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/2018/players/${this.state.playerIds[1]}_profile.json`)
    .then(res => res.json())
    .then(data => this.setState({
      playerTwoStats: data.league.standard
    }))
  }

  fetchPlayerOneBio = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/2018/players.json")
    .then(res => res.json())
    .then(data => this.setState({
      playerOneBio: data.league.standard.filter(o => o.personId === this.state.playerIds[0])
    }))
  }

  fetchPlayerTwoBio = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/2018/players.json")
    .then(res => res.json())
    .then(data => this.setState({
      playerTwoBio: data.league.standard.filter(o => o.personId === this.state.playerIds[1])
    }))
  }

  handleChange = (event) => {
    if(this.state.careerOrSeason === "career") {
      this.setState({
        careerOrSeason: "season"
      })
    } else if (this.state.careerOrSeason === "season") {
      this.setState({
        careerOrSeason: "career"
      })
    }
  }

  render() {
    return(
      <div>
        <NavMenu />
        <StatComps
          pOne={this.state.playerOneStats}
          pTwo={this.state.playerTwoStats}
          p1Bio={this.state.playerOneBio[0]}
          p2Bio={this.state.playerTwoBio[0]}
          toggle={this.state.careerOrSeason}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

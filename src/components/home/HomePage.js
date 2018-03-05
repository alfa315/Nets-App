import React, { Component } from 'react'
import NavMenu from '../navbar/NavMenu.js'
import Scoreboard from './Scoreboard.js'
import WestStandings from './WestStandings.js'
import EastStandings from './EastStandings.js'
import NewsContainer from './NewsContainer.js'

class HomePage extends Component {
  state = {
    todaysGames: [],
    teams: [],
    standings: [],
    news: [],
    article: 0
  }

  componentWillMount() {
    this.fetchGames()
    this.fetchTeams()
    this.fetchStandings()
    this.fetchNews()
  }

  fetchTeams = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/2017/teams.json")
     .then(res => res.json())
     .then(data => this.setState({
       teams: data.league.standard
     }))
  }

  fetchStandings = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/current/standings_conference.json")
     .then(res => res.json())
     .then(data => this.setState({
       standings: data.league.standard.conference
     }))
  }

  fetchGames = () => {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth()+1
    let yyyy = today.getFullYear()
    if(dd<10) {
        dd = '0'+dd
    }
    if(mm<10) {
        mm = '0'+mm
    }
    today = yyyy+ mm + dd
    fetch(`https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/${today}/scoreboard.json`)
    .then(res => res.json())
    .then(data => this.setState({
      todaysGames: data.games
    }))
  }

  fetchNews = () => {
    fetch('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?domains=netsdaily.com&apiKey=5d636e1db94d4279805aa9acc9e68fc2')
     .then(res => res.json())
     .then(data => this.setState({
       news: data.articles
     }))
  }

  handleNextClick = (event) => {
    if(this.state.article < this.state.news.length - 1) {
      this.setState({
        article: this.state.article + 1
      })
    }
  }

  handlePreviousClick = (event) => {
    if(this.state.article > 0) {
      this.setState({
        article: this.state.article - 1
      })
    }
  }


  render() {
    console.log(this.state)
    return (
      <div className='homepage'>
        <NavMenu />
        <h1 className='centered xxl'>Nothing But Nets</h1>
        <hr></hr>
        <Scoreboard
          games={this.state.todaysGames}
        />
        <hr></hr>
        <NewsContainer
          news={this.state.news}
          num={this.state.article}
          handleNext={this.handleNextClick}
          handlePrevious={this.handlePreviousClick}
        />
        <WestStandings
          teams={this.state.teams}
          standings={this.state.standings}
        />
        <EastStandings
          teams={this.state.teams}
          standings={this.state.standings}
        />
      </div>
    )
  }
}

export default HomePage

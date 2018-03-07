import React from 'react'
import TeamLeaders from './TeamLeaders.js'
import TeamRankings from './TeamRankings.js'
import NavMenu from '../navbar/NavMenu.js'

export default class TeamStats extends React.Component {
  state = {
    leaders: [],
    allPlayers: [],
    rankings: []
  }

  componentWillMount() {
    this.fetchLeaders()
    this.fetchPlayers()
    this.fetchRankings()
  }

  fetchLeaders = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/2017/teams/1610612751/leaders.json")
    .then(res => res.json())
    .then(data => this.setState({
      leaders: data.league.standard
    }))
  }

  fetchPlayers = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/2017/players.json")
    .then(res => res.json())
    .then(data => this.setState({
      allPlayers: data.league.standard
    }))
  }

  fetchRankings = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/2017/team_stats_rankings.json")
    .then(res => res.json())
    .then(data => this.setState({
      rankings: data.league.standard.regularSeason.teams.find(team => team.teamId === "1610612751")
    }))
  }


  render () {
    console.log(this.state.allPlayers)
    return (
      <div>
        <NavMenu />
        <TeamLeaders
          leaders = {this.state.leaders}
          players = {this.state.allPlayers}
        />
        <TeamRankings
          rankings = {this.state.rankings}
        />
      </div>
    )
  }
}


// Sortable roster by statistic leaders. Maybe top leaders from most recent game like RealGM. Current salary cap situation and for the available season against projected cap. List potential targets for free agency. Maybe add last 5 games results on homepage or on team stats page.

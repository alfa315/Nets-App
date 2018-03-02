import React from 'react'
import NavMenu from '../navbar/NavMenu.js'
import ResultsList from './ResultsList.js'

export default class SearchResults extends React.Component {
  state = {
    searchTerms: window.location.pathname.slice(8).split("/"),
    results: [],
    teams: []
  }

  componentWillMount() {
    this.fetchPlayers()
    this.fetchTeams()
  }

  fetchPlayers = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/2017/players.json")
    .then(res => res.json())
    .then(data => {for(let i=0; i < this.state.searchTerms.length; i++){
      this.setState({
        results: data.league.standard.filter(o => o.firstName.toLowerCase() === this.state.searchTerms[i].toLowerCase() || o.lastName.toLowerCase() === this.state.searchTerms[i].toLowerCase())
      })
    }})
  }

  fetchTeams = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/2017/teams.json")
     .then(res => res.json())
     .then(data => this.setState({
       teams: data.league.standard
     }))
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <NavMenu />
        <ResultsList
          results={this.state.results}
          teams={this.state.teams}
        />
      </div>
    )
  }
}

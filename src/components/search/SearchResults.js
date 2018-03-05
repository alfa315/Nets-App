import React from 'react'
import NavMenu from '../navbar/NavMenu.js'
import ResultsList from './ResultsList.js'

export default class SearchResults extends React.Component {
  state = {
    searchTerms: window.location.pathname.slice(8).split("-").filter(Boolean),
    results: [],
    teams: [],
    stillSearching: true
  }

  componentWillMount() {
    this.fetchPlayers()
    this.fetchTeams()
  }

  fetchPlayers = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://data.nba.net/10s//prod/v1/2017/players.json")
    .then(res => res.json())
    .then(data => {for(let i=0; i < this.state.searchTerms.length; i++){
      let playerSearch = data.league.standard.filter(o => o.firstName.toLowerCase() === this.state.searchTerms[i].toLowerCase() || o.lastName.toLowerCase() === this.state.searchTerms[i].toLowerCase())
      if(playerSearch.length > 0) {
        this.setState({
          results: this.state.results.concat(playerSearch),
          stillSearching: true
        })
      } else if(playerSearch.length === 0) {
        this.setState({
          results: this.state.results.concat(playerSearch),
          stillSearching: false
        })
      }

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
          searching={this.state.stillSearching}
        />
      </div>
    )
  }
}

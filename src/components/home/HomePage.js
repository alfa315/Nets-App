import React, { Component } from 'react'
import NavMenu from '../navbar/NavMenu.js'
import Scoreboard from './Scoreboard.js'

class HomePage extends Component {
  state = {
    todaysGames: []
  }

  componentWillMount() {
    this.fetchGames()
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

  render() {
    console.log(this.state)
    return (
      <div className='homepage'>
        <NavMenu />
        <h1 className='centered xxl'>Welcome to Nothing but Nets!</h1>
        <hr></hr>
        <Scoreboard
          games={this.state.todaysGames}
        />
        <hr></hr>
      </div>
    )
  }
}

export default HomePage

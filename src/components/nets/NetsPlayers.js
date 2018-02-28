import React, { Component } from 'react'
import NavMenu from '../navbar/NavMenu.js'

class NetsPlayers extends Component {
  render() {
    return (
      <div className='currentRoster'>
        <NavMenu />
        <h1>This will be the current Nets Roster</h1>
      </div>
    )
  }
}

export default NetsPlayers

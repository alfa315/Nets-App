import React, { Component } from 'react'
import NavMenu from '../navbar/NavMenu.js'

class HomePage extends Component {
  render() {
    return (
      <div className='homepage'>
        <NavMenu />
        <h1>This will be the homepage</h1>
      </div>
    )
  }
}

export default HomePage

import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

export default class NavMenu extends Component {

  render() {
    return (
      <Segment inverted>
        <Menu inverted secondary massive>
          <Link to='/' >
            <img className='logo' src={logo} alt='Brooklyn Nets'/>
          </Link>
          <Link to='/home' className="item">
            Home
          </Link>
          <Link to='/team' className="item">
            Current Roster
          </Link>
        </Menu>
      </Segment>
    )
  }
}

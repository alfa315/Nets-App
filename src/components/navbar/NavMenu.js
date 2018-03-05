import React, { Component } from 'react'
import { Menu, Segment, Input, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../../images/BKN.png'

export default class NavMenu extends Component {
  state = {
    searchValue: ""
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.searchValue.length === 0) {
      window.location.replace(`http://localhost:3000/search/nothing`)
    } else {
      window.location.replace(`http://localhost:3000/search/${this.state.searchValue.split(" ").join("-")}`)
    }
  }

  handleClick = (event) => {
    event.preventDefault()
    window.location.replace(`http://localhost:3000/search/${this.state.searchValue.split(" ").join("-")}`)
  }

  render() {
    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Link to='/' >
            <img
              className='logo'
              src={logo}
              alt='Brooklyn Nets'
            />
          </Link>

          <Link to='/home' className="item">
            Home
          </Link>
          <Link to='/team' className="item">
            Current Roster
          </Link>

          <Menu.Menu position='right'>
            <Menu.Item>
              <form onSubmit={this.handleSubmit}>
                <Input
                  onChange={this.handleChange}
                  icon={ <Icon onClick={this.handleClick} name='search' link /> }
                  placeholder='Search Players...'
                />
              </form>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}

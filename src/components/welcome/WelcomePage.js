import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { Button } from 'semantic-ui-react'
import vid from '../../images/Nets.mp4'

class WelcomePage extends Component {
  state = {
    redirect: false
  }

  handleOnClick = () => {
    this.setState({
      redirect: true
    })
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to='/home'/>
    }
    return (
      <div>
        <div className='extend'>
          <Button onClick={this.handleOnClick} >Enter</Button>
          <video
          className="exten"
          preload="auto"
          autoPlay="true"
          loop="loop"
          muted="muted">
            <source src={vid} type="video/mp4" />
          </video>
        </div>
      </div>
    )
  }
}

export default WelcomePage

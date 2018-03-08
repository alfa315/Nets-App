import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { Button } from 'semantic-ui-react'
import vid from '../../images/Nets.mp4'
import logo from '../../images/BKN.png'

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
      <div className='centered'>
        <h1 style={{fontSize: '500%'}}><img
          src={logo}
          alt='Brooklyn Nets'
          style={{marginRight: '70px', marginTop: '15px', height: "125px", width: "125px"}}
        />WELCOME TO NOTHING BUT NETS<img
          src={logo}
          alt='Brooklyn Nets'
          style={{marginLeft: '70px', marginTop: '15px', height: "125px", width: "125px"}}
        /></h1>
        <div  >
          <video
          className="exten"
          preload="auto"
          autoPlay="true"
          loop="loop"
          muted="muted"
          style = {{width: "100%", height: '400px' }}>
            <source src={vid} type="video/mp4" />

          </video>
        </div>
        <div>
          <Button style={{width: '250px', marginTop: '50px'}} size='massive' color='black' onClick={this.handleOnClick} >Enter</Button>
        </div>
      </div>
    )
  }
}

export default WelcomePage

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
        <h1 style={{fontSize: '480%'}}><img
          src={logo}
          alt='Brooklyn Nets'
          style={{marginRight: '2%', marginTop: '15px', height: "8%", width: "8%"}}
        />WELCOME TO NOTHING BUT NETS<img
          src={logo}
          alt='Brooklyn Nets'
          style={{marginLeft:'2%', marginTop: '15px', height: "8%", width: "8%"}}
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
        <div style={{marginBottom: "7%", marginTop: '5%'}}>
          <Button style={{width: '250px'}} size='massive' color='black' onClick={this.handleOnClick} >Enter</Button>
        </div>
      </div>
    )
  }
}

export default WelcomePage

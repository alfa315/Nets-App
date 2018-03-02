import React from 'react'
import MainLoader from '../loaders/MainLoader.js'



const StatComps = (props) => {
  if(props.bios.length === 0 || props.bios === undefined) {
    return (
      <MainLoader />
    )
  } else {
    return (
      <div>
        <div className='left centered'>
          <img className='centered medium' src={`https://nba-players.herokuapp.com/players/${props.bios[0].lastName}/${props.bios[0].firstName}`} alt="Not Available" />
          <h1>{props.bios[0].firstName} {props.bios[0].lastName}</h1>
        </div>

        <div className='right centered'>
          <img className='centered medium' src={`https://nba-players.herokuapp.com/players/${props.bios[1].lastName}/${props.bios[1].firstName}`} alt="Not Available" />
          <h1>{props.bios[1].firstName} {props.bios[1].lastName}</h1>
        </div>
      </div>
    )
  }
}

export default StatComps

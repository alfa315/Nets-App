import React from 'react'
import MainLoader from '../loaders/MainLoader.js'



const StatComps = (props) => {
  if(props.p1Bio === undefined || props.p2Bio === undefined || props.pOne.length === 0 || props.pTwo.length === 0 || props.pOne === undefined || props.pTwo === undefined) {
    return (
      <MainLoader />
    )
  } else {
    return (
      <div>
        <div className='left centered'>
          <img className='centered medium' src={`https://nba-players.herokuapp.com/players/${props.p1Bio.lastName.replace(/[.']/g,'')}/${props.p1Bio.firstName.replace(/[.']/g,'')}`} alt="Not Available" />
          <h1>{props.p1Bio.firstName} {props.p1Bio.lastName}</h1>
          <p>{props.pOne.stats.careerSummary.ppg}</p>
          <p>{props.pOne.stats.careerSummary.rpg}</p>
          <p>{props.pOne.stats.careerSummary.apg}</p>
          <p>{props.pOne.stats.careerSummary.bpg}</p>
          <p>{props.pOne.stats.careerSummary.spg}</p>
          <p>{props.pOne.stats.careerSummary.dd2}</p>
          <p>{props.pOne.stats.careerSummary.td3}</p>
          <p>{props.pOne.stats.careerSummary.plusMinus}</p>
          <p>{props.pOne.stats.careerSummary.gamesPlayed}</p>
        </div>

        <div className='right centered'>
          <img className='centered medium' src={`https://nba-players.herokuapp.com/players/${props.p2Bio.lastName.replace(/[.']/g,'')}/${props.p2Bio.firstName.replace(/[.']/g,'')}`} alt="Not Available" />
          <h1>{props.p2Bio.firstName} {props.p2Bio.lastName}</h1>
          <p>{props.pTwo.stats.careerSummary.ppg}</p>
          <p>{props.pTwo.stats.careerSummary.rpg}</p>
          <p>{props.pTwo.stats.careerSummary.apg}</p>
          <p>{props.pTwo.stats.careerSummary.bpg}</p>
          <p>{props.pTwo.stats.careerSummary.spg}</p>
          <p>{props.pTwo.stats.careerSummary.dd2}</p>
          <p>{props.pTwo.stats.careerSummary.td3}</p>
          <p>{props.pTwo.stats.careerSummary.plusMinus}</p>
          <p>{props.pTwo.stats.careerSummary.gamesPlayed}</p>
        </div>
      </div>
    )
  }
}

export default StatComps

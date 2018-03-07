import React from 'react'
import MainLoader from '../loaders/MainLoader.js'
import { Progress } from 'semantic-ui-react'

const TeamRankings = (props) => {
  if(props.rankings.length === 0 || props.rankings === undefined) {
    return (
      <MainLoader />
    )
  } else {
    return (
      <div style={{textAlign: "center", marginTop: '100px', marginBottom: '125px'}}>
        <h1>Team Statistical Rankings</h1>
        <Progress color='black' style = {{width: '50%'}} progress='value' value={props.rankings.ppg.rank} total={30} active>
          <h3>Points Per Game - {props.rankings.ppg.avg}</h3>
        </Progress>
        <Progress color='black' style = {{width: '50%'}} progress='value' value={props.rankings.oppg.rank} total={30} active>
          <h3>Opponents Points Per Game - {props.rankings.oppg.avg}</h3>
        </Progress>
        <Progress color='black' style = {{width: '50%'}} progress='value' value={props.rankings.trpg.rank} total={30} active>
          <h3>Rebounds Per Game - {props.rankings.trpg.avg}</h3>
        </Progress>
        <Progress color='black' style = {{width: '50%'}} progress='value' value={props.rankings.apg.rank} total={30} active>
          <h3>Assists Per Game - {props.rankings.apg.avg}</h3>
        </Progress>
        <Progress color='black' style = {{width: '50%'}} progress='value' value={props.rankings.fgp.rank} total={30} active>
          <h3>Field Goal Percentage  - {props.rankings.fgp.avg * 100}%</h3>
        </Progress>
        <Progress color='black' style = {{width: '50%'}} progress='value' value={props.rankings.tpp.rank} total={30} active>
          <h3>Three Point Percentage - {props.rankings.tpp.avg * 100}%</h3>
        </Progress>
        <Progress color='black' style = {{width: '50%'}} progress='value' value={props.rankings.spg.rank} total={30} active>
          <h3>Steals Per Game - {props.rankings.spg.avg}</h3>
        </Progress>
        <Progress color='black' style = {{width: '50%'}} progress='value' value={props.rankings.bpg.rank} total={30} active>
          <h3>Blocks Per Game - {props.rankings.bpg.avg}</h3>
        </Progress>
        <Progress color='black' style = {{width: '50%'}} progress='value' value={props.rankings.tpg.rank} total={30} active>
          <h3>Turnovers Per Game - {props.rankings.tpg.avg}</h3>
        </Progress>
      </div>
    )
  }
}

export default TeamRankings


// {props.rankings.ppg.avg}

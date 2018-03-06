import React from 'react'

const PickRow = (props) => {
  return (
    <tr>
      <td><a href={`/player/${props.player.pId}`}>{props.player.name}</a></td>
      <td>{props.player.careerSummary.ppg}</td>
      <td>{props.player.careerSummary.rpg}</td>
      <td>{props.player.careerSummary.apg}</td>
      <td>{props.player.careerSummary.fgp}</td>
      <td>{props.player.careerSummary.tpp}</td>
      <td>{props.player.careerSummary.plusMinus}</td>
      <td>{props.player.careerSummary.gamesPlayed}</td>
    </tr>
  )
}

export default PickRow

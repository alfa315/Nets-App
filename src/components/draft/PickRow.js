import React from 'react'

const PickRow = (props) => {
  return (
    <tr>
      <td>Name will be here</td>
      <td>{props.player.ppg}</td>
      <td>{props.player.rpg}</td>
      <td>{props.player.apg}</td>
      <td>{props.player.fgp}</td>
      <td>{props.player.tpp}</td>
      <td>{props.player.plusMinus}</td>
      <td>{props.player.gamesPlayed}</td>
    </tr>
  )
}

export default PickRow

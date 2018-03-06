import React from 'react'

const ColumnTotals = (props) => {
  let ppg = ((props.playerStats.map(player => parseFloat(player.careerSummary.ppg, 10)).reduce((a, b) => a + b, 0)) / props.playerStats.length).toFixed(1)

  let rpg = ((props.playerStats.map(player => parseFloat(player.careerSummary.rpg, 10)).reduce((a, b) => a + b, 0)) / props.playerStats.length).toFixed(1)

  let apg = ((props.playerStats.map(player => parseFloat(player.careerSummary.apg, 10)).reduce((a, b) => a + b, 0)) / props.playerStats.length).toFixed(1)

  let fgp = ((props.playerStats.map(player => parseFloat(player.careerSummary.fgp, 10)).reduce((a, b) => a + b, 0)) / props.playerStats.length).toFixed(2)

  let tpp = ((props.playerStats.map(player => parseFloat(player.careerSummary.tpp, 10)).reduce((a, b) => a + b, 0)) / props.playerStats.length).toFixed(2)

  let plusMinus = (props.playerStats.map(player => parseFloat(player.careerSummary.plusMinus, 10)).reduce((a, b) => a + b, 0))

  let gamesPlayed = (props.playerStats.map(player => parseFloat(player.careerSummary.gamesPlayed, 10)).reduce((a, b) => a + b, 0))

  return (
    <tfoot>
      <tr>
        <th style={{color: 'white', backgroundColor: "black", fontWeight: "bold"}}></th>
        <th style={{color: 'white', backgroundColor: "black", fontWeight: "bold"}}>{ppg}</th>
        <th style={{color: 'white', backgroundColor: "black", fontWeight: "bold"}}>{rpg}</th>
        <th style={{color: 'white', backgroundColor: "black", fontWeight: "bold"}}>{apg}</th>
        <th style={{color: 'white', backgroundColor: "black", fontWeight: "bold"}}>{fgp} %</th>
        <th style={{color: 'white', backgroundColor: "black", fontWeight: "bold"}}>{tpp} %</th>
        <th style={{color: 'white', backgroundColor: "black", fontWeight: "bold"}}>{plusMinus}</th>
        <th style={{color: 'white', backgroundColor: "black", fontWeight: "bold"}}>{gamesPlayed}</th>
      </tr>
    </tfoot>
  )
}

export default ColumnTotals

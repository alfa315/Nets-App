import React from 'react'
import MainLoader from '../loaders/MainLoader.js'

const EastItems = (props) => {
  if(props.item.length === 0 || props.item === undefined || props.teamIds.length === 0 || props.teamIds === undefined) {
    return (
      <MainLoader />
    )
  } else {
    let teamName = props.teamIds.find((o) => o.teamId === props.item.teamId)

    return (
      <tr>
        <td>{props.item.confRank}</td>
        <td><img className='smallLogo' src={require(`../../images/${teamName.tricode}.png`)} alt="Not  Available"/> </td>
        <td>{teamName.fullName}</td>
        <td>{props.item.winPct}</td>
        <td>{props.item.win}</td>
        <td>{props.item.loss}</td>
        <td>{props.item.lastTenWin + "-" + props.item.lastTenLoss}</td>
      </tr>
    )
  }
}

export default EastItems

import React from 'react'
import PickRow from './PickRow.js'
import ColumnTotals from './ColumnTotals.js'
import MainLoader from '../loaders/MainLoader.js'
import { Dropdown } from 'semantic-ui-react'

const PickStats = (props) => {
  if (props.playerStats.length < props.players.length || props.players.length === 0) {
    return (
      <MainLoader />
    )
  } else {
    let player = props.playerStats.map((player, idx) => <PickRow  player={player} key={idx}/>)

    let options = []
    for (let i = 1; i < 61; i++) {
      options.push({key: i, value: i, text: `Pick ${i}`})
    }
    return (
      <div className='centered'>
        <Dropdown onChange={props.handleChange} placeholder='Choose By Pick...' search selection options={options} />

        <h1 className='centered'>Statistics of Players Drafted # {props.currentPick}</h1>
        <table className="ui striped celled collapsing compact table" style={{fontSize: "medium"}}>
          <thead className='headers'>
            <tr>
              <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
                <h3>Name</h3>
              </th>
              <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
                <h3>Points Per Game</h3>
              </th>
              <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
                <h3>Rebounds Per Game</h3>
              </th>
              <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
                <h3>Assists Per Game</h3>
              </th>
              <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
                <h3>Field Goal Percentage</h3>
              </th>
              <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
                <h3>Three Point Percentage</h3>
              </th>
              <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
                <h3>Plus-Minus</h3>
              </th>
              <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
                <h3>Games Played</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {player}
          </tbody>
          <ColumnTotals
            playerStats = {props.playerStats}
          />
        </table>
      </div>
    )
  }
}


export default PickStats

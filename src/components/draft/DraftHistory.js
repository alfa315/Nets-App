import React from 'react'
import { Tab } from 'semantic-ui-react'
import MainLoader from '../loaders/MainLoader.js'
import HistoryList from './HistoryList.js'


const DraftHistory = (props) => {
  if (props.players.length === 0 || props.players === undefined) {
    return (
      <MainLoader />
    )
  } else {
    let playerListOne = props.players.slice(0,5).map((player, idx) => <HistoryList key={idx} player={player}/>)
    let playerListTwo = props.players.slice(5,10).map((player, idx) => <HistoryList key={idx} player={player}/>)
    return (
      <Tab.Pane style = {{height: "315px"}}>
        <div className='left'>
          {playerListOne}
        </div>
        <div className='right' style = {{marginRight: '50px'}}>
          {playerListTwo}
        </div>
      </Tab.Pane>
    )
  }
}

export default DraftHistory

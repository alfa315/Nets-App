import React from 'react'
import DraftHistory from './DraftHistory.js'
import Prospects from './Prospects.js'
import TradeValue from './TradeValue.js'
import { Tab } from 'semantic-ui-react'

const DraftTab = (props) => {
  let panes = [
    { menuItem: 'Nets Draft History', render: () => <DraftHistory players={props.drafted}/> },
    { menuItem: 'Draft Prospects', render: () => <Prospects /> },
    { menuItem: 'Draft Pick Trade Value', render: () => <TradeValue oneD={props.oneD} oneDD={props.oneDD} oneDDD={props.oneDDD} twoD={props.twoD} twoDD={props.twoDD} twoDDD={props.twoDDD} handleOneD = {props.handleOneD} handleOneDD = {props.handleOneDD} handleOneDDD = {props.handleOneDDD} handleTwoD = {props.handleTwoD} handleTwoDD = {props.handleTwoDD} handleTwoDDD = {props.handleTwoDDD} /> },
  ]
  return (
    <div style={{width: '60%'}} className='right'>
      <Tab panes={panes}  defaultActiveIndex={0} />
    </div>
  )
}

export default DraftTab

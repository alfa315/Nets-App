import React from 'react'
import { Tab, Dropdown, Icon } from 'semantic-ui-react'

const TradeValue = (props) => {
  let values = [0, 4000, 3100, 2670, 2410, 2240, 2110, 2000, 1910, 1830, 1720, 1600, 1500, 1400, 1320, 1240, 1180, 1130, 1080, 1030, 980, 920, 860, 800, 750, 700, 660, 620, 570, 520, 470, 360, 350, 330, 320, 300, 290, 280, 270, 250, 240, 230, 220, 210, 200, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 90, 80, 70, 60, 50]


  let options = []
  for (let i = 0; i < 61; i++) {
    options.push({key: i, value: values[i], text: `Pick ${i}`})
  }
  let teamTwo = props.twoD + props.twoDD + props.twoDDD
  let teamOne = props.oneD + props.oneDD + props.oneDDD

  return (
    <Tab.Pane style = {{height: "315px"}}>
      <div style={{display: "flex"}}>
        <div>
          <h1>Team 1</h1>
          <Dropdown style = {{display: "block", marginBottom: "7px"}} onChange={props.handleOneD} placeholder='Choose First Pick...' search selection options={options} />
          <Dropdown style = {{display: "block", marginBottom: "7px"}} onChange={props.handleOneDD} placeholder='Choose Second Pick...' search selection options={options} />
          <Dropdown style = {{display: "block"}} onChange={props.handleOneDDD} placeholder='Choose Third Pick...' search selection options={options} />
          <h4 style={{textAlign: 'center'}}>Trade Value</h4>
          <p style={{textAlign: 'center'}}>{props.oneD + props.oneDD + props.oneDDD}</p>
        </div>

        <div className='centered' style = {{marginTop: "10%"}}>
          <h1>Trade Value Winner:</h1>
          {teamOne > teamTwo ? <Icon name='pointing left' size='huge'></Icon> : teamOne < teamTwo ? <Icon name='pointing right'  size='huge'></Icon> : <h4>Trade Value is equal or no selections have been made</h4>}
          {teamOne > teamTwo ? <h4>Trade value favors Team One</h4> : teamOne < teamTwo ? <h4>Trade value favors Team Two</h4> : ""}
        </div>

        <div>
          <h1>Team 2</h1>
          <Dropdown style = {{display: "block", marginBottom: "7px"}} onChange={props.handleTwoD} placeholder='Choose First Pick...' search selection options={options} />
          <Dropdown style = {{display: "block", marginBottom: "7px"}} onChange={props.handleTwoDD} placeholder='Choose Second Pick...' search selection options={options} />
          <Dropdown style = {{display: "block"}} onChange={props.handleTwoDDD} placeholder='Choose Third Pick...' search selection options={options} />
          <h4 style={{textAlign: 'center'}}>Trade Value</h4>
          <p style={{textAlign: 'center'}}>{props.twoD + props.twoDD + props.twoDDD}</p>
        </div>
      </div>
    </Tab.Pane>
  )
}

export default TradeValue

import React from 'react'
import { VictoryLine, VictoryChart } from 'victory';
import { Dropdown, Icon } from 'semantic-ui-react'

const LineVisual = (props) => {
  if (props.data.length < 2) {
    return (
      <div className='centered'>
        <Icon size="massive" name='close' /> <h1 className="centered"> Rookie Player Does Not Have Data For Chart</h1> <Icon size="massive" name='close' />

      </div>
    )
  } else {
    let organizedData = []

    for(let i = props.data.length -1; i > -1; i--) {
      organizedData.push({Year: "'"+props.years[i].toString().slice(2), Total: parseFloat(props.data[i])})
    }

    return (
      <div className='centered'>
        <h1 className='centered'>{props.chartTitle} Over Career</h1>
        <h3>Choose a Different Category Below</h3>
        <Dropdown onChange={props.handleChange} placeholder='Choose Stat...' search selection options={props.options} />
        <VictoryChart
          height={190}
          width={350}
          >
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"},
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
            data={organizedData}
            x="Year"
            y="Total"
          />
        </VictoryChart>
      </div>
    )
  }
}

export default LineVisual

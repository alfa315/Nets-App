import React from 'react'
import { VictoryLine, VictoryChart } from 'victory';
import { Dropdown } from 'semantic-ui-react'

const LineVisual = (props) => {
  let organizedData = []

  for(let i = props.data.length -1; i > -1; i--) {
    organizedData.push({Year: "'"+props.years[i].toString().slice(2), Total: parseFloat(props.data[i])})
  }

  return (
    <div>
      <h1>Line Graph Will Be Here!</h1>
      <Dropdown onChange={props.handleChange} placeholder='Choose Stat...' search selection options={props.options} />
      <VictoryChart
        height={200}
        width={350}>
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc"},
          }}
          data={organizedData}
          x="Year"
          y="Total"
        />
      </VictoryChart>
    </div>
  )
}

export default LineVisual

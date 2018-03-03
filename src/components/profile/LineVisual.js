import React from 'react'
import {VictoryLine, VictoryChart, VictoryAxis} from 'victory';

const LineVisual = (props) => {
  let organizedData = []
  for(let i = 0; i < props.data.length; i++) {
    organizedData.push({Year: 2017-i, Total: parseFloat(props.data[i])})
  }

  let years = organizedData.map(o => o.Year)
  console.log(years)
  return (
    <div>
      <h1>Line Graph Will Be Here!</h1>
      <VictoryChart
        height={200}
        width={350}
      >
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={years.reverse()}
        tickFormat={years.reverse()}
      />
      <VictoryAxis
        dependentAxis
      />
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

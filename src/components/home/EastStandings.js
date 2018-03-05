import React from 'react'
import EastItems from './EastItems.js'
import MainLoader from '../loaders/MainLoader.js'


const EastStandings = (props) => {
  if(props.standings.length === 0 || props.standings === undefined || props.teams.length === 0 || props.teams === undefined) {
    return (
      <MainLoader />
    )
  } else {
    let eastRows = props.standings.east.map((team, idx) => <EastItems item={team} teamIds={props.teams} key={idx}/>)

    return (
      <div className='centered right'>
        <h1>East Standings</h1>
        <table  className="ui celled collapsing table striped">
          <thead className='headers'>
            <tr>
              <th className='center aligned collapsing'>
                <h3>Rank</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>Team</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>Win %</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>Wins</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>Losses</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>Last Ten</h3>
              </th>
            </tr>
          </thead>
          <tbody>
          {eastRows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default EastStandings

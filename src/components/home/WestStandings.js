import React from 'react'
import WestItems from './WestItems.js'
import MainLoader from '../loaders/MainLoader.js'


const WestStandings = (props) => {
  if(props.standings.length === 0 || props.standings === undefined || props.teams.length === 0 || props.teams === undefined) {
    return (
      <MainLoader />
    )
  } else {
    let westRows = props.standings.west.map((team, idx) => <WestItems item={team} teamIds={props.teams} key={idx}/>)

    return (
      <div className='centered left'>
        <h1>West Standings</h1>
        <table  className="ui celled collapsing table">
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
          {westRows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default WestStandings

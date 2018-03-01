import React from 'react'
import PlayerRow from './PlayerRow.js'

export default class RosterTable extends React.Component {

  render() {
    let player = this.props.playerBios.map((bio, idx) => <PlayerRow bio={bio} key={idx}/>)
    return (
      <div>
        <h1>2017-2018 Brooklyn Nets Roster</h1>
        <table className="ui inverted celled padded table">
          <thead className='headers'>
            <tr>
              <th className='center aligned collapsing'>
                <h3>Name</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>Height</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>Weight</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>Date of Birth</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>Experience</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {player}
          </tbody>
        </table>
      </div>
    )
  }
}

import React from 'react'
import PlayerRow from './PlayerRow.js'

export default class RosterTable extends React.Component {

  render() {
    let player = this.props.playerBios.map((bio, idx) => <PlayerRow bio={bio} id={bio.personId} key={idx}/>)
    return (
      <div className='bottomMarg'>
        <h1 className='centered'>2017-2018 Brooklyn Nets Roster</h1>
        <hr></hr>
        <table className="ui striped celled collapsing padded table">
          <thead className='headers'>
            <tr>
              <th className='center aligned collapsing'>
                <h3>Name</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>Position</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>Number</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>Height</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>Weight</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>Age</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>Experience</h3>
              </th>
              <th className='center aligned collapsing'>
                <h3>College</h3>
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

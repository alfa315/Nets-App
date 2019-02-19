import React from 'react'
import MainLoader from '../loaders/MainLoader.js'
import PlayerRow from './PlayerRow.js'

export default class RosterTable extends React.Component {

  render() {
    if (this.props.playerBios.length < this.props.playerIds.length || this.props.playerBios.length === 0) {
      return (
        <MainLoader />
      )
    } else {
      let player = this.props.playerBios.map((bio, idx) => <PlayerRow bio={bio} id={bio.personId} key={idx}/>)
      return (
        <div className='centered bottomMarg'>
          <h1 className='centered'>2018-2019 Brooklyn Nets Roster</h1>
          <hr></hr>
          <table className="ui celled collapsing compact padded table" style={{fontSize: "medium"}}>
            <thead className='headers'>
              <tr>
                <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
                  <h3>Name</h3>
                </th>
                <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
                  <h3>Position</h3>
                </th>
                <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
                  <h3>Number</h3>
                </th>
                <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
                  <h3>Height</h3>
                </th>
                <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
                  <h3>Weight</h3>
                </th>
                <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
                  <h3>Age</h3>
                </th>
                <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
                  <h3>Experience</h3>
                </th>
                <th className='center aligned' style={{color: 'white', backgroundColor: "black"}}>
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
}

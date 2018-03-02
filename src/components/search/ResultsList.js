import React from 'react'
import ResultsItem from './ResultsItem.js'
import { List } from 'semantic-ui-react'

export default class ResultsList extends React.Component {


  render() {
    if (this.props.results.length === 0) {
      return(
        <h1>No Players Found</h1>
      )
    } else {
      let player = this.props.results.map((bio, idx) => <ResultsItem results={bio} teams={this.props.teams} id={bio.personId} key={idx}/>)
      return(
        <div>
          <List>
            {player}
          </List>
        </div>
      )
    }
  }
}

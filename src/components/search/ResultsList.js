import React from 'react'
import ResultsItem from './ResultsItem.js'
import { List } from 'semantic-ui-react'
import MainLoader from '../loaders/MainLoader.js'


export default class ResultsList extends React.Component {


  render() {
    if ((this.props.searching === true && this.props.results.length === 0) || this.props.results === undefined) {
      return(
        <MainLoader />
      )
    } else if (this.props.results.length === 0 && this.props.searching === false) {
      return (
        <h1> No Players Found. </h1>
      )
    } else if (this.props.results.length > 0){
      let player = this.props.results.map((bio, idx) => <ResultsItem results={bio} teams={this.props.teams} id={bio.personId} key={idx}/>)
      return(
        <div className='searchList'>
          <List>
            {player}
          </List>
        </div>
      )
    }
  }
}

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
        <h1 style={{textAlign: 'center', marginTop: '100px', fontSize: '50px'}}> No Players Found. </h1>
      )
    } else if (this.props.results.length > 0){

      let noDupes = []
      for (let i = 0; i < this.props.results.length; i++) {
        if (!noDupes.includes(this.props.results[i])){
          noDupes.push(this.props.results[i])
        }
      }
      let player = noDupes.map((bio, idx) => <ResultsItem results={bio} teams={this.props.teams} id={bio.personId} key={idx}/>)
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

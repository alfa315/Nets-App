import React from 'react'
import MainLoader from '../loaders/MainLoader.js'
import { List, Image } from 'semantic-ui-react'

const ResultsItem = (props) => {

  if(props.results.length === 0 || props.results === undefined || props.teams.length === 0 || props.teams === undefined) {
    return (
      <MainLoader />
    )
  } else {
    let lastName = props.results.lastName.replace(/[.']/g,'').split(" ").join("_")
    let firstName = props.results.firstName.replace(/[.']/g,'')

    let team = props.teams.find(o => o.teamId === props.results.teamId)

    return (
      <List.Item className='searchItem'>
        <Image circular size='small'  src={`https://nba-players.herokuapp.com/players/${lastName}/${firstName}`} />
        <List.Content className='searchContent'>
          <a href={`/player/${props.id}`}><List.Header as='a'>{props.results.firstName} {props.results.lastName}</List.Header></a>
          <List.Description><b>{props.results.pos}: #{props.results.jersey} - {team.fullName} </b></List.Description>
        </List.Content>
      </List.Item>
    )
  }
}

export default ResultsItem

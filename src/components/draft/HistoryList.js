import React from 'react'
import { List, Image } from 'semantic-ui-react'

const HistoryList = (props) => {
  return (
    <List>
      <List.Item>
        <Image avatar src={`https://nba-players.herokuapp.com/players/${props.player.lastName.replace(/[.']/g,'').split(" ").join("_")}/${props.player.firstName.replace(/[.']/g,'').split(" ").join("_")}`} />
        <List.Content>
          <List.Header><a href={`/player/${props.player.personId}`}>{props.player.firstName} {props.player.lastName}</a></List.Header>
          <List.Description>Drafted in {props.player.draft.seasonYear}, Round #{props.player.draft.roundNum} Pick #{props.player.draft.pickNum}</List.Description>
        </List.Content>
      </List.Item>
    </List>
  )
}

export default HistoryList

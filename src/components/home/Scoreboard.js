import React from 'react'
import GameCard from './GameCard.js'
import { Card } from 'semantic-ui-react'

const Scoreboard = (props) => {
  return (
    <Card.Group>
     <GameCard
      games={props.games}
     />
    </Card.Group>
  )
}

export default Scoreboard

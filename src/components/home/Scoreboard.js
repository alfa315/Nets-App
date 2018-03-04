import React from 'react'
import GameCard from './GameCard.js'
import { Card } from 'semantic-ui-react'

const Scoreboard = (props) => {
  return (
    <div className='scoreGroup'>
      <Card.Group>
       <GameCard
        games={props.games}
       />
      </Card.Group>
    </div>
  )
}

export default Scoreboard

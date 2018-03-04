import React from 'react'
import { Card } from 'semantic-ui-react'
import MainLoader from '../loaders/MainLoader.js'

const GameCard = (props) => {
  if(props.games.length === 0 || props.games === undefined) {
    return (
      <MainLoader />
    )
  } else {
    return <div className="scoreboard">
      {props.games.map((ev) => {
        return (
         <Card>
           <Card.Content>
             <Card.Description>
             <p>{ev.vTeam.triCode} {ev.isGameActivated ? <p>{ev.vTeam.score}</p> : <p>{"(" + ev.vTeam.win + "-" + ev.vTeam.loss + ")"}</p>}</p>
             <p>@</p>
             <p>{ev.hTeam.triCode} {ev.isGameActivated ? <p>{ev.hTeam.score}</p> : <p>{"(" + ev.hTeam.win + "-" + ev.hTeam.loss + ")"}</p>}</p>
             </Card.Description>
           </Card.Content>
           <Card.Content extra>
            {ev.startTimeEastern}
           </Card.Content>
         </Card>
        )
      })}
    </div>
  }
}

export default GameCard

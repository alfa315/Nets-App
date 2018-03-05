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
      {props.games.map((ev, idx) => {
        return (
         <Card key={idx}>
           <Card.Content>
             <Card.Description>
               {ev.statusNum === 3 && ev.vTeam.score > ev.hTeam.score ? <p><b><i>{ev.vTeam.triCode}</i></b></p> : <p>{ev.vTeam.triCode}</p>}

               {ev.isGameActivated ? <p>{ev.vTeam.score}</p> : ev.statusNum === 3 ? <p>{ev.vTeam.score}</p> : <p>{"(" + ev.vTeam.win + "-" + ev.vTeam.loss + ")"}</p>}

               <p>@</p>

               {ev.statusNum === 3 && ev.hTeam.score > ev.vTeam.score ? <p><b><i>{ev.hTeam.triCode}</i></b></p> : <p>{ev.hTeam.triCode}</p>}

               {ev.isGameActivated ? <p>{ev.hTeam.score}</p> : ev.statusNum === 3 ? <p>{ev.hTeam.score}</p> : <p>{"(" + ev.hTeam.win + "-" + ev.hTeam.loss + ")"}</p>}
             </Card.Description>
           </Card.Content>

           <Card.Content extra className='cardBtm'>
            {ev.isGameActivated ? <p> {ev.clock} {ev.period.current + "Q"} </p> : ev.statusNum === 3 ? <p><b>FINAL</b></p> : <p>{ev.startTimeEastern}</p>}
           </Card.Content>
         </Card>
        )
      })}
    </div>
  }
}

export default GameCard

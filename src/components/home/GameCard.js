import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import MainLoader from '../loaders/MainLoader.js'

const GameCard = (props) => {
  if(props.games.length === 0 || props.games === undefined) {
    return (
      <MainLoader />
    )
  } else if (props.status) {
    return <div className="scoreboard">
      <h2 className='centered'>{"Yesterday's Scoreboard"}</h2>
      {props.yesterday.map((ev, idx) => {
        return (
         <Card key={idx}>
           <Card.Content>
             <Card.Description>
                <img className='smallLogo' src={require(`../../images/${ev.vTeam.triCode}.png`)} alt="Not  Available"/>
               {ev.statusNum === 3 && parseInt(ev.vTeam.score, 10) > parseInt(ev.hTeam.score, 10) ? <p><b><i>{ev.vTeam.triCode}</i></b></p> : <p>{ev.vTeam.triCode}</p>}

               {ev.isGameActivated ? <p>{ev.vTeam.score}</p> : ev.statusNum === 3 ? <p>{ev.vTeam.score}</p> : <p>{"(" + ev.vTeam.win + "-" + ev.vTeam.loss + ")"}</p>}

               <p>@</p>

               <img className='smallLogo' src={require(`../../images/${ev.hTeam.triCode}.png`)} alt="Not  Available"/>
               {ev.statusNum === 3 && parseInt(ev.hTeam.score, 10) > parseInt(ev.vTeam.score, 10) ? <p><b><i>{ev.hTeam.triCode}</i></b></p> : <p>{ev.hTeam.triCode}</p>}

               {ev.isGameActivated ? <p>{ev.hTeam.score}</p> : ev.statusNum === 3 ? <p>{ev.hTeam.score}</p> : <p>{"(" + ev.hTeam.win + "-" + ev.hTeam.loss + ")"}</p>}
             </Card.Description>
           </Card.Content>

           <Card.Content extra className='cardBtm'>
            {ev.isGameActivated ? <p> {ev.clock} {ev.period.current + "Q"} </p> : ev.statusNum === 3 ? <p><b>FINAL</b></p> : <p>{ev.startTimeEastern}</p>}
           </Card.Content>
         </Card>
        )
      })}
      <div className='centered'><Button color="black" style={{width: "170px", marginTop: '15px'}} onClick={props.handleYClick}>Go to Current Day</Button></div>
    </div>
  } else {
    return <div className="scoreboard">
      <h2 className='centered'>{"Today's Scoreboard"}</h2>
      {props.games.map((ev, idx) => {
        return (
         <Card key={idx}>
           <Card.Content>
             <Card.Description>
                <img className='smallLogo' src={require(`../../images/${ev.vTeam.triCode}.png`)} alt="Not  Available"/>
               {ev.statusNum === 3 && parseInt(ev.vTeam.score, 10) > parseInt(ev.hTeam.score, 10) ? <p><b><i>{ev.vTeam.triCode}</i></b></p> : <p>{ev.vTeam.triCode}</p>}

               {ev.isGameActivated ? <p>{ev.vTeam.score}</p> : ev.statusNum === 3 ? <p>{ev.vTeam.score}</p> : <p>{"(" + ev.vTeam.win + "-" + ev.vTeam.loss + ")"}</p>}

               <p>@</p>

               <img className='smallLogo' src={require(`../../images/${ev.hTeam.triCode}.png`)} alt="Not  Available"/>
               {ev.statusNum === 3 && parseInt(ev.hTeam.score, 10) > parseInt(ev.vTeam.score, 10) ? <p><b><i>{ev.hTeam.triCode}</i></b></p> : <p>{ev.hTeam.triCode}</p>}

               {ev.isGameActivated ? <p>{ev.hTeam.score}</p> : ev.statusNum === 3 ? <p>{ev.hTeam.score}</p> : <p>{"(" + ev.hTeam.win + "-" + ev.hTeam.loss + ")"}</p>}
             </Card.Description>
           </Card.Content>

           <Card.Content extra className='cardBtm'>
            {ev.isGameActivated ? <p> {ev.clock} {ev.period.current + "Q"} </p> : ev.statusNum === 3 ? <p><b>FINAL</b></p> : <p>{ev.startTimeEastern}</p>}
           </Card.Content>
         </Card>
        )
      })}
      <div className='centered'><Button color="black" style={{width: "170px", marginTop: '15px'}} onClick={props.handleYClick}>Go to Previous Day</Button></div>
    </div>
  }
}

export default GameCard

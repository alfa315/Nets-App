import React from 'react'
import MainLoader from '../loaders/MainLoader.js'
import { Card, Image } from 'semantic-ui-react'


const TeamLeaders = (props) => {
  if(props.players.length === 0 || props.players === undefined || Object.keys(props.leaders).length === 0 || props.leaders === undefined) {
    return (
      <MainLoader />
    )
  } else {
    let ppgName = props.players.find(o => o.personId === props.leaders.ppg[0].personId)
    let trpgName = props.players.find(o => o.personId === props.leaders.trpg[0].personId)
    let apgName = props.players.find(o => o.personId === props.leaders.apg[0].personId)
    let fgpName = props.players.find(o => o.personId === props.leaders.fgp[0].personId)
    let spgName = props.players.find(o => o.personId === props.leaders.spg[0].personId)
    let bpgName = props.players.find(o => o.personId === props.leaders.bpg[0].personId)

    return (
      <div className='centered'>
        <h1>Team Leaders</h1>
        <Card style={{width: "14%"}}>
          <h3>Points Per Game:</h3>
          <Image src={`https://nba-players.herokuapp.com/players/${ppgName.lastName.replace(/[.']/g,'').split(" ").join("_")}/${ppgName.firstName.replace(/[.']/g,'').split(" ").join("_")}`} />
          <Card.Content>
            <Card.Header>
              <a href={`/player/${props.leaders.ppg[0].personId}`}>{ppgName.firstName} {ppgName.lastName}</a>
            </Card.Header>
            <Card.Description>
              <h5>{props.leaders.ppg[0].value}</h5>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card style={{width: "14%"}}>
          <h3>Rebounds Per Game:</h3>
          <Image src={`https://nba-players.herokuapp.com/players/${trpgName.lastName.replace(/[.']/g,'').split(" ").join("_")}/${trpgName.firstName.replace(/[.']/g,'').split(" ").join("_")}`} />
          <Card.Content>
            <Card.Header>
              <a href={`/player/${props.leaders.trpg[0].personId}`}>{trpgName.firstName} {trpgName.lastName}</a>
            </Card.Header>
            <Card.Description>
              <h5>{props.leaders.trpg[0].value}</h5>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card style={{width: "14%"}}>
          <h3>Assists Per Game:</h3>
          <Image src={`https://nba-players.herokuapp.com/players/${apgName.lastName.replace(/[.']/g,'').split(" ").join("_")}/${apgName.firstName.replace(/[.']/g,'').split(" ").join("_")}`} />
          <Card.Content>
            <Card.Header>
              <a href={`/player/${props.leaders.apg[0].personId}`}>{apgName.firstName} {apgName.lastName}</a>
            </Card.Header>
            <Card.Description>
              <h5>{props.leaders.apg[0].value}</h5>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card style={{width: "14%"}}>
          <h3>Field Goal Percentage:</h3>
          <Image src={`https://nba-players.herokuapp.com/players/${fgpName.lastName.replace(/[.']/g,'').split(" ").join("_")}/${fgpName.firstName.replace(/[.']/g,'').split(" ").join("_")}`} />
          <Card.Content>
            <Card.Header>
              <a href={`/player/${props.leaders.fgp[0].personId}`}>{fgpName.firstName} {fgpName.lastName}</a>
            </Card.Header>
            <Card.Description>
              <h5>{props.leaders.fgp[0].value}</h5>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card style={{width: "14%"}}>
          <h3>Steals Per Game:</h3>
          <Image src={`https://nba-players.herokuapp.com/players/${spgName.lastName.replace(/[.']/g,'').split(" ").join("_")}/${spgName.firstName.replace(/[.']/g,'').split(" ").join("_")}`} />
          <Card.Content>
            <Card.Header>
              <a href={`/player/${props.leaders.spg[0].personId}`}>{spgName.firstName} {spgName.lastName}</a>
            </Card.Header>
            <Card.Description>
              <h5>{props.leaders.spg[0].value}</h5>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card style={{width: "14%"}}>
          <h3>Blocks Per Game:</h3>
          <Image src={`https://nba-players.herokuapp.com/players/${bpgName.lastName.replace(/[.']/g,'').split(" ").join("_")}/${bpgName.firstName.replace(/[.']/g,'').split(" ").join("_")}`} />
          <Card.Content>
            <Card.Header>
              <a href={`/player/${props.leaders.bpg[0].personId}`}>{bpgName.firstName} {bpgName.lastName}</a>
            </Card.Header>
            <Card.Description>
              <h5>{props.leaders.bpg[0].value}</h5>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default TeamLeaders

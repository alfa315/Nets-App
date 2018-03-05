import React from 'react'
import MainLoader from '../loaders/MainLoader.js'
import { Tab, Dropdown, Button } from 'semantic-ui-react'



const PlayerStats = (props) => {
  if(props.numbers.length === 0 || props.numbers === undefined) {
    return (
      <MainLoader />
    )
  } else {
    let list = []
    for (let i = 0; i < props.allPlayers.length; i++) {
      list.push({key: props.allPlayers[i].personId, value: props.allPlayers[i].personId, text: props.allPlayers[i].firstName + " " +  props.allPlayers[i].lastName })
    }
    let today = new Date()
    let dd = parseInt(today.getDate(), 10)
    let mm = parseInt(today.getMonth()+1, 10)
    let yyyy = parseInt(today.getFullYear(), 10)

    const panes = [
      { menuItem: 'Current Season', render: () => <Tab.Pane>
        <div className="left">
          <h3>Points Per Game:</h3> <p>{props.numbers.stats.latest.ppg}</p>
          <h3>Rebounds Per Game:</h3> <p>{props.numbers.stats.latest.rpg}</p>
          <h3>Assists Per Game:</h3> <p>{props.numbers.stats.latest.apg}</p>
          <h3>Steals Per Game:</h3> <p>{props.numbers.stats.latest.spg}</p>
          <h3>Blocks Per Game:</h3> <p>{props.numbers.stats.latest.bpg}</p>
        </div>

        <div className="right margRight">
          <h3>Field Goal Percentage:</h3> <p>{((props.numbers.stats.latest.fgm/props.numbers.stats.latest.fga)*100).toFixed(1)}%</p>
          <h3>Three Point Field Goal Percentage:</h3> <p>{((props.numbers.stats.latest.tpm/props.numbers.stats.latest.tpa)*100).toFixed(1)}%</p>
          <h3>Free Throw Percentage:</h3> <p>{((props.numbers.stats.latest.ftm/props.numbers.stats.latest.fta)*100).toFixed(1)}%</p>
          <h3>Turnovers Per Game:</h3>
          <p>{props.numbers.stats.latest.topg}</p>
          <h3>Plus-Minus:</h3>
          <p>{props.numbers.stats.latest.plusMinus}</p>
        </div>
      </Tab.Pane> },

      { menuItem: 'Career Totals', render: () => <Tab.Pane>
        <div className="left">
          <h3>Points Per Game:</h3> <p>{props.numbers.stats.careerSummary.ppg}</p>
          <h3>Rebounds Per Game:</h3> <p>{props.numbers.stats.careerSummary.rpg}</p>
          <h3>Assists Per Game:</h3> <p>{props.numbers.stats.careerSummary.apg}</p>
          <h3>Steals Per Game:</h3>
          <p>{props.numbers.stats.careerSummary.spg}</p>
          <h3>Blocks Per Game:</h3>
          <p>{props.numbers.stats.careerSummary.bpg}</p>
        </div>

        <div className="right margRight">
          <h3>Field Goal Percentage:</h3> <p>{((props.numbers.stats.careerSummary.fgm/props.numbers.stats.careerSummary.fga)*100).toFixed(1)}%</p>
          <h3>Three Point Field Goal Percentage:</h3> <p>{((props.numbers.stats.careerSummary.tpm/props.numbers.stats.careerSummary.tpa)*100).toFixed(1)}%</p>
          <h3>Free Throw Percentage:</h3> <p>{((props.numbers.stats.careerSummary.ftm/props.numbers.stats.careerSummary.fta)*100).toFixed(1)}%</p>
          <h3>Turnovers Per Game:</h3>
          <p>{(props.numbers.stats.careerSummary.turnovers/props.numbers.stats.careerSummary.gamesPlayed).toFixed(1)}</p>
          <h3>Plus-Minus:</h3>
          <p>{props.numbers.stats.careerSummary.plusMinus}</p>
        </div>
      </Tab.Pane> },

      { menuItem: 'Personal Information', render: () => <Tab.Pane>
        <div className="left large bold">
          <p>Drafted:</p>
          <p>Prior Affiliation:</p>
          <p>Height:</p>
          <p>Weight:</p>
          <p>Age:</p>
          <p>Years Experience:</p>
        </div>
        <div className="centered large">
          <p>{props.bio.draft.pickNum.length === 0 ? "Undrafted" : "Round #" + props.bio.draft.roundNum + ", Pick #" + props.bio.draft.pickNum + " (" + props.bio.draft.seasonYear + ")"}</p>
          <p>{props.bio.lastAffiliation}</p>
          <p>{props.bio.heightFeet} - {props.bio.heightInches}</p>
          <p>{props.bio.weightPounds} lbs</p>
          <p> {mm > parseInt(props.bio.dateOfBirthUTC.slice(5,7), 10) ?
            yyyy - parseInt(props.bio.dateOfBirthUTC.slice(0,4), 10) :
            mm === parseInt(props.bio.dateOfBirthUTC.slice(5,7), 10) &&
            dd > parseInt(props.bio.dateOfBirthUTC.slice(8,10), 10) ?
            (yyyy - parseInt(props.bio.dateOfBirthUTC.slice(0,4), 10)) :
            yyyy - parseInt(props.bio.dateOfBirthUTC.slice(0,4), 10) - 1}
          </p>
          <p>{parseInt(props.bio.yearsPro, 10) === 0 ? "Rookie" : props.bio.yearsPro}</p>
        </div>
      </Tab.Pane> },

      { menuItem: 'Player Comparison', render: () => <Tab.Pane>
        <div className="centered">
          <h1>Please Select Another Player to Compare</h1>
          <Dropdown onChange={props.handleChange} placeholder='Select Player'  search selection options={list} />
          <br></br>
          <Button className='compButton' onClick={props.handleClick}>Compare Players</Button>
        </div>
      </Tab.Pane> }
    ]
    return (
      <div className='bottomMarg'>
        <div>
          <h1>Player Statistics</h1>
          <Tab menu={{ fluid: true, vertical: true, tabular: 'right margRight' }} panes={panes} />
        </div>
      </div>
    )
  }
}

export default PlayerStats

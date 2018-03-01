import React from 'react'
import MainLoader from '../loaders/MainLoader.js'
import { Tab } from 'semantic-ui-react'



const PlayerStats = (props) => {
  if(props.numbers.length === 0 || props.numbers === undefined) {
    return (
      <MainLoader />
    )
  } else {
    const panes = [
      { menuItem: 'Current Season', render: () => <Tab.Pane>
        <div className="left">
          <h3>Points Per Game:</h3> <p>{props.numbers.stats.latest.ppg}</p>
          <h3>Rebounds Per Game:</h3> <p>{props.numbers.stats.latest.rpg}</p>
          <h3>Assists Per Game:</h3> <p>{props.numbers.stats.latest.apg}</p>
          <h3>Steals Per Game:</h3> <p>{props.numbers.stats.latest.spg}</p>
          <h3>Blocks Per Game:</h3> <p>{props.numbers.stats.latest.bpg}</p>
        </div>

        <div className="right">
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

        <div className="right">
          <h3>Field Goal Percentage:</h3> <p>{((props.numbers.stats.careerSummary.fgm/props.numbers.stats.careerSummary.fga)*100).toFixed(1)}%</p>
          <h3>Three Point Field Goal Percentage:</h3> <p>{((props.numbers.stats.careerSummary.tpm/props.numbers.stats.careerSummary.tpa)*100).toFixed(1)}%</p>
          <h3>Free Throw Percentage:</h3> <p>{((props.numbers.stats.careerSummary.ftm/props.numbers.stats.careerSummary.fta)*100).toFixed(1)}%</p>
          <h3>Turnovers Per Game:</h3>
          <p>{(props.numbers.stats.careerSummary.turnovers/props.numbers.stats.careerSummary.gamesPlayed).toFixed(1)}</p>
          <h3>Plus-Minus:</h3>
          <p>{props.numbers.stats.careerSummary.plusMinus}</p>
        </div>
      </Tab.Pane> },

      { menuItem: 'Player Comparison', render: () => <Tab.Pane>
        <div className="left">
          <h3>Points Per Game:</h3> <p>{props.numbers.stats.latest.ppg}</p>
          <h3>Rebounds Per Game:</h3> <p>{props.numbers.stats.latest.rpg}</p>
          <h3>Assists Per Game:</h3> <p>{props.numbers.stats.latest.apg}</p>
        </div>

        <div className="right">
          <h3>Field Goal Percentage:</h3> <p>{((props.numbers.stats.latest.fgm/props.numbers.stats.latest.fga)*100).toFixed(1)}%</p>
          <h3>Three Point Field Goal Percentage:</h3> <p>{((props.numbers.stats.latest.tpm/props.numbers.stats.latest.tpa)*100).toFixed(1)}%</p>
          <h3>Free Throw Percentage:</h3> <p>{((props.numbers.stats.latest.ftm/props.numbers.stats.latest.fta)*100).toFixed(1)}%</p>
        </div>
      </Tab.Pane> },
    ]
    return (
      <div>
        <div>
          <h1>Player Statistics</h1>
          <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} />
        </div>
      </div>
    )
  }
}

export default PlayerStats

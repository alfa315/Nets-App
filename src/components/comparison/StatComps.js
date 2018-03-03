import React from 'react'
import MainLoader from '../loaders/MainLoader.js'
import { Table, Header, Icon } from 'semantic-ui-react'



const StatComps = (props) => {
  if(props.p1Bio === undefined || props.p2Bio === undefined || props.pOne.length === 0 || props.pTwo.length === 0 || props.pOne === undefined || props.pTwo === undefined) {
    return (
      <MainLoader />
    )
  } else {
    return (
      <div className='centered'>
        <div className='left centered margLeft'>
          <img className='centered medium' src={`https://nba-players.herokuapp.com/players/${props.p1Bio.lastName.replace(/[.']/g,'')}/${props.p1Bio.firstName.replace(/[.']/g,'')}`} alt="Not Available" />
          <h1>{props.p1Bio.firstName} {props.p1Bio.lastName}</h1>
          <Table basic='very' celled collapsing>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Points Per Game
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pOne.stats.careerSummary.ppg}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pOne.stats.careerSummary.ppg) > parseFloat(props.pTwo.stats.careerSummary.ppg) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Rebounds Per Game
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pOne.stats.careerSummary.rpg}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pOne.stats.careerSummary.rpg) > parseFloat(props.pTwo.stats.careerSummary.rpg) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Assists Per Game
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pOne.stats.careerSummary.apg}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pOne.stats.careerSummary.apg) > parseFloat(props.pTwo.stats.careerSummary.apg) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Blocks Per Game
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pOne.stats.careerSummary.bpg}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pOne.stats.careerSummary.bpg) > parseFloat(props.pTwo.stats.careerSummary.bpg) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Steals Per Game
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pOne.stats.careerSummary.spg}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pOne.stats.careerSummary.spg) > parseFloat(props.pTwo.stats.careerSummary.spg) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Double-Doubles
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pOne.stats.careerSummary.dd2}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pOne.stats.careerSummary.dd2) > parseFloat(props.pTwo.stats.careerSummary.dd2) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Triple-Doubles
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pOne.stats.careerSummary.td3}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pOne.stats.careerSummary.td3) > parseFloat(props.pTwo.stats.careerSummary.td3) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Plus-Minus
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pOne.stats.careerSummary.plusMinus}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pOne.stats.careerSummary.plusMinus) > parseFloat(props.pTwo.stats.careerSummary.plusMinus) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Games Played
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pOne.stats.careerSummary.gamesPlayed}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pOne.stats.careerSummary.gamesPlayed) > parseFloat(props.pTwo.stats.careerSummary.gamesPlayed) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>

        <div className='right centered margRight'>
          <img className='centered medium' src={`https://nba-players.herokuapp.com/players/${props.p2Bio.lastName.replace(/[.']/g,'')}/${props.p2Bio.firstName.replace(/[.']/g,'')}`} alt="Not Available" />
          <h1>{props.p2Bio.firstName} {props.p2Bio.lastName}</h1>
          <Table basic='very' celled collapsing>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Points Per Game
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pTwo.stats.careerSummary.ppg}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pTwo.stats.careerSummary.ppg) > parseFloat(props.pOne.stats.careerSummary.ppg) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Rebounds Per Game
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pTwo.stats.careerSummary.rpg}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pTwo.stats.careerSummary.rpg) > parseFloat(props.pOne.stats.careerSummary.rpg) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Assists Per Game
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pTwo.stats.careerSummary.apg}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pTwo.stats.careerSummary.apg) > parseFloat(props.pOne.stats.careerSummary.apg) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Blocks Per Game
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pTwo.stats.careerSummary.bpg}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pTwo.stats.careerSummary.bpg) > parseFloat(props.pOne.stats.careerSummary.bpg) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Steals Per Game
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pTwo.stats.careerSummary.spg}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pTwo.stats.careerSummary.spg) > parseFloat(props.pOne.stats.careerSummary.spg) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Double-Doubles
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pTwo.stats.careerSummary.dd2}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pTwo.stats.careerSummary.dd2) > parseFloat(props.pOne.stats.careerSummary.dd2) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Triple-Doubles
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pTwo.stats.careerSummary.td3}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pTwo.stats.careerSummary.td3) > parseFloat(props.pOne.stats.careerSummary.td3) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Plus-Minus
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pTwo.stats.careerSummary.plusMinus}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pTwo.stats.careerSummary.plusMinus) > parseFloat(props.pOne.stats.careerSummary.plusMinus) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      Games Played
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <p>{props.pTwo.stats.careerSummary.gamesPlayed}</p>
                </Table.Cell>
                <Table.Cell>
                  {parseFloat(props.pTwo.stats.careerSummary.gamesPlayed) > parseFloat(props.pOne.stats.careerSummary.gamesPlayed) ? <Icon color='yellow' name='star' /> : <Icon color='red' name='star' /> }
                </Table.Cell>
              </Table.Row>

            </Table.Body>
          </Table>
        </div>
      </div>
    )
  }
}

export default StatComps

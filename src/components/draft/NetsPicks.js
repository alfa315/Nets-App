import React from 'react'
import { Popup, Card } from 'semantic-ui-react'


const NetsPicks = (props) => {
  return (
    <Card style={{width: '285px', height: '330px'}}>
      <Card.Content>
        <Card.Header>
          2018 Nets Draft Picks
        </Card.Header>
        <Card.Meta>
          Hover Over For Details
        </Card.Meta>
        <Card.Description>
          <Popup
            trigger = {
              <p style={{marginBottom: "25px"}}>2018 1st Round Pick from Toronto - Currently projected 28th Pick</p>
            }
            inverted
            position = "right center"
            content = "Protected for selections 1-14"
          >
          </Popup>
          <Popup
            trigger = {
              <p style={{marginBottom: "25px"}}>2018 2nd Round Pick from Indiana - Projected for 2019 Draft</p>
            }
            inverted
            position = "right center"
            content = "Protected for selections 45-60 in 2018"
          >
          </Popup>
          <Popup
            trigger = {
              <p style={{marginBottom: "25px"}}>2018 2nd Round Pick from Orlando or Lakers - Projected to receive Lakers pick</p>
            }
            inverted
            position = "right center"
            content = "Will receive the least favorable of either the Magic or Lakers pick."
          >
          </Popup>
          <Popup
            trigger = {
              <p>2018 2nd Round Pick from Milwaukee Bucks - Currently Projected for 44th Pick</p>
            }
            inverted
            position = "right center"
            content = "Protected for selections 48-60 in 2018"
          >
          </Popup>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default NetsPicks

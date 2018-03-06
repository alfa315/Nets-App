import React from 'react'
import { Popup, Card, Rating } from 'semantic-ui-react'


const NetsPicks = (props) => {
  return (
    <Card style={{width: '250px', height: '300px'}}>
      <Card.Content>
        <Card.Header>
          2018
        </Card.Header>
        <Popup trigger={<Card.Description>
            Toronto Raptors 1st Round Pick - Projected 28th Pick
          </Card.Description>}>
          <Popup.Header>User Rating</Popup.Header>
          <Popup.Content>
            <Rating icon='star' defaultRating={3} maxRating={4} />
          </Popup.Content>
        </Popup>
      </Card.Content>
    </Card>
  )
}

export default NetsPicks

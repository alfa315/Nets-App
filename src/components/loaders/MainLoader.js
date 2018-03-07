import React from 'react'
import { Segment, Dimmer, Loader } from 'semantic-ui-react'

const MainLoader = () => {
  return (
    <div style={{height: '500px'}} className='ui-segment'>
      <Segment style={{height: '30%'}}>
        <Dimmer active>
          <Loader size='huge' active>Loading...</Loader>
        </Dimmer>
      </Segment>
    </div>
  )
}

export default MainLoader

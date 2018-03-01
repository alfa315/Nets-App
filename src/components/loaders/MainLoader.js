import React from 'react'
import { Segment, Dimmer, Loader } from 'semantic-ui-react'

const MainLoader = () => {
  return (
    <div className='ui-segment'>
      <Segment>
        <Dimmer active>
          <Loader size='huge' active>Loading...</Loader>
        </Dimmer>
      </Segment>
    </div>
  )
}

export default MainLoader

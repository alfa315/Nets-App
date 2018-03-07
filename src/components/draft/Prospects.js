import React from 'react'
import { Tab } from 'semantic-ui-react'
import ProspectsList from './ProspectsList.js'

const Prospects = (props) => {
  return (
    <Tab.Pane style = {{height: "315px"}}>
      <ProspectsList />
    </Tab.Pane>
  )
}

export default Prospects

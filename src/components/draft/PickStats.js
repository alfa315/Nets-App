import React from 'react'
import { Input } from 'semantic-ui-react'

const PickStats = (props) => {
  return (
    <Input onChange={props.handleChange} type='number' placeholder='Pick Number...' min='1' max='60' />
  )
}


export default PickStats

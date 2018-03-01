import React from 'react'

const PlayerRow = (props) => {
  return (
    <tr>
      <td><a href={`/team/${props.id}`}>{props.bio.firstName} {props.bio.lastName}</a></td>
      <td>{props.bio.heightFeet} Feet {props.bio.heightInches} Inches</td>
      <td>{props.bio.weightPounds}</td>
      <td>{props.bio.dateOfBirthUTC}</td>
      <td>{props.bio.yearsPro}</td>
    </tr>
  )
}

export default PlayerRow

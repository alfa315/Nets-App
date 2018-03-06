import React from 'react'

const PlayerRow = (props) => {
  let today = new Date()
  let dd = parseInt(today.getDate(), 10)
  let mm = parseInt(today.getMonth()+1, 10)
  let yyyy = parseInt(today.getFullYear(), 10)
  return (
    <tr>
      <td><a href={`/player/${props.id}`}>{props.bio.firstName} {props.bio.lastName}</a></td>
      <td>{props.bio.pos}</td>
      <td>{props.bio.jersey}</td>
      <td>{props.bio.heightFeet} - {props.bio.heightInches}</td>
      <td>{props.bio.weightPounds} lbs</td>

      <td>{mm > parseInt(props.bio.dateOfBirthUTC.slice(5,7), 10) ?
        yyyy - parseInt(props.bio.dateOfBirthUTC.slice(0,4), 10) :
        mm === parseInt(props.bio.dateOfBirthUTC.slice(5,7), 10) &&
        dd > parseInt(props.bio.dateOfBirthUTC.slice(8,10), 10) ?
        (yyyy - parseInt(props.bio.dateOfBirthUTC.slice(0,4), 10)) :
        yyyy - parseInt(props.bio.dateOfBirthUTC.slice(0,4), 10) - 1}
      </td>

      <td>{parseInt(props.bio.yearsPro, 10) === 0 ? "Rookie" : props.bio.yearsPro}</td>
      <td>{props.bio.collegeName}</td>
    </tr>
  )
}

export default PlayerRow

import React from 'react'
import { Button } from 'semantic-ui-react'
import MainLoader from '../loaders/MainLoader.js'


const NewsContainer = (props) => {
  if(props.news.length === 0 || props.news === undefined) {
    return (
      <MainLoader />
    )
  } else {
    return (
      <div className="centered" style={{marginTop: "60px", marginBottom: "80px"}}>
        <h1>NETS NEWS</h1>
        <h2><a href={props.news[props.num].url} target="_blank">{props.news[props.num].title}</a></h2>
        <a href={props.news[props.num].url} target="_blank"><img className='mediumPic' src={props.news[props.num].urlToImage} alt="Not  Available"/></a>
        <p className='textBlock'>{props.news[props.num].description}</p>
        <p> - {props.news[props.num].author} </p>
        <p><Button color="black" style={{width: "100px"}} onClick={props.handlePrevious}>Previous</Button><Button onClick={props.handleNext} style={{width: "100px"}} color="black">Next</Button></p>
      </div>
    )
  }
}

export default NewsContainer

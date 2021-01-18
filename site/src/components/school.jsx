import React from 'react'
import positionStyles from "./position.module.css"
import { useStaticQuery, graphql } from 'gatsby'
import PersonalPic from '../images/personal.jpg'

export default function School({ data, title, subtitle, date, image, imgAlt, desc, link, courses, activities }) {
  
  /* 
  topics: [
    {
        title: 'courses'
        topicList: [
            {
                name: data structure,
                links: [{
                  abbrev: CS61B, 
                  link: 'www.'
                }]
            }
        ]
    },
    {
        title: 'activites'
    }
  ]
  
  */


  function coursesJSX(obj) {
    let rtn = []
    rtn.push(<React.Fragment>
      <b> {obj.title}</b>: </React.Fragment>)
    
    for (let i = 0; i < obj.topicList.length; i++) {
      let topic_obj = obj.topicList[i]
      rtn.push(<React.Fragment>{topic_obj.name} ({topic_obj.links.map(link_obj => {
          return (<React.Fragment><a href={link_obj.link} target="_blank">{link_obj.abbrev}</a></React.Fragment>)
      }).reduce((prev, curr) => [prev, ', ', curr])})
          </React.Fragment> )
      if (i != obj.topicList.length - 1) {
        rtn.push(<React.Fragment>, </React.Fragment>)

      }
    } 
    return rtn
  }

  function activitiesJSX(obj) {
    let rtn = []
    rtn.push(<React.Fragment>
      <b> {obj.title}</b>: </React.Fragment>)
    
    for (let i = 0; i < obj.topicList.length; i++) {
      let topic_obj = obj.topicList[i]
      rtn.push(<React.Fragment> { topic_obj.link? <a href={topic_obj.link} target="_blank" >{topic_obj.name}</a> : topic_obj.name}</React.Fragment>)      
      if (i != obj.topicList.length - 1) {
        rtn.push(<React.Fragment>, </React.Fragment>)

      }
    } 
    return rtn
  }

    return (<div className={positionStyles.personalIntro}>
      <div className={positionStyles.intro}>
        <div className={positionStyles.introHeading}>
          <div className={positionStyles.title}>
            <a href={link} target="_blank"><h2>{title}</h2></a>
          </div>
              
          <div className={positionStyles.date}>
            <h3>{date}</h3>
          </div>

        </div>
        {subtitle && <h4>{subtitle}</h4>}
        
        {courses && courses.map(coursesJSX)}
        <br></br>
        {activities && activities.map(activitiesJSX)}

        </div>

        <div className={positionStyles.pic}>
        <img src={image} alt={imgAlt}></img>

        </div>


    </div>
    );
}
  

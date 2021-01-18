import React from 'react'
import positionStyles from "./position.module.css"
import { useStaticQuery, graphql } from 'gatsby'
import PersonalPic from '../images/personal.jpg'

export default function Position({ data, title, date, image, imgAlt, desc, link }) {


  
    const { site } = useStaticQuery(graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
                info
              }
            }
            
            allFile(filter: {sourceInstanceName: {eq: "data"}}) {
            edges {
              node {
                id
                base
              }
            }
          }
        }

          
          
          

        `
    )
  
  


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
        
        <p>{desc}</p>


        </div>

        <div className={positionStyles.pic}>
        <img src={image} alt={imgAlt}></img>

        </div>


    </div>
    );
}
  

import React from 'react'
import positionStyles from "./position.module.css"
import activityStyles from "./activity.module.css"

import { useStaticQuery, graphql } from 'gatsby'
import PersonalPic from '../images/personal.jpg'
import { Link } from "gatsby"
import introStyles from "./intro.module.css"

// import styled from "styled-components";


export default function Intro({ data, title, date, image, imgAlt, desc, link, buttons, images }) {
  /* 
    buttons: [
        {
            name:
            link:
        }
    ]
  */

  


    return (<div className={positionStyles.personalIntro}>
      <div className={positionStyles.intro}>
        <div className={positionStyles.introHeading}>
            <h2>{title}</h2>
              
          <div className={positionStyles.date}>
            <h3>{date}</h3>
          </div>
        </div>
        
            <p>{desc}</p>
            
            {buttons && <div className={introStyles.aboutButtons}>
                <div className={introStyles.linkedInButton}>

                    <Link to={buttons[0].link} target="_blank">
                        <button>{buttons[0].name} </button>
                    </Link>
                </div>
                
                <Link to={buttons[1].link} target="_blank"><button>{buttons[1].name}</button></Link>
                    </div>}
                    {images && images.length > 1 && <div className={activityStyles.bottomRow}>
                        <div className={activityStyles.bottomImage}>
                            <img src={images[1]} width="100%" height=""></img>
                        </div>
                        <div className={activityStyles.bottomImage}>
                            <img src={images[2]} width="100%" height=""></img>
                        </div>
                    </div>}


        </div>

        <div className={positionStyles.pic}>
        <img src={image} alt={imgAlt}></img>

        </div>


    </div>
    );
}
  

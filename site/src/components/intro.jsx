import React from 'react'
import * as positionStyles from "./position.module.css"
import * as activityStyles from "./activity.module.css"

import { Link } from "gatsby"
import * as introStyles from "./intro.module.css"

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
                    <Link to={buttons[0].link} target="_blank" rel="noreferrer">
                        <button>{buttons[0].name} </button>
                    </Link>
                </div>
              
          <div className={introStyles.githubButton}>  
          <Link to={buttons[1].link} target="_blank" rel="noreferrer"><button>{buttons[1].name}</button></Link>
            </div>
          
          {buttons.length > 2 && <a href={buttons[2].link} target="_blank" rel="noreferrer"><button>{buttons[2].name}</button></a>}
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
  

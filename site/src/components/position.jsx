import React from 'react'
import * as positionStyles from "./position.module.css"

export default function Position({ data, title, date, image, imgAlt, desc, link }) {
  


    return (<div className={positionStyles.personalIntro}>
      <div className={positionStyles.intro}>
        <div className={positionStyles.introHeading}>
          <div className={positionStyles.title}>
            <a href={link} target="_blank" rel="noreferrer"><h2>{title}</h2></a>
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
  

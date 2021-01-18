import React, { Component } from 'react';
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import activityStyles from "./activity.module.css"
import { Link } from "gatsby"


export default function Activity({ data, title, description, images, buttonLink, buttonName, videos, buttonColor }) {

    return (
        <div className={activityStyles.activityComponent}>
            <div className={activityStyles.titleSection}>
                <h1>{title}</h1>
                <hr></hr>
            </div>
            <div className={activityStyles.mainRow}>
                <div className={activityStyles.description}>
                    <p>{description}</p>
                    {buttonName && <div className={buttonColor?activityStyles.redButton: activityStyles.moreButton}>
                        <Link to={buttonLink} target="_blank"><button>{buttonName}</button></Link>
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
                <div className={activityStyles.rightImage}>
                    {images && <img src={images[0]} width="" height="40%"></img>}
                    {videos && <video src={videos[0]} width="" height="40%"></video>}
                </div>
                
            </div>

            
            
      </div>
    )
  
      
  }
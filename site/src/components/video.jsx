import React, { Component } from 'react'
import videoStyles from "./video.module.css"
// import DroneVideo from "../videos/redondo_drone.mp4"

const Video = () => { 
    return (
        <div className={videoStyles.backgroundVideo}>
            <video autoplay playinline loop muted>
            {/* <source src={DroneCompressed} type="video/mov"/> */}
            {/* <source src={DroneVideo} type="video/mp4"/> */}
        </video>
        </div>
        
    );
    
}
 
export default Video;
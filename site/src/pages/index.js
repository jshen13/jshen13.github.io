import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import SEO from "../components/seo"
import Header from "../components/header"
import Intro from "../components/intro"

import * as homeStyles from "./index.module.css"
import HeroVideo from "../components/hero-video"
import { FiChevronRight } from "react-icons/fi"
import PersonalPic from "../images/personal2.jpg"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import BoatPier from "../images/art/boat_pier.jpg"
import DronePic from "../images/drone_wave.jpg"
import DronePVPic from "../images/drone_pv.jpg"


const IndexPage = ({ data }) => (
 
  <div className={homeStyles.mainHome}>
    <Header siteTitle="Home"/>

    <SEO title="Home" />

    <div className={homeStyles.mainVideo}>
      <HeroVideo />
      <div className={homeStyles.videoCenter}>
        <div className={homeStyles.title}>
          Hi! I'm Jeffrey
        </div>

        
        
      </div>
      <div className={homeStyles.aboutButton}>
        <Link to="/about/" className={homeStyles.btn}>
          <div className={homeStyles.borderAnimation}>
            <svg width="140px" height="50px" viewBox="0 0 140 50" className="border">
            <polyline points="139,1 139,49 1,49 1,1 139,1" className="bg-line" />
            <polyline points="139,1 139,49 1,49 1,1 139,1" className="hl-line" />
              </svg>
          </div>
          
            <span>About me <FiChevronRight style={{ transform: "translate(+0%, +15%)" }} /> </span>
          </Link>
        </div>
    </div>
    
    <div className={homeStyles.rest}>
      <Intro image={PersonalPic} title="Hello!" desc={data.site.siteMetadata.info + " I also enjoy golfing, flying drones, and drawing."}  buttons={[
                    {
                        name: <React.Fragment>LinkedIn <FaLinkedin style={{ transform: "translateY(+14%)" }}/></React.Fragment>,
                        link: "https://linkedin.com/in/jshen13"
                    },
                    {
                        name: <React.Fragment>Github <FaGithub style={{ transform: "translateY(+14%)" }}/></React.Fragment>,
                        link: "https://github.com/jshen13",
                    }
      ]} />
      
      <div className={homeStyles.pictures}>
        <div className={homeStyles.gallery3}>
          <img src={BoatPier}></img>
        </div>

        <div className={homeStyles.gallery3}>
          <img src={DronePic}></img>
        </div>

        <div className={homeStyles.gallery3}>
          <img src={DronePVPic}></img>
        </div>

      </div>

        
      
    </div>
                


    <footer style={{
            marginTop: `2rem`,
            textAlign: `center`
        }}>
          Jeffrey Shen © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>
          
          {` `}
          (<a href="https://github.com/jshen13/jshen13.github.io" target="_blank" rel="noreferrer">Github Repo</a>)
    </footer>
    <br></br>



  </div>
  
)

export default IndexPage

export const query = graphql`
query {
    site {
        siteMetadata {
            title
            info
        }
    }
}
`
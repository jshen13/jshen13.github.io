import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Position from "../components/position"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Activity from "../components/activity"

import SFRoad from "../images/art/sf_road.jpg"
import BoatPier from "../images/art/boat_pier.jpg"
import Tank from "../images/art/tank.jpg"
import DronePic from "../images/drone_wave.jpg"
import GolfPhoto from "../images/golf_trophy.jpg"

const Hobbies = ({ data }) => (
    <Layout siteTitle="Hobbies">
        <SEO title="Hobbies" />
        <p style={{ "paddingTop": 10 }}></p>
        <Activity title="Art" buttonName="View Art Gallery" buttonLink="/art" description={ <p>I attended <a href="http://www.us-fineart.com/" target="_blank">US Arts Education</a> from 2010 to 2019 assembling an art portfolio. I typically draw with pastel and sketches. </p>}images={[
            SFRoad,
            BoatPier,
            Tank
        ]} />
        
        <Activity title="Videos" buttonName="View Videos on YouTube" buttonLink="https://www.youtube.com/channel/UCUIydvu3NyNOVkrfcwuYCqg" buttonColor="#e62727" description={<p>I enjoy video editing and flying drones for fun. I've mostly been making travel montage videos.</p>} images={[
            DronePic
        ]}
        />
        
        <Activity title="Golf" description={ <p>I've been an avid golf player since I was 8 and played on my High School's Varsity Team. </p>}images={[
            GolfPhoto
        ]}/>
    </Layout>
    )

export default Hobbies

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

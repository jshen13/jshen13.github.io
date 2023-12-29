import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Position from "../components/position"
import Layout from "../components/layout"
import SEO from "../components/seo"
import School from "../components/school"
import Intro from "../components/intro"

import * as aboutStyles from "./about.module.css"
import personalPic from "../images/personal2.jpg"
import googleLogo from "../images/logos/google.png"
import appfolioLogo from "../images/logos/appfolio.png"
import qcLogo from "../images/logos/qualcomm.png"
import ngLogo from "../images/logos/ng.jpg"
import harmonyLogo from "../images/logos/harmony.jpg"
import boeingLogo from "../images/logos/boeing.png"
import calLogo from "../images/logos/ucb.png"
import southLogo from "../images/logos/southLogo.gif"
import Activity from "../components/activity"

import SFRoad from "../images/art/sf_road.jpg"
import DronePic from "../images/drone_wave.jpg"
import GolfPhoto from "../images/golf_trophy.jpg"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const SecondPage = ({data}) => (
  <Layout siteTitle="About">
        <SEO title="About" />
        
        <div className={aboutStyles.about}>
        
            <div className={aboutStyles.personalIntro}>

                <Intro image={personalPic} title="Hi, I'm Jeffrey Shen" desc={data.site.siteMetadata.info}  buttons={[
                    {
                        name: <React.Fragment>LinkedIn <FaLinkedin style={{ transform: "translateY(+14%)" }}/></React.Fragment>,
                        link: "https://linkedin.com/in/jshen13"
                    },
                    {
                        name: <React.Fragment>Github <FaGithub style={{ transform: "translateY(+14%)" }}/></React.Fragment>,
                        link: "https://github.com/jshen13",
                        icon: FaGithub
                    }
                    // , {
                    //     name: "Resume",
                    //     link: resume,
                    // }
                ]} />
            </div>
            
            <h1>Experience</h1>
            <hr></hr>
            <Position image={googleLogo} title="Google" link="https://about.google/" date="Nov 2023 - " desc={(<span>I'm currently working as a software engineer at Google in Sunnyvale, CA on the <a href="https://cloud.google.com/spanner" target="_blank" rel="noopener noreferrer">Spanner</a> Serving Team under Google Cloud.</span>)} />

            <Position image={appfolioLogo} title="AppFolio" link="https://www.appfolio.com/" date="Summer 2023" desc={<span>I worked as a Software Engineer at AppFolio on the Entitlements Team working on enabling the <a href="https://www.appfolio.com/articles/appfolio-property-manager-max" target="_blank" rel="noopener noreferrer">Max Tier Launch</a>.</span>} />

            <Position image={googleLogo} title="Google" link="https://about.google/" date="Summer 2022" desc="I interned at Google in Mountain View, CA working as a software engineering intern 
            on the Google Nest Team. I designed an end-to-end workflow to enable device initiated traffic to the Nest backend API which enables Matter and smart home hub features. 
            I implemented new roles, policies, and permission evaluation to expose a new authentication check in Java. I integrated this check into 2 APIs with QPS >1 mil 
            and monitored decrepencies with experiments to ramp pre-prod and prod rollout."  />

            <Position image={qcLogo} title="Qualcomm" link="https://www.qualcomm.com/" date="Summer 2021" desc="I interned at Qualcomm in San Diego, CA working remotely as a software engineering intern on the 5G Modem Software Team. As part of the sleep team, I created a comprehensive and automated test framework for a sleep prediction algorithm using C/C++, Python, and XML. This framework was able to allow quicker testing and iteration of the algorithm. I then created a Python Jupyter Notebook script to analyze and visualize the data from the sleep prediction algorithm, making recommendations for specific algorithms."  />

            <Position image={ngLogo} title="Northrop Grumman" link="https://www.northropgrumman.com/" desc="I interned at Northrop Grumman in Redondo Beach, CA working remotely as a software engineering intern. I wrote backend API routes for Dash.ible, a Dashboard for Ansible web app that monitors and configures virtual machines (VMs) using Node.js, allowing MongoDB queries and Ansible roles to be deployed on VMs. I also supported frontend development by creating a dynamic table of VM performance metrics using Angular and implemented functionality on side panes with additional VM and role information by connecting it to the backend." date="Summer 2020" />
            
            <Position image={harmonyLogo} title="Harmony" link="https://www.harmony.one/" desc="I was an Engineering Intern at Harmony in Mountain View, CA. I developed a Python script for testing cross-shard transactions on the Harmony blockchain. Using the Command Line Interface, I set up a wallet and helped load the network for stress testing." date="Winter 2019" />
            
            <Position image={boeingLogo} title="Boeing" link="https://www.boeing.com/" desc="As a high school intern, I worked at Boeing Space and Intelligence Systems in El Segundo, CA. I was trained under a mentor and worked with a group of interns to develop a Python program for comparing Bill of Materials Excel sheets." date="Summer 2018"/>

            <h1>Education</h1>
            <hr></hr>
            <School title="UC Berkeley" image={calLogo} link="https://www.berkeley.edu/" date="2019-2023" subtitle="B.S. Electrical Engineering & Computer Science" courses={[
                {
                    key: 1,
                    title: "Courses",
                    topicList: [
                        {
                            name: "Deep Neural Networks",
                            links: [{
                                key: 1,
                                abbrev: "CS 182",
                                link: "https://inst.eecs.berkeley.edu/~cs182/fa22/"
                            }] 
                        },
                        {
                            name: "Introduction to Database Systems",
                            links: [{
                                key: 1,
                                abbrev: "CS 186",
                                link: "https://cs186berkeley.net/"
                            }] 
                        },
                        {
                            name: "Computer Architecture and Engineering",
                            links: [{
                                key: 1,
                                abbrev: "CS 152",
                                link: "https://inst.eecs.berkeley.edu/~cs152/sp23/"
                            }] 
                        },
                        {
                            name: "Computer Graphics and Imaging",
                            links: [{
                                key: 1,
                                abbrev: "CS 184",
                                link: "https://cs184.eecs.berkeley.edu/sp22"
                            }] 
                        },
                        {
                            name: "Introduction to Machine Learning",
                            links: [{
                                key: 1,
                                abbrev: "CS 189",
                                link: "https://people.eecs.berkeley.edu/~jrs/189/"
                            }] 
                        },
                        {
                            name: "Introduction to Computer Vision and Computational Photography",
                            links: [{
                                key: 1,
                                abbrev: "CS 194-26",
                                link: "https://inst.eecs.berkeley.edu/~cs194-26/fa21/"
                            }] 
                        },
                        {
                            name: "Optimization Models in Engineering",
                            links: [{
                                key: 1,
                                abbrev: "EECS 127",
                                link: "https://inst.eecs.berkeley.edu/~eecs127/fa20/"
                            }] 
                        },
                        {
                            name: "Computer Security",
                            links: [{
                                key: 1,
                                abbrev: "CS 161",
                                link: "https://cs161.org/"
                            }] 
                        },
                        {
                            name: "Introduction to Artificial Intelligence",
                            links: [{
                                key: 1,
                                abbrev: "CS 188",
                                link: "https://inst.eecs.berkeley.edu/~cs188/sp21/"
                            }] 
                        },
                        {
                            name: "Operating Systems and Systems Programming",
                            links: [{
                                key: 1,
                                abbrev: "CS 162",
                                link: "https://cs162.org/"
                            }] 
                        },
                        {
                            name: "Principles and Techniques of Data Science",
                            links: [{
                                key: 1,
                                abbrev: "Data 100",
                                link: "https://ds100.org/sp21/"
                            }] 
                        },
                        {
                            name: "Algorithms and Intractable Problems",
                            links: [{
                                key: 1,
                                abbrev: "CS 170",
                                link: "https://cs170.org/"
                            }] 
                        },
                        {
                            name: "Computer Architecture",
                            links: [{
                                key: 1,
                                abbrev: "CS 61C",
                                link: "https://cs61c.org/fa20/"
                            }]
                            
                        },
                        {
                            name: "Data Structures",
                            links: [{
                                key: 1,
                                abbrev: "CS 61B",
                                link: "http://www-inst.eecs.berkeley.edu/~cs61b/sp20/"
                            }]
                            
                        },
                        
                        {
                            name: "Discrete Math and Probability Theory",
                            links: [{
                                key: 1,
                                abbrev: "CS 70",
                                link: "http://www.eecs70.org/"
                            }]
                            
                        },
                        {
                            name: "Structure and Interpretation of Computer Programs",
                            links: [{
                                key: 1,
                                abbrev: "CS 61A",
                                link: "https://cs61a.org/"
                            }]
                        },
                        {
                            name: "Designing Information Devices and Systems",
                            links: [{
                                key: 1,
                                abbrev: "EECS 16A",
                                link: "https://inst.eecs.berkeley.edu/~ee16a/fa19/"
                            },
                            {

                                key: 2,
                                abbrev: "EECS 16B",
                                link: "https://inst.eecs.berkeley.edu/~ee16b/sp20/"
                            }]
                            
                        }
                    ]
                }
                
            ]}
            activities={[
                {
                    key: 1,
                    title: "Activities",
                    topicList: [
                        {
                            name: "Computer Science Mentors",
                            link: "https://csmentors.berkeley.edu/#/"
                        }, {
                            name: "CS 184 TA (Spring 2023)",
                            link: "https://cs184.eecs.berkeley.edu/sp23"
                        },{
                            name: "CS 194-26 Reader (Fall 2022)",
                            link: "https://inst.eecs.berkeley.edu/~cs194-26/fa22/"
                        },{
                            name: "ROAR - XR@Berkeley",
                            link: "https://roar.berkeley.edu/berkeley-major-map/"
                        }, {
                            name: "UAVs@Berkeley",
                            link: "https://uav.berkeley.edu/"
                        }, {
                            name: "Chinese Student Association",
                            link: "https://csa.berkeley.edu/"
                        },
                        
                    ]
                }
            ]}/>

            
            <School title="South High School" link="https://www.tusd.org/schools/shs" image={southLogo} date="2015-2019" activities={[
                {
                    key: 1,
                    title: "Activities",
                    topicList: [
                        {
                            name: "FIRST Robotics",
                            link: "http://www.team1197.com/"
                        },
                        {
                            name: "Varsity Golf"
                        },
                        {
                            name: "California Scholarship Federation",
                            link: "https://csf-cjsf.org/"
                        },
                        {
                            name: "Math Club"
                        },
                        {
                            name: "Science Olympiad"
                        },
                        {
                            name: "Taiwanese Chinese American Assoc."
                        }
                    ]
                }
            ]}/>
            <Activity title="Hobbies" description="In my free time, I like making travel videos, drawing, or playing golf with some friends." buttonName="Go to Hobbies Page" buttonLink="/hobbies" images={[
                SFRoad,
                DronePic,
                GolfPhoto
            ]}/>

        </div>
        
        
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

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
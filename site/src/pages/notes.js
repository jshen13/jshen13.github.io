import React from "react"
import Header from "../components/header"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

import ClassNotes from "../components/classNotes"
import notesStyles from "./notes.module.css"

import cs61a_fs from "../files/fa19/cs61a_fs.pdf" 
import cs61a_notes from "../files/fa19/cs61a_notes.pdf"
import eecs16a_fs from "../files/fa19/eecs16a_fs.pdf"
import math53_fs from "../files/fa19/math53_fs.pdf"
import math53_sg from "../files/fa19/math53_sg.pdf"

import cs61b_fs from "../files/sp20/cs61b_fs.pdf" 
import cs61b_notes from "../files/sp20/cs61b_notes.pdf" 
import cs70_fs from "../files/sp20/cs70_fs.pdf" 
import eecs16b_fs from "../files/sp20/eecs16b_fs.pdf"

import cs170_sg from "../files/fa20/cs170_sg.pdf"
import cs61c_fs from "../files/fa20/cs61c_fs.pdf"
import cs61c_notes from "../files/fa20/cs61c_notes.pdf"
import physics7b_sg from "../files/fa20/physics7b_sg.pdf"
import ugba135_notes from "../files/fa20/ugba135_notes.pdf" 

import cs188_sg from "../files/sp21/cs188_sg.pdf"
import data100_sg from "../files/sp21/data100_sg.pdf"
import cs162_fs from "../files/sp21/cs162_fs.pdf"
import cs162_notes from "../files/sp21/cs162_notes.pdf"
import cs188_notes from "../files/sp21/cs188_notes.pdf"
import data100_notes from "../files/sp21/data100_notes.pdf"
import sociol121_notes from "../files/sp21/sociol121_notes.pdf"

import Layout from "../components/layout"



export default function Notes({ data }) {
    function semesterHeading(semester) {
        return (
            <React.Fragment>
                <div className={notesStyles.semesterName}> 
                    <h1>{semester}</h1>
                    <hr></hr>
                </div>
                
            </React.Fragment>
        )
    }
    function fall19() {
        return (
            <div className={notesStyles.classesRow}>
                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 61A" prof="DeNero" notes={
                    [{
                        title: "Class Notes",
                        file: cs61a_notes
                    }, {
                        title: "Final Formula Sheet",
                        file: cs61a_fs
                    }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="EECS 16A" prof="Boser & Ranade" notes={
                    [{
                        title: "Final Formula Sheet",
                        file: eecs16a_fs
                    }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="Math 53" prof="Talaska" notes={
                    [{
                        title: "Final Study Guide",
                        file: math53_sg
                    }, {
                        title: "Final Formula Sheet",
                        file: math53_fs
                    }]
                } /></div>
            </div>
        )
    }

    function spring20() {
        return (
            <div className={notesStyles.classesRow}>
                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 61B" prof="Hilfinger" notes={
                    [{
                        title: "Class Notes",
                        file: cs61b_notes 
                    }, {
                        title: "Final Formula Sheet",
                        file: cs61b_fs
                    }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="EECS 16B" prof="Arcat & Sanders" notes={
                    [{
                        title: "Final Formula Sheet",
                        file: eecs16b_fs 
                    }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 70" prof="Ayazifar & Sahai" notes={
                    [{
                        title: "Final Formula Sheet",
                        file: cs70_fs 
                    }]
                } /></div>
            </div>
        )
    }
    function fall20() {
        return (
            <div className={notesStyles.classesRow}>
                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 61C" prof="Garcia & Nikolic" notes={
                [{
                    title: "Class Notes",
                    file: cs61c_notes 
                }, {
                    title: "Final Formula Sheet",
                    file: cs61c_fs
                }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 170" prof="Tal & Vazirani" notes={
                [{
                    title: "Final Study Guide",
                    file: cs170_sg
                }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="Physics 7B" prof="Birgeneau" notes={
                    [{
                        title: "Final Study Guide",
                        file: physics7b_sg
                    }]
                } /></div>
                <div className={notesStyles.classes3}>
                <ClassNotes title="UGBA 135" prof="Odean & Selinger" notes={
                    [{
                        title: "Class Notes",
                        file: ugba135_notes
                    }]
                } /></div>
        
            </div>  
        )
    }

    function spring21() {
        return (
            <div className={notesStyles.classesRow}>
                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 188" prof="Russell & Song" notes={
                [{
                    title: "Class Notes",
                    file: cs188_notes
                },
                {
                    title: "Final Study Guide",
                    file: cs188_sg
                }]
                } /></div>
                
                <div className={notesStyles.classes3}>
                <ClassNotes title="DATA C100" prof="Bray & Gonzalez" notes={
                [{
                    title: "Class Notes",
                    file: data100_notes
                },
                {
                    title: "Final Study Guide",
                    file: data100_sg
                }]
                } /></div>
                
                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 162" prof="Crooks & Joseph" notes={
                [{
                    title: "Class Notes",
                    file: cs162_notes
                },
                {
                    title: "Final Formula Sheet",
                    file: cs162_fs,
                }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="SOCIOL 121" prof="Ivester" notes={
                [{
                    title: "Class Notes",
                    file: sociol121_notes
                }]
                } /></div>
            </div>  
        )
    }

    function fall21() {
        return (
            <div className={notesStyles.classesRow}>
                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 194-26" prof="Efros & Kanazawa" notes={
                [
                    
                ]
                } /></div>
                
                <div className={notesStyles.classes3}>
                <ClassNotes title="EECS 127" prof="El Ghaoui" notes={
                []
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 161" prof="Popa & Weaver" notes={
                []
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="Psych 160" prof="Chen" notes={
                []
                } /></div>
            </div>  
        )
    }


    return (
        <div>
        <Layout siteTitle="Notes">
            <SEO title="Notes" />
            <div className={notesStyles.description}>
                <p>These are a compilation of my notes, study guides, and exam formula sheets from classes. </p>  
            </div>
            {semesterHeading("Fall 2021")}
            {fall21()}
            {semesterHeading("Spring 2021")}
            {spring21()}
            {semesterHeading("Fall 2020")}
            {fall20()}
            {semesterHeading("Spring 2020")}
            {spring20()}
            {semesterHeading("Fall 2019")}
            {fall19()}

        </Layout>
            

          

          
        </div>
    )

    
}


export const query = graphql`
query {
    site {
        siteMetadata {
            title
        }
    }

    file(relativePath: { eq: "files/cs61a_fs.pdf" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      allFile(filter: {extension: {eq: "pdf"}}) {
        edges {
          node {
            id
            base

          }
        }
      }
}
`
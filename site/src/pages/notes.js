import React from "react"
import Header from "../components/header"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

import ClassNotes from "../components/classNotes"
import notesStyles from "./notes.module.css"

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

    function noteLink(semester, name) {
        return `/notes/${semester}/${name}.pdf`
    }
    function fall19() {
        return (
            <div className={notesStyles.classesRow}>
                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 61A" prof="DeNero" notes={
                    [{
                        title: "Class Notes",
                        file: noteLink('fa19', 'cs61a_notes')
                    }, {
                        title: "Final Formula Sheet",
                        file: noteLink('fa19', 'cs61a_fs')
                    }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="EECS 16A" prof="Boser & Ranade" notes={
                    [{
                        title: "Final Formula Sheet",
                        file: noteLink('fa19', 'eecs16a_fs')
                    }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="Math 53" prof="Talaska" notes={
                    [{
                        title: "Final Study Guide",
                        file: noteLink('fa19', `math53_sg`)
                    }, {
                        title: "Final Formula Sheet",
                        file: noteLink('fa19', 'math53_fs')
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
                        file: noteLink('sp20', 'cs61b_notes') 
                    }, {
                        title: "Final Formula Sheet",
                        file: noteLink('sp20', 'cs61b_fs')
                    }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="EECS 16B" prof="Arcat & Sanders" notes={
                    [{
                        title: "Final Formula Sheet",
                        file: noteLink('sp20', 'eecs16b_fs')
                    }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 70" prof="Ayazifar & Sahai" notes={
                    [{
                        title: "Final Formula Sheet",
                        file: noteLink('sp20', 'cs70_fs')
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
                    file: noteLink('fa20', 'cs61c_notes')
                }, {
                    title: "Final Formula Sheet",
                    file: noteLink('fa20', 'cs61c_fs')
                }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 170" prof="Tal & Vazirani" notes={
                [{
                    title: "Final Study Guide",
                    file: noteLink('fa20', 'cs170_sg')
                }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="Physics 7B" prof="Birgeneau" notes={
                    [{
                        title: "Final Study Guide",
                        file: noteLink('fa20', 'physics7b_sg')
                    }]
                } /></div>
                <div className={notesStyles.classes3}>
                <ClassNotes title="UGBA 135" prof="Odean & Selinger" notes={
                    [{
                        title: "Class Notes",
                        file: noteLink('fa20', 'ugba135_notes')
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
                    file: noteLink('sp21', 'cs188_notes')
                },
                {
                    title: "Final Study Guide",
                    file: noteLink('sp21', 'cs188_sg')
                }]
                } /></div>
                
                <div className={notesStyles.classes3}>
                <ClassNotes title="DATA C100" prof="Bray & Gonzalez" notes={
                [{
                    title: "Class Notes",
                    file: noteLink('sp21', 'data100_notes')
                },
                {
                    title: "Final Study Guide",
                    file: noteLink('sp21', 'data100_sg')
                }]
                } /></div>
                
                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 162" prof="Crooks & Joseph" notes={
                [{
                    title: "Class Notes",
                    file: noteLink('sp21', 'cs162_notes')
                },
                {
                    title: "Final Formula Sheet",
                    file: noteLink('sp21', 'cs162_fs')
                }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="SOCIOL 121" prof="Ivester" notes={
                [{
                    title: "Class Notes",
                    file: noteLink('sp21', 'sociol121_notes')
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
                [{
                    title: "Class Notes",
                    file: noteLink('fa21', 'cs194-26_notes')
                },
                {
                    title: "Midterm Formula Sheet",
                    file: noteLink('fa21', 'cs194-26_fs'),
                },
                {
                    title: "Projects",
                    file: "https://inst.eecs.berkeley.edu/~cs194-26/fa21/upload/files/projFinalAssigned/cs194-26-aeo/",
                }]
                } /></div>
                
                <div className={notesStyles.classes3}>
                <ClassNotes title="EECS 127" prof="El Ghaoui" notes={
                [{
                    title: "Class Notes",
                    file:  noteLink('fa21', 'eecs127_notes')
                },
                {
                    title: "Final Formula Sheet",
                    file: noteLink('fa21', 'eecs127_fs')
                }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 161" prof="Popa & Weaver" notes={
                [{
                    title: "Class Notes",
                    file: noteLink('fa21', 'cs161_notes')
                },
                {
                    title: "Final Formula Sheet",
                    file: noteLink('fa21', 'cs161_fs')
                }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="Psych 160" prof="Chen" notes={
                [{
                    title: "Class Notes",
                    file: noteLink('fa21', 'psych160_notes')
                }]
                } /></div>
            </div>  
        )
    }

    function spring22() {
        return (
            <div className={notesStyles.classesRow}>
                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 189" prof="Shewchuk" notes={
                [{
                    title: "Class Notes",
                    file: noteLink('sp22', 'cs189_notes')
                },
                {
                    title: "Final Formula Sheet",
                    file: noteLink('sp22', 'cs189_fs')
                }]
                } /></div>
                
                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 184" prof="Ng" notes={
                [{
                    title: "Class Notes",
                    file: noteLink('sp22', 'cs184_notes')
                },
                {
                    title: "Final Formula Sheet",
                    file: noteLink('sp22', 'cs184_fs')
                }]
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="LS C160V" prof="Keltner" notes={
                [{
                    title: "Class Notes",
                    file: noteLink('sp22', 'ls160v_notes')
                }]
                } /></div>
            </div>  
        )
    }

    function fall22() {
        return (
            <div className={notesStyles.classesRow}>
                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 186" prof="Cheung" notes={
                []
                } /></div>
                
                <div className={notesStyles.classes3}>
                <ClassNotes title="CS 182" prof="Sahai" notes={
                []
                } /></div>

                <div className={notesStyles.classes3}>
                <ClassNotes title="UGBA 107" prof="Ross" notes={
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
            {semesterHeading("Fall 2022")}
            {fall22()}
            {semesterHeading("Spring 2022")}
            {spring22()}
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
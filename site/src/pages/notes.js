import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import ClassNotes from "../components/classNotes"
import * as notesStyles from "./notes.module.css"

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

  function pngLink(semester, name) {
    return `/notes/${semester}/${name}.png`
  }
  function fall19() {
    return (
      <div className={notesStyles.classesRow}>
        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 61A"
            prof="DeNero"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("fa19", "cs61a_notes"),
              },
              {
                title: "Final Formula Sheet",
                file: noteLink("fa19", "cs61a_fs"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="EECS 16A"
            prof="Boser & Ranade"
            notes={[
              {
                title: "Final Formula Sheet",
                file: noteLink("fa19", "eecs16a_fs"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="Math 53"
            prof="Talaska"
            notes={[
              {
                title: "Final Study Guide",
                file: noteLink("fa19", `math53_sg`),
              },
              {
                title: "Final Formula Sheet",
                file: noteLink("fa19", "math53_fs"),
              },
            ]}
          />
        </div>
      </div>
    )
  }

  function spring20() {
    return (
      <div className={notesStyles.classesRow}>
        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 61B"
            prof="Hilfinger"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("sp20", "cs61b_notes"),
              },
              {
                title: "Final Formula Sheet",
                file: noteLink("sp20", "cs61b_fs"),
              },
              {
                title: "Time Breakdown: 137 hrs",
                file: pngLink("sp20", "cs61b_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="EECS 16B"
            prof="Arcat & Sanders"
            notes={[
              {
                title: "Final Formula Sheet",
                file: noteLink("sp20", "eecs16b_fs"),
              },
              {
                title: "Time Breakdown: 80 hrs",
                file: pngLink("sp20", "eecs16b_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 70"
            prof="Ayazifar & Sahai"
            notes={[
              {
                title: "Final Formula Sheet",
                file: noteLink("sp20", "cs70_fs"),
              },
              {
                title: "Time Breakdown: 165 hrs",
                file: pngLink("sp20", "cs70_time"),
              },
            ]}
          />
        </div>
      </div>
    )
  }
  function fall20() {
    return (
      <div className={notesStyles.classesRow}>
        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 61C"
            prof="Garcia & Nikolic"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("fa20", "cs61c_notes"),
              },
              {
                title: "Final Formula Sheet",
                file: noteLink("fa20", "cs61c_fs"),
              },
              {
                title: "Time Breakdown: 159 hrs",
                file: pngLink("fa20", "cs61c_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 170"
            prof="Tal & Vazirani"
            notes={[
              {
                title: "Final Study Guide",
                file: noteLink("fa20", "cs170_sg"),
              },
              {
                title: "Time Breakdown: 200 hrs",
                file: pngLink("fa20", "cs170_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="Physics 7B"
            prof="Birgeneau"
            notes={[
              {
                title: "Final Study Guide",
                file: noteLink("fa20", "physics7b_sg"),
              },
              {
                title: "Time Breakdown: 99 hrs",
                file: pngLink("fa20", "physics7b_time"),
              },
            ]}
          />
        </div>
        <div className={notesStyles.classes3}>
          <ClassNotes
            title="UGBA 135"
            prof="Odean & Selinger"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("fa20", "ugba135_notes"),
              },
              {
                title: "Time Breakdown: 18 hrs",
                file: pngLink("fa20", "ugba135_time"),
              },
            ]}
          />
        </div>
      </div>
    )
  }

  function spring21() {
    return (
      <div className={notesStyles.classesRow}>
        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 188"
            prof="Russell & Song"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("sp21", "cs188_notes"),
              },
              {
                title: "Final Study Guide",
                file: noteLink("sp21", "cs188_sg"),
              },
              {
                title: "Time Breakdown: 93 hrs",
                file: pngLink("sp21", "cs188_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="DATA C100"
            prof="Bray & Gonzalez"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("sp21", "data100_notes"),
              },
              {
                title: "Final Study Guide",
                file: noteLink("sp21", "data100_sg"),
              },
              {
                title: "Time Breakdown: 74 hrs",
                file: pngLink("sp21", "data100_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 162"
            prof="Crooks & Joseph"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("sp21", "cs162_notes"),
              },
              {
                title: "Final Formula Sheet",
                file: noteLink("sp21", "cs162_fs"),
              },
              {
                title: "Time Breakdown: 215 hrs",
                file: pngLink("sp21", "cs162_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="SOCIOL 121"
            prof="Ivester"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("sp21", "sociol121_notes"),
              },
              {
                title: "Time Breakdown: 28 hrs",
                file: pngLink("sp21", "sociol121_time"),
              },
            ]}
          />
        </div>
      </div>
    )
  }

  function fall21() {
    return (
      <div className={notesStyles.classesRow}>
        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 194-26"
            prof="Efros & Kanazawa"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("fa21", "cs194-26_notes"),
              },
              {
                title: "Midterm Formula Sheet",
                file: noteLink("fa21", "cs194-26_fs"),
              },
              {
                title: "Projects",
                file: "https://inst.eecs.berkeley.edu/~cs194-26/fa21/upload/files/projFinalAssigned/cs194-26-aeo/",
              },
              {
                title: "Time Breakdown: 102 hrs",
                file: pngLink("fa21", "cs194-26_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="EECS 127"
            prof="El Ghaoui"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("fa21", "eecs127_notes"),
              },
              {
                title: "Final Formula Sheet",
                file: noteLink("fa21", "eecs127_fs"),
              },
              {
                title: "Time Breakdown: 45 hrs",
                file: pngLink("fa21", "eecs127_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 161"
            prof="Popa & Weaver"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("fa21", "cs161_notes"),
              },
              {
                title: "Final Formula Sheet",
                file: noteLink("fa21", "cs161_fs"),
              },
              {
                title: "Time Breakdown: 52 hrs",
                file: pngLink("fa21", "cs161_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="Psych 160"
            prof="Chen"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("fa21", "psych160_notes"),
              },
              {
                title: "Time Breakdown: 8 hrs",
                file: pngLink("fa21", "psych160_time"),
              },
            ]}
          />
        </div>
      </div>
    )
  }

  function spring22() {
    return (
      <div className={notesStyles.classesRow}>
        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 189"
            prof="Shewchuk"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("sp22", "cs189_notes"),
              },
              {
                title: "Final Formula Sheet",
                file: noteLink("sp22", "cs189_fs"),
              },
              {
                title: "Time Breakdown: 106 hrs",
                file: pngLink("sp22", "cs189_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 184"
            prof="Ng"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("sp22", "cs184_notes"),
              },
              {
                title: "Final Formula Sheet",
                file: noteLink("sp22", "cs184_fs"),
              },
              {
                title: "Projects",
                file: "https://cal-cs184-student.github.io/sp22-project-webpages-lulu-yu/",
              },
              {
                title: "Time Breakdown: 67 hrs",
                file: pngLink("sp22", "cs184_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="LS C160V"
            prof="Keltner"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("sp22", "ls160v_notes"),
              },
            ]}
          />
        </div>
      </div>
    )
  }

  function fall22() {
    return (
      <div className={notesStyles.classesRow}>
        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 186"
            prof="Cheung"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("fa22", "cs186_notes"),
              },
              {
                title: "Final Formula Sheet",
                file: noteLink("fa22", "cs186_fs"),
              },
              {
                title: "Time Breakdown: 79 hrs",
                file: pngLink("fa22", "cs186_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 182"
            prof="Sahai"
            notes={[
              {
                title: "Final Formula Sheet",
                file: noteLink("fa22", "cs182_fs"),
              },
              {
                title: "Time Breakdown: 71 hrs",
                file: pngLink("fa22", "cs182_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="UGBA 176"
            prof="Dwyer"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("fa22", "ugba176_notes"),
              },
              {
                title: "Time Breakdown: 6 hrs",
                file: pngLink("fa22", "ugba176_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="UGBA 107"
            prof="Ross"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("fa22", "ugba107_notes"),
              },
            ]}
          />
        </div>
      </div>
    )
  }

  function spring23() {
    return (
      <div className={notesStyles.classesRow}>
        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 152"
            prof="Shao"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("sp23", "cs152_notes"),
              },
              {
                title: "Final Formula Sheet",
                file: noteLink("sp23", "cs152_fs"),
              },
              {
                title: "Time Breakdown: 64 hrs",
                file: pngLink("sp23", "cs152_time"),
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="LS C180U"
            prof="Reich"
            notes={[
              {
                title: "Class Notes",
                file: noteLink("sp23", "ls180_notes"),
              },
              {
                title: "Time Breakdown: 7 hrs",
                file: pngLink("sp23", "ls180_time"),
              },
            ]}
          />
        </div>
      </div>
    )
  }

  function teaching() {
    return (
      <div className={notesStyles.classesRow}>
        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 61B"
            prof="CSM"
            notes={[
              {
                title: "Teaching Slides",
                file: "https://drive.google.com/drive/folders/14nJxmINV6WT9GSqZCUFPpeM7Myq3yhqp?usp=sharing",
              },
            ]}
          />
        </div>

        <div className={notesStyles.classes3}>
          <ClassNotes
            title="CS 184"
            prof="TA"
            notes={[
              {
                title: "Discussion Slides",
                file: "https://drive.google.com/drive/folders/1AEvjsMn-9fXHmaMxeyzQq2wiPhQ-ZO0j?usp=sharing",
              },
            ]}
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <Layout siteTitle="Notes">
        <SEO title="Notes" />
        <div className={notesStyles.description}>
          <p>
            These are a compilation of my notes, study guides, and exam formula
            sheets from classes at UC Berkeley.{" "}
          </p>
        </div>
        {semesterHeading("Spring 2023")}
        {spring23()}
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
        {semesterHeading("Teaching")}
        {teaching()}
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

    allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          id
          base
        }
      }
    }
  }
`

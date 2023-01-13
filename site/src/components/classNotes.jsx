import React, { Component } from 'react';
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import classNotesStyles from "./classNotes.module.css"
import { FiDownload } from 'react-icons/fi';

export default function ClassNotes({ data, title, prof, notes }) {
    function notesLinks(note) {
        return (
            <React.Fragment>
                <a href={note.file} target="_blank">{note.title}</a>
                <a href={note.file} download>  <FiDownload /></a>
                <br />
                
            </React.Fragment>
        )
    }

    return (
        <div className={classNotesStyles.classComponent}>
            <div className={classNotesStyles.titleProf}>
                <h3>
                    {title} - <span style=
                        {{
                            'font-weight': 'normal'
                        }}>{prof}</span>
                </h3>
                <hr></hr>
            </div>
            <div className={classNotesStyles.notesFiles}>
                {notes.map(notesLinks)}

            </div>
            
      </div>
    )
  
      
  }
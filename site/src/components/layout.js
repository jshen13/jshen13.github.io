/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../images/logos/logo2.png"
import Header from "./header"
import "./layout.css"

const Layout = ({ children, siteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <React.Fragment>
      <Header siteTitle={siteTitle} />
      <head>
        <link rel="icon" href={favicon}></link>

      </head>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1100,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
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
          </div>
        </React.Fragment>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

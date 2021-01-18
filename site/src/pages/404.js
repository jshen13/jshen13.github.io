import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <br></br>
    <h1>404: Not Found 😔</h1>
    <p>You just hit a route that doesn&#39;t exist... </p>
  </Layout>
)

export default NotFoundPage

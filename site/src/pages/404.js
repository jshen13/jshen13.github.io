import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <br></br>
    <h1>404: Not Found <span role="img">😔</span></h1>
    <p>You just hit a route that doesn&#39;t exist... </p>
  </Layout>
)

export default NotFoundPage

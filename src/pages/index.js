import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Presentation from "../components/presentation"
import Project from "../components/project"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Presentation />
    <Project />
  </Layout>
)

export default IndexPage

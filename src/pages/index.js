import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Presentation from '../components/presentation'
import Project from '../components/project'
import About from '../components/about'

const IndexPage = () => (
  <Layout>
    <SEO title="Christopher Cardoso | Full Stack Developer | Software Developer" />
    <Presentation />
    <Project />
    <About />
  </Layout>
)

export default IndexPage

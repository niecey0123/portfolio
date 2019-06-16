import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <Helmet title="foo bar" defer={false}>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Success/Thank You Page</h1>
          </header>
          <span className="image main">
            <img src={'https://i.gifer.com/59Mp.gif'} alt="progress-photo" />
          </span>
          <p>Thank you for contacting us!</p>
        </div>
      </section>
    </div>
  </Layout>
)


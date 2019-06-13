import React from "react"
import Layout from "../components/layout"


export default () => (
    <Layout>
   <div>
    <h1>About me</h1>
    <p>Software Engineer From The Big Apple (NYC)</p>
    <p>Welcome to my portfolio website! My name is Shaniece Crumpler, I am an optimistic 
        and driven Software Engineer who strives to uplift the teams I work with. As a Web Developer, I have an 
        innate ability to resolve and de-escalate complex, organizational problems. I seek the opportunity to work 
        in a collaborative environment where leadership provides diverse opportunities to grow into a leader 
        who gives back to others.</p>
        <img className='About-photo' src={require('../images/niecey-port-photo.png')} alt= "niecey-photo"/>
  </div>
    </Layout>

)
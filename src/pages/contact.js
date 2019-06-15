import React from "react"
import Layout from "../components/layout"
import 'bulma/css/bulma.css'
import DummyForm from "../components/dummyForm"


export default () => (
    <Layout>

<DummyForm/>

        {/* <div>
    <h1>I'd love to talk! Email me at the address below</h1>

    <form name="contact" action="POST" data-netlify="true" >
      
        <div className="field">
        <label htmlFor="name" className="label">Name</label>
        <div className="control">
            <input  className="input" name="name" type="text" placeholder="name" />
        </div>
        </div>


        <div className="field">
        <label htmlFor="email" className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
            <input  name="email" className="input is-info" type="email" placeholder="Email"  />
            <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle" />
            </span>
        </div>
        </div>


        <div className="field">
            <label htmlFor="subject" className="label">Subject</label>
            <div className="control">
                <div className="select">
                <select name= "inquiry">
                    <option >Select dropdown</option>
                    <option >Job Opportunity</option>
                </select>
                </div>
            </div>
            </div>

            <div className="field">
            <label htmlFor="message" className="label">Message</label>
            <div className="control">
                <textarea className="textarea" name="message" placeholder="Textarea"></textarea>
            </div>
            </div>

            {/* <div className="field">
            <div data-netlify-recaptcha="true">
            </div>
            </div> */}

         <div className="field is-grouped">
        <div className="control">
            <button type="submit" className="button is-link">Submit</button>
        </div>
        </div>


   
      </form>

        </div> */}
        </Layout>

  
)
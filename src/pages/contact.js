import React from "react"
import Layout from "../components/layout"
import 'bulma/css/bulma.css'

export default () => (
    <Layout>
        <div>
    <h1>I'd love to talk! Email me at the address below</h1>

    <form name="contact" method="POST" data-netlify="true" netlify netlify-honeypot="bot-field" data-netlify-recaptcha="true">
      
        <div className="field">
        <label htmlFor="name" className="label">Name</label>
        <div className="control">
            <input  className="input" name="form-name" type="text" placeholder="name" />
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
                <select name="options[]" multiple>
                    <option value="option1">Select dropdown</option>
                    <option value="option2">Job Opportunity</option>
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

         <div className="field is-grouped">
        <div className="control">
            <button type="submit" className="button is-link">Submit</button>
        </div>
        </div>

        <div data-netlify-recaptcha="true"></div>
   
      </form>

        </div>
        </Layout>

  
)
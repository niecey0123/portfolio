import React from "react"
import Layout from "../components/layout"
import 'bulma/css/bulma.css'

export default () => (
    <Layout>
        <div>
    <h1>I'd love to talk! Email me at the address below</h1>

    {/* <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      
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
                <select>
                    <option value="leader">Select dropdown</option>
                    <option value="follower">Job Opportunity</option>
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


   
      </form> */}


<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
        </div>
        </Layout>

  
)
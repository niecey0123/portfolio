import React from "react"

export default () => (
  // <form
  //   name="contact"
  //   method="post"
  //   action="/success"
  //   data-netlify="true"
  //   data-netlify-honeypot="bot-field"
  // >
  //   <input type="hidden" name="bot-field" />
  //   <div>
  //     <label htmlFor="name">Name</label>
  //     <input type="text" name="name" id="name" />
  //   </div>
  //   <div>
  //     <label htmlFor="email">Email</label>
  //     <input type="text" name="email" id="email" />
  //   </div>
  //   <div>
  //     <label htmlFor="message">Message</label>
  //     <textarea name="message" id="message" rows="6" required />
  //   </div>
  //   <div>
  //     <input type="submit" value="Drop a line" />
  //     <input type="reset" value="Eraser" />
  //   </div>
  // </form>

//   <form name="contact"
//   method="post"
//   action="/success" 
//   data-netlify="true"
//   data-netlify-honeypot="bot-field">
//   <div className="field half first">
//     <label htmlFor="name">Name</label>
//     <input type="hidden" name="form-name" value="contact" />
//     <input type="text" name="name" id="name" />
//   </div>
//   <div className="field half">
//     <label htmlFor="email">Email</label>
//     <input type="text" name="email" id="email" />
//   </div>
//   <div className="field">
//     <label htmlFor="message">Message</label>
//     <textarea name="message" id="message" rows="6" />
//   </div>
//   <ul className="actions">
//     <li>
//       <input type="submit" value="Send Message" className="special" />
//     </li>
//     <li>
//       <input type="reset" value="Clear" />
//     </li>
//   </ul>
// </form>


    <div>
    <h1>I'd love to talk! Email me at the address below</h1>

    <form name="contact"
        method="post"
        action="/success" 
        data-netlify="true"
        data-netlify-honeypot="bot-field">
      
        <div className="field">
        <label htmlFor="name" className="label">Name</label>
        <div className="control">
            <input type="hidden" name="form-name" value="contact" />
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


         <div className="field is-grouped">
        <div className="control">
            <button type="submit" className="button is-link" value="Send Message" className="special" >Submit</button>
        </div>
        </div>


   
      </form>
  </div>
        
      
)
import React from "react";

function Contact() {
  return (
    <div>
    <h1 className="contact-heading create">Contact us</h1>
      <div className="form-container">
        <form>
          <div>
            <label>FullName: </label>
            <input type="text" required></input>
          </div>
          <div>
            <label>Email:</label>
            <input type="email" required></input>
          </div>
          <div>
            <label>Topics</label>
            <select>
              <option value="general"> General </option>
              <option value="complaints"> Complaints </option>
              <option value="feedbacks"> Feedbacks </option>
            </select>
          </div>
          <div>
            <label>Message:</label>
            <textarea></textarea>
          </div>
          <div>
            <button className="button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

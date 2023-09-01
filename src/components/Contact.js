import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact us</h1>
      <form>
        <label>FullName: </label>
        <input type="text" required></input>
        <label>Email:</label>
        <input type="email" required></input>
        <label>Topics</label>
        <select>
          <option value="complaints">Complaints</option>
          <option value="feedbacks">Feedbacks</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;

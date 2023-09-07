import React, { useState } from "react";

function Contact() {
  // Defining initial state of form data
  const initialFormData = {
    fullName: "",
    email: "",
    topic: "general",
    message: "",
  };

  // creating a state variable for the form data using useState
  const [formData, setFormData] = useState(initialFormData);

  // Event handler for input changes
  const handleInputChange = (e) => {
    // extracting the name and value from input field
    const { name, value } = e.target;

    // update formData with new value
    setFormData({ ...formData, [name]: value });
  };

  // Event handler for form submission
  const handleSubmit = () => {
    // display with user input
    alert(
      `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nTopic: ${formData.topic}\nMessage: ${formData.message}`
    );
  };

  return (
    <div>
      <h1 className="contact-heading create">Contact us</h1>
      <div className="form-container">
        <form>
          <div>
            <label>FullName: </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullname}
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <div>
            <label>Topics</label>

            <select
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
            >
              <option value="general"> General </option>
              <option value="complaints"> Complaints </option>
              <option value="feedbacks"> Feedbacks </option>
            </select>
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <button className="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

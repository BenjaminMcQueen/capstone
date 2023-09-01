import React from "react";
import Aaditya from "./images/Aaditya.jpeg";
import Benjamin from "./images/benjamin.jpeg";
import "font-awesome/css/font-awesome.min.css";

function AboutUs() {
  return (
    <div>
      <div className="container">
        <div className="image-container">
          <img src={Aaditya} alt="Aaditya Acharya" />
          <h4>
            Direct email me at
            <a href="mailto:chudaa203@gmail.com">
              chudaa203@gmail.com
            </a> <br /> <hr />
            Click me to call
            <a href="tel:+13153789574"> 315-378-9574</a> <hr />
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/aaditya-acharya-25575911a/"
            >Linkdin</a><br /><hr />
            <a
              className="social-icon"
              href="https://github.com/settings/profile"
            >Github</a> <br /><hr />
            <a
              className="social-icon"
              href="https://www.facebook.com/aaditya.acharya.37?mibextid=LQQJ4d"
            >Facebook</a><hr />
          </h4>
        </div>
        <div className="content">
          <h1 className="names">Aaditya Acharya</h1>
          <p className="intro-paragraph">
            As a hardworking and skilled individual with a love for both the
            magical possibilities of the internet and outdoor activities such as
            fishing and hiking with loved ones, I am a dedicated associate in
            pursuit of a successful career.
          </p>
          <p className="hobbies-paragraph">
            Apart from learning web development and working full-time as a home
            health aide, I enjoy debugging and perfecting my coding skills. I
            spend most of my time outdoors, indulging in activities like fishing
            and hiking.
          </p>
          <div className="skills">
            <h2 className="skill">Some of my Skills</h2>
            <ul className="skills-list">
              <li className="skill-hover">HTML 5</li>
              <li className="skill-hover">CSS3</li>
              <li className="skill-hover">Bootstrap 5</li>
              <li className="skill-hover">Node.js</li>
              <li className="skill-hover">JavaScript</li>
              <li className="skill-hover">MongoDB/noSQL</li>
              <li className="skill-hover">React/Redux</li>
              <li className="skill-hover">Express</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img src={Benjamin} alt="Benjamin McQueen" />
          <h4>
            <a href="mailto:chudaa203@gmail.com">
              chudaa203@gmail.com
            </a> <br /> <hr />
            <a href="tel:+13153789574"> 315-378-9574</a> <hr />
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/aaditya-acharya-25575911a/"
            >Linkdin</a><br /><hr />
            <a
              className="social-icon"
              href="https://github.com/settings/profile"
            >Github</a> <br /><hr />
            <a
              className="social-icon"
              href="https://www.facebook.com/aaditya.acharya.37?mibextid=LQQJ4d"
            >Facebook</a><hr />
          </h4>
        </div>
        <div className="content">
          <h1 className="names">Benjamin McQueen</h1>
          <p className="intro-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            suscipit sunt ad perspiciatis fuga quidem expedita, ducimus, dicta
            quibusdam iste vitae vero rerum quas explicabo recusandae quam
            velit, optio eum!
          </p>
          <p className="hobbies-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            dolores expedita explicabo eligendi a corporis consequatur
            repellendus molestiae quibusdam commodi.
          </p>
          <div className="skills">
            <h2 className="skill">Some of my Skills</h2>
            <ul className="skills-list">
              <li className="skill-hover">HTML 5</li>
              <li className="skill-hover">CSS3</li>
              <li className="skill-hover">Bootstrap 5</li>
              <li className="skill-hover">Node.js</li>
              <li className="skill-hover">JavaScript</li>
              <li className="skill-hover">MongoDB/noSQL</li>
              <li className="skill-hover">React/Redux</li>
              <li className="skill-hover">Express</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

import React from "react";
import Aaditya from "./images/Aaditya.jpeg";
import Benjamin from "./images/benjamin.jpeg";
import "font-awesome/css/font-awesome.min.css";
import "./css/aboutus.css";

function AboutUs() {
  return (
    <div>
      <div className="container">
        <div className="image-container">
          <img src={Aaditya} alt="Aaditya Acharya" />
          <h4 className="email">
            <a href="mailto:chudaa203@gmail.com"  className="email">
              CHUDAA203@GMAIL.COM
            </a> <br /> <hr />
            <a href="tel:+13153789574"> 315-378-9574</a> <hr />
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/aaditya-acharya-25575911a/"
            >
              Linkdin
            </a>
            <br />
            <hr />
            <a
              className="social-icon"
              href="https://github.com/settings/profile"
            >
              Github
            </a>{" "}
            <br />
            <hr />
            <a
              className="social-icon"
              href="https://www.facebook.com/aaditya.acharya.37?mibextid=LQQJ4d"
            >
              Facebook
            </a>
            <hr />
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
            <div className="skills-wrapper">
              <div className="skills-list1">
                <ul>
                  <li className="skill-hover social-icon-skill">HTML 5</li>
                  <li className="skill-hover social-icon-skill">CSS3</li>
                  <li className="skill-hover social-icon-skill">Bootstrap 5</li>
                  <li className="skill-hover social-icon-skill">Node.js</li>
                </ul>
              </div>

              <div className="skills-list2">
                <ul>
                  <li className="skill-hover social-icon-skill">JavaScript</li>
                  <li className="skill-hover social-icon-skill">
                    MongoDB/noSQL
                  </li>
                  <li className="skill-hover social-icon-skill">React/Redux</li>
                  <li className="skill-hover social-icon-skill">Express</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="image-container">
          <img src={Benjamin} alt="Benjamin McQueen" />
          <h4>
            <a href="mailto:Benjamin.McQueen9@gmail.com">
              Benjamin.McQueen9@gmail.com
            </a>{" "}
            <br /> <hr />
            <a href="tel:+16066435987"> 606-643-5987</a> <hr />
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/aaditya-acharya-25575911a/"
            >
              Linkdin
            </a>
            <br />
            <hr />
            <a
              className="social-icon"
              href="https://github.com/BenjaminMcQueen"
            >
              Github
            </a>{" "}
            <br />
            <hr />
          </h4>
        </div>
        <div className="content">
          <h1 className="names">Benjamin McQueen</h1>
          <p className="intro-paragraph">
            I'm a problem solver, and an avid one at that! I like to take a
            steady approach to my code, and make it as efficient as I can be. I
            work hard, knowing that, while there's no shortcuts to success, if
            at all possible I can perhaps make anything easier for my someone,
            it's worth the effort.
          </p>
          <p className="hobbies-paragraph">
            Outside of coding, I have a wide variety of interests! While my
            primary interest is gaming (Both digital and analogue games alike),
            I also like to branch out into art (Sorry, I'm one of those shy
            artists!), literature, various fields of mathmatics, and sometimes
            even philosophy.
          </p>
          <div className="skills">
            <h2 className="skill">Some of my Skills</h2>
            <div className="skills-wrapper">
              <div className="skills-list1">
                <ul>
                  <li className="skill-hover social-icon-skill">HTML 5</li>
                  <li className="skill-hover social-icon-skill">Bootstrap 5</li>
                  <li className="skill-hover social-icon-skill">Node.js</li>
                  <li className="skill-hover social-icon-skill">JavaScript</li>
                  <li className="skill-hover social-icon-skill">
                    MongoDB/noSQL
                  </li>
                  <li className="skill-hover social-icon-skill">React/Redux</li>
                </ul>
              </div>

              <div className="skills-list2">
                <ul>
                  <li className="skill-hover social-icon-skill">Express</li>
                  <li className="skill-hover social-icon-skill">Java</li>
                  <li className="skill-hover social-icon-skill">Spring</li>
                  <li className="skill-hover social-icon-skill">Python</li>
                  <li className="skill-hover social-icon-skill">Flask</li>
                  <li className="skill-hover social-icon-skill">C#</li>
                  <li className="skill-hover social-icon-skill">.net</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

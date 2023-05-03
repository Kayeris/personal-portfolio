import React from "react";

import LaptopSitting from "../assets/laptop-woman.svg"
import "../styles/about-me.css"

function AboutMe() {
    return (
      <div className="about-me">
        <h2 className="headings">Welcome to my World!</h2>
        <h3 className="text-padding">Who Am I?</h3>
        <div className="panel-flex">
          <div>
            <p className="text-padding headings">Currently a 4th year Honours Student at the University of Guelph.
              Recognized for having a strong desire to work with future technological leaders in the industry for
              both professional and personal growth. A quick learner, ready to overcome any challenges that come her way.</p>
            <p className="text-padding headings">I am a university student who's been involved with technology, and more
              specifically, coding, for over 8 years. I specialize in design and front-end development of websites, apps etc!
              I like to spend my time making things, either in creative aspects (stories, poems, photography) or learning new
              tips & tricks in the coding world!</p>
            <div className="education-block">
              <h4 className="text-padding headings">University of Guelph</h4>
              <p className="edu-info headings">Bachelors of Computing, Honours</p>
              <p className="edu-info headings">Computer Science | Statistics</p>
              <p className="edu-info headings">September 2019 - May 2024</p>
            </div>

          </div>
          <img className="sittinglaptop" src={LaptopSitting} alt="gradient icon of a girl sitting cross-legged on her laptop" />
        </div>
          
      </div>
    );
  }
  
  export default AboutMe;
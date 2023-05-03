import React from "react";

import Jumper from "../assets/jumping-woman.svg"
import "../styles/landing-div.css"

function IntroDiv() {
    return (
      <div className="hero">
          <h1 className="intro-text">Hey! I'm</h1>
          <div className="banner-area">
            <img className="jumper" src={Jumper} alt="gradient icon of a girl" />
            <div className="banner-text-right">
                <div className="banner-right">
                <h1 className="my-name">Shaiza</h1>
                </div>
                <h3 className="banner-right">A Frontend Developer</h3>
            </div>
          </div>
      </div>
    );
  }
  
  export default IntroDiv;